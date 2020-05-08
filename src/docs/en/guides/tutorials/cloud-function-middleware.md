---
title: Cloud function middleware
description: Short Tutorial showing both async/await and callback-style runtime helpers to modify request objects.
sections:
  - Overview
  - arc.http.async
  - arc.http
---

## Overview

Architect provides two optional middleware helpers for cutting down on boilerplate HTTP operations by using the @architect/functions library. 

- `arc.http.async` is an `async/await` style middleware API
- `arc.http` is a classic callback-style middleware API

Both middleware helpers conveniently attach user sessions to the incoming `request` object (if applicable), and decode and parse the `request` body (again, if applicable).

We'll take a look at an example with each and discuss some common use cases. 

## `arc.http.async`

Combine multiple `async/await` operations in a single HTTP function handler.

`arc.http.async()` accepts `async` functions as arguments, and returns a Lambda compatible function signature. These functions will be run in series and allow you to transform the request object with multiple async functions before emitting a `response` to the client. 

### Example

Here's an example in which we'll register `addCountryCode`, `validateUser`, and `showDashboard` functions to run in series.

- `addCountryCode` adds `countryCode` to our `request`
- `validateUser` will return a redirect response if the user is not logged in (ending `arc.http.async` processing), or return nothing if the user is logged in (continuing execution)
- `showDashboard` will show a dashboard for users, since we know they're logged in

1. Create a new Architect project with `arc init` and replace the `.arc` file with the following:
```
mkdir arc-async-middleware
cd arc-async-middleware
arc init
```

```md
# .arc file
@app
arc-async

@http
get /
get /dashboard
```
2. Now we can run `arc create` and it will scaffold the folder structure we need to continue.

3. You should now see two HTTP functions, `get-index` and `get-dashboard`.

4. In order to use the runtime helpers, we have to install `@architect/functions` and require it at the top of the file. Each HTTP function as a self contained unit, so any dependencies you need must be present within the function folder.

```bash
cd src/http/get-dashboard
npm init -y
npm install @architect/functions
```

5. Let's go ahead and replace the contents of `src/http/get-dashboard/index.js` with the following:

```javascript
// src/http/get-dashboard/index.js

let arc = require('@architect/functions')

// Add a 'countryCode' attribute to the request
async function addCountryCode(request) {
  // AWS already does this with req.headers['CloudFront-Viewer-Country']
  // but for other cloud providers you can use your preferred geoIP module
  // ... or just pretend everyone is in New Zealand!
  request.countryCode = 'NZ'
  // The modified request will be used in subsequent steps
  return request
}

// Check to see if the user in a query string is on the authorized list 
async function validateUser(request) {
  let user = request.query.user
  let authorized = ['nic_cage']

  if(!authorized.includes(user)) {
    console.log(`You are not authorized`)
    return {
      status: 200,
      body: `Meditate further for authorization`
    }
  }
  console.log(`nic_cage is authorized`)
  //return nothing, so execution continues
}

// Show a HTML page. If we've reached this step we know the user is logged in, and we know their country code!
async function showDashboard(request) {
  console.log(`Showing dashboard`)
  let body = `
  <body>
    <h1>Dashboard</h1>
    <p>Hi! ${request.query.user} You are logged in from ${request.countryCode}! <a href="/logout">logout</a><p>
  </body>`
  return {
    status: 200,
    type: 'text/html',
    body
  }
}

exports.handler = arc.http.async(addCountryCode, validateUser, showDashboard)
```
In a single handler, we can add a country code to the `request` object, pass it to an authentication function, and finally build a `response` back to the client. 

6. Now let's try it using Sandbox, our local dev environment. 

```
cd /arc-async-middleware
arc sandbox
```
Navigate to http://localhost:3333/dashboard?user=nic_cage and you should see the final HTML come through. If you change the query string to another user, like `user=paul`, it will fail. The arc.http.async API works well with the shared folder to do things like re-use validateUser to protect multiple HTTP functions.

## Common use cases

- Authentication
- Tracking user interactions (kick off a `@event` to save something to the database without blocking the request)
- Adding additional info to requests

# <a id=arc.http href=#arc.http>`arc.http`</a>


- `arc.http` is a classic continuation-passing style middleware API
  - Functions similarly to Express, and supported since the earliest versions of Architect
- [`arc.http.async`](/reference/functions/http/node/async) is an `async/await` style middleware API


## Basic Usage

```javascript
let arc = require('@architect/functions')

function route(req, res) {
  let html = '<h1>hello world</h1>'
  res({html})
}

exports.handler = arc.http(route)
```

`arc.http` registers one, or more, functions with the signature `(req, res, next)=>`.

`req` has the following keys:

- `body` any `application/x-www-form-urlencoded` form variables as a plain `Object`
- `path` absolute path of the request
- `method` one of `GET`, `POST`, `PATCH`, `PUT` and `DELETE`
- `params` any URL params defined
- `query` any query params defined
- `headers` a plain `Object` of request headers
- `session` a plain `Object` representing the current session

`res` is a function that accepts named parameters:

- **Required**: One of
  - `json`
  - `html`
  - `text`
  - `css`
  - `js`
  - `xml`
  - `location`
- Optionally: `session` to assign to the current session
- Optionally: `status` or `code` of:
  - `201` Created
  - `202` Accepted
  - `204` No Content
  - `400` Bad Request
  - `403` Forbidden
  - `404` Not Found
  - `406` Not Acceptable
  - `409` Conflict
  - `415` Unsupported Media Type
  - `500` Internal Serverless Error

The default HTTP status code is `200`. A `302` is sent automatically when redirecting via `location`.

---

- HTTP `POST` routes can **only** call `res` with `location` key and value of the path to redirect to.
- `session` can also optionally be set

In the following example we define `validate` middleware:

```javascript
var arc = require('@architect/functions')
var sendEmail = require('./_send-email')

function validate(req, res, next) {
  var isValid = typeof req.body.email != 'undefined'
  if (isValid) {
    next()
  }
  else {
    res({
      session: {
        errors: ['email missing']
      },
      location: '/contact'
    })
  }
}

function handler(req, res) {
  sendEmail({
    email: req.body.email
  },
  function _email(err) {
    res({
      location: `/contact?success=${err? 'yep' : 'ruhroh'}`
    })
  })
}

exports.handler = arc.http(validate, handler)
```

Things to understand:

- `arc.http` accepts one or more functions that follow Express-style middleware signature: `(req, res, next)=>`
- `req` is a plain JavaScript `Object` with `path`, `method`, `query`, `params`, `body` keys
- `res` is a function that must be invoked with named params:
  - `location` with a URL value (a string starting w `/`)
  - `session` (optional) a plain `Object`
- `res` can also be invoked with an `Error`
  - optionally the `Error` instance property of `code`, `status` or `statusCode` can be one of `403`, `404` or `500` to change the HTTP status code
- `next` (optional) is a function to continue middleware execution

Here's an example using `session` and `location`. First we render a form:

```javascript
// src/html/get-index
var arc = require('@architect/functions')

var form = `
<form action=/count method=post>
  <button>1up</button>
</form>
`

function handler(req, res) {
  var count = req.session.count || 0
  res({
    html: `<h1>${count}</h1><section>${form}</section>`
  })
}

exports.handler = arc.http(handler)

```

The form handler increments `req.session.count` and redirects back home.

```javascript
// src/html/post-count
var arc = require('@architect/functions')

function handler(req, res) {
  var count = (req.session.count || 0) + 1
  res({
    session: {count},
    location: '/'
  })
}

exports.handler = arc.http(handler)
```

---


## How (and why) to use middleware



