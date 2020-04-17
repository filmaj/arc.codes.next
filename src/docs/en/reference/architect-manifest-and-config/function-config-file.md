---
title: Function config file
description: 160 (or fewer) character description of this document!
sections:
  - Overview
  - Concurrency
  - Layers
  - Memory
  - Policies
  - Runtime
  - Timeout
---

## Overview

The `.arc-config` file is where you configure individual Lambda function properties.

-`runtime` - Officially supported: one of `nodejs12.x` (default), n`odejs10.x`, `deno`, `python3.7`, `python3.6`, or `ruby2.5`
  - Also configurable, but not officially supported by Architect: `java8`, `go1.x`, `dotnetcore2.1`
- `memory` - number, between 128 MB and 3008 MB in 64 MB increments
  - Memory size also directly correlates with CPU speed; higher memory levels are available in more capable Lambda clusters
- `timeout` - number, in seconds (max 900)
- `concurrency` - number, 0 to AWS account maximum (if not present, concurrency is unthrottled)
- `layers` - Lambda layer ARNs (must be in the same region as deployed)
- `policies` - Additional Lambda role policy ARNs

## Concurrency

Concurrency is the number of requests that your function is serving at any given time. When your function is invoked, Lambda allocates an instance of it to process the event. When the function code finishes running, it can handle another request. If the function is invoked again while a request is still being processed, another instance is allocated, which increases the function's concurrency.

## Layers

You can configure your Lambda function to pull in additional code and content in the form of layers. A layer is a ZIP archive that contains libraries, a custom runtime, or other dependencies. With layers, you can use libraries in your function without needing to include them in your deployment package.

Layers let you keep your deployment package small, which makes development easier. You can avoid errors that can occur when you install and package dependencies with your function code.

layers - Lambda layer ARNs (must be in the same region as deployed)

## Memory

ADD ME!


## Policies

policies - Additional Lambda role policy ARNs

## Runtime

runtime - Officially supported: one of nodejs12.x (default), nodejs10.x, deno, python3.7, python3.6, or ruby2.5

## Timeout

timeout - number, in seconds (max 900)
