---
title: Code sharing across functions
description: Tutorial for sharing code between your cloud functions.
sections:
  - Overview
  - Principles & best practices
  - src/shared
  - src/views
---

## Overview

Architect provides an easy way to abstract and reuse code in your functions. Most applications need to share logic, templates, or utilities. In order to do this, Architect uses a folder convention to copy the contents of `src/shared` and `src/views` into each functions `node_modules` directory. 

These two special folders have different behaviors and we will go over their use in the following tutorials. 

All the contents of `src/shared` gets copied to every function's `node_modules/@architect/shared` directory. 

All the contents of `src/views` gets copied into each of your project's `@HTTP GET` function's `node_modules/@archtect/views` directory. 


## Principles & best practices

It is important to note that the entire contents of `src/shared` are copied recursively, we strongly suggest keeping the directory structure as flat as possible, and the payloads as small as possible to improve performance. We recommend that you keep the entire payload under 5MB to avoid cold start penalties. To learn more about cold starts [check this out](https://learn.begin.com/jargon#cold-start).

You can organize the code in `src/shared` in a way that makes sense for your project. Common structures include: 
- `src/shared/middleware` 
- `src/shared/helpers`
- `src/shared/lib`


## `src/shared` example 



 

## src/views

The `src/views` folder is a special location that allows you to include code for each of your HTTP functions with a GET route. In this example we will include a layout template that your HTTP functions can use.

1. To get started with sharing code, let's create a new project from the command line. The following command will generate a project structure and template code.
```bash
npm init @architect ./arc-shared-views
```
2. Modify the `.arc` file with the following:

```md
@app
arc-shared-views

@http
get / 
get /about
get /css/:stylesheet

@views
get / 
get /about
```
3. Create a new folder and file, `src/views/layout.js`. In this file we'll write the following contents: 

```javascript
module.exports = function Layout (props) {
  props = props || {}
  let heading = props.heading || 'Architect views!'
  return `
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <title>Architect example</title>
 <link rel="stylesheet" href="/css/styles.css">
</head>
<body>
 <h1>${heading}</h1>
</body>
</html>
`
}
```
This is our shared view template that will be used by each GET route. 

4. Next we'll modify `src/http/get-index/index.js` with the following: 

```javascript
let Layout = require('@architect/views/layout')

exports.handler = async function http (request) {
  try {
    return {
      headers: {
        'content-type':'text/html; charset=utf8'
      }, 
      body: Layout()
    }
  } catch (e) {
    console.error(e)
    return {
      headers: {
        type: 'application/json; charset=utf8',
      },
      status: 500,
      body: JSON.stringify({
        name: e.name,
        message: e.message,
        stack: e.stack
      }, null, 2)
    }
  }
}
```
This function will call the layout file and return it's output as the body of the response. 

5. Next we can set up the about page to send a different set of props to the layout. Modify `src/http/get-about/index.js` with the following: 
``` javascript
let Layout = require('@architect/views/layout')

exports.handler = async function http (request) {
  try {
    return {
      headers: {
        'content-type':'text/html; charset=utf8'
      }, 
      body: Layout({heading: 'About'})
    }
  } catch (e) {
    console.error(e)
    return {
      status: 500,
      type: 'application/json; charset=utf8',
      body: JSON.stringify({
        name: e.name,
        message: e.message,
        stack: e.stack
      }, null, 2)
    }
  }
}
```
When `/about` is requested, this function will execute and be able to return the data being passed into `Layout()`. 

6. Finally we have some finer control over which GET functions will have `/src/views` copied into it. We do this with the `@views` pragma in the `.arc` file. 
We want to create a url to our style sheet, but this function doesn't need access to the layout code. Only the GET routes under `@views` will have the `src/views` code copied into it. 

Now we can modify the code in `/src/http/get-css-000stylesheet/index.js` with the following: 
```javascript
const styles = `
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
`
exports.handler = async function http (request) {
  return {
    type: 'text/css; charset=utf8',
    body: styles
  }
}
```
7. OK! Go ahead and run `npm start` from the project root and navigate to http://localhost:3333 to see our app in action! Change the route to http://localhost:3333/about and you'll see that our props were passed as expected. 

