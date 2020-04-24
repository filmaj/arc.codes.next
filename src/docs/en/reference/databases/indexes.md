---
title: Indexes
description: Indexes give you access to alternate query patterns, and can speed up queries.
sections:
  - Overview
  - Getting started
  - Examples
---

## Overview

Indexes give you access to alternate query patterns, and can speed up queries. Architect provides fast access to items in a table by specifying primary key values. Indexing comes into the picture if you want to fetch the data of attributes other than the primary key.

It's another way to slice up your data. So lets use a concrete example:

```bash
@tables
accounts
  email *String
@indexes
accounts
  username *String
```

In this example you can query for an account by their username or email!

---

## Getting started

ADD ME!


## Examples

ADD ME!

