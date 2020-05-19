---
title: Mission
description: 160 (or fewer) character description of this document!
---

## Mission

Architect is on a **mission** to make building web apps free from infrastructure complexity and vendor cruft. Our **goal** is to focus on the core business logic required to create value, ship only the code that matters, iterate faster and still enjoy unprecedented availability guarantees. Architect is a 100% **free and open source** project [hosted on GitHub](https://github.com/architect), owned by the [OpenJS Foundation](https://openjsf.org) and [**governed transparently and collaboratively**](/en/about/governance) with its [community](/en/about/community/).

## Infrastructure as code

Architect defines a [high-level manifest file](/en/reference/architect-project-structure), in [multiple open formats](/en/reference/architect-manifest-and-config/project-manifest-and-config), and views cloud infrastructure as a build artifact.

- Focus on defining [app architecture with clear language in plain text](/en/reference/architect-project-structure)
- Generate code to [work locally and totally offline](/en/guides/tutorials/working-locally-and-offline)
- Implement your own infrastructure extensions with [macros](/en/reference/macros)
- The format, parser, and tooling are also all completely open to extension

> The Architect manifest is entirely portable between cloud vendors however no ports to clouds other than AWS have been made as of today

## Formats supported

<!-- I would remove this section; seems like a duplicate of:
- /en/guides/get-started/project-layout#manifest-format-overview
- /en/reference/architect-project-structure
- /en/reference/architect-manifest-and-config/project-manifest-and-config
Plus, detailed talk of formats doesn't belong in the mission/vision statement
-->

Architect supports a native text file format `.arc` in addition to popular formats: `arc.json`, `arc.yaml` and `arc.toml` when teams prefer those dialects. 

The `.arc` format follows a few simple rules:

- Whitespace is significant 
- Comments start with `#`
- Pragmas start with `@` and organize cloud resources and their configuration

`.arc` files define the following pragmas:

- `@app` defines the application namespace
- `@aws` defines AWS specific configuration
- `@events` defines SNS event handlers
- `@http` defines HTTP handlers for API Gateway
- `@indexes` defines global secondary indexes on DynamoDB tables
- `@macros` define macros to extend the generated CloudFormation
- `@queues` defines SQS event handlers
- `@scheduled` defines EventBridge functions that run on a schedule
- `@static` defines S3 buckets for static assets
- `@tables` defines DynamoDB database tables and trigger functions for them
- `@ws` defines API Gateway WebSocket handlers

An `.arc` file example:

```bash
# this is going to be great!
@app
hello

@static
fingerprint true

@ws
action

@http
get /
post /likes
get /likes

@events
hit-counter

@scheduled
daily-affirmation rate(1 day)

@tables
likes
  likeID *String
  stream true

@indexes
likes
  date *String
```

Running `arc init` in the same directory as the `.arc` file above generates the following function code:

```
/
|-src
| |-http
| | |-get-index/
| | |-get-likes/
| | '-post-likes/
| |-events
| | '-hit-counter/
| |-scheduled
| | '-daily-affirmation/
| |-tables
| | '-likes/
| '-ws
|   |-action/
|   |-connect/
|   |-default/
|   '-disconnect/
'-.arc
```

The `.arc` format is terse, easy to read, and quickly learnable to author. The expressions in a `.arc` file unlock the formerly complex tasks of cloud infrastructure provisioning, deployment, and orchestration.
