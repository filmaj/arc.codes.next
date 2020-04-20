---
title: CDN
description: 160 (or fewer) character description of this document!
sections:
  - Overview
  - Provision
  - Best practices
  - Cache invalidation
---

## Overview

Architect projects support the ability to add a content delivery network (CDN) with AWS CloudFront. Amazon CloudFront is a mature and powerful content delivery network that speeds up distribution of your static and dynamic web content, such as .html, .css, .js, and image files, to your users. CloudFront delivers your content through a worldwide network of data centers called edge locations. When a user requests content that you're serving with CloudFront, the user is routed to the edge location that provides the lowest latency (time delay), so that content is delivered with the best possible performance.

## Provision

Given the following `.arc` file:

```bash
@app
my-site

@cdn
@static
```

Running `arc deploy` will create a CloudFront distribution for the S3 bucket website URL.

Likewise, the following `.arc`:

```bash
@app
my-site

@cdn
@static
@http
get /api
post /graphql
```

Running `arc deploy` will create a CloudFront distribution for the S3 website and the API Gateway routes defined by the `@http` primitive.

## Best practices

ADD ME!


## Cache invalidation

ADD ME!

