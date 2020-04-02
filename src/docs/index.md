## Less, but better

> The simplest, most powerful way to build serverless web apps with JS, Python, and Ruby

Architect provides everything you need to build fast, modern, massively scalable cloud apps with low code, clear and terse config, and zero ceremony.

1. Install Architect

```bash
npm install -g @architect/architect
```

2. Run `arc init` to generate a basic project:

```
/
├── src
│   └── http
│       └── get-index/index.js
└── .arc
```

3. Check out your first `.arc` file & HTTP function!

```bash
# /project/path/.arc
@app
your-app-name

@http
get /
```

```javascript
// src/http/get-index/index.js
exports.handler = async function http(request) {
  return {
    headers: { 'Content-Type': 'text/html; charset=utf-8;' },
    body: '<h1>Hello World! 🎉</h1>'
  }
}
```

Preview your work locally with `arc sandbox` and ship to the cloud with `arc deploy`.

Learn more and get involved:

- Join the [Architect community on Slack](https://join.slack.com/t/architecture-as-text/shared_invite/MjE2MzU4Nzg0NTY1LTE1MDA2NzgyMzYtODE2NzRkOGRmYw)
- Star [`@architect/architect`](https://github.com/architect/architect) on GitHub
- Follow the quickstart
