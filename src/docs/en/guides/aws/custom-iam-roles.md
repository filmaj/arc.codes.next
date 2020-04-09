---
title: Custom IAM roles
description: Defining custom execution roles for individual Lambda functions
sections:
  - Overview
---

## Overview

IAM Users, IAM Roles, IAM policies

You can define a custom IAM role for your Lambda Function with an `.arc-config` file. 
By default, your functions are executed with a least privileged role, which means that it only has access to the services it needs and nothing else. 

Using a custom IAM role allows you to limit interactions even further, like restricting a Lambda to read only permissions on DynamoDB or calling resources outside of the project.

Here's how you would add a custom role to your Lambda

```
// src/http/get-orders/.arc-config

@aws
runtime
memory
policies {ARN}

```
## AWS IAM Reference 

AWS IAM 

