# Architect documentation style guide

Thank you for helping contribute to Architect's documentation!

Our primary goal of these docs is to create a welcoming, easily accessible space for folks to learn about Architect in a way that respects their time.

Architect happens to sit at the complex and challenging intersection of frameworks, cloud hosting, and application architecture – so it's our job to ensure we don't just have complete documentation, but that we've also provided a sufficient foundation of key concepts and reasoning along the way.

Remember: we can't simply assume Architect is somehow inherently valuable. It's our responsibility to do the hard work to necessary to bolster and empower our audience with the knowledge they need to be successful with Architect – and in general.


## Composing docs

- Help readers maximize their time:
  - Consider how to be as skimmable as possible
  - Break things up: add as many sections as is necessary, and highlight key sections in the doc's frontmatter
  - Use bullet points wherever possible
  - Try to avoid long, rambling paragraphs
  - Cut out everything possible
  - If something can be said in one word, never say it in two
- Insofar as it is possible, avoid jargon – do not assume everyone knows all the same obscure terms that you do


## Guides & reference

- Guides are learning and goal-oriented
  - Broadly, they serve to aid in learning a related topic, and/or accomplishing a specific related goal
  - Guides should aim to be highly usable and consistently reproducible
  - Extreme depth is not a requirement and may actually be an impediment; use your best judgment in presenting only the information necessary
  - Wherever possible and appropriate, always accompany guide content with a repo
  - Always begin workflow instructions (e.g. CLI commands) by mentioning which folder you’re working in, unless it’s clearly part of a multi-step flow
- Reference docs are information oriented
  - They serve to describe in depth and detail the mechanics of a topic
  - Reference docs should aim to be accurate and complete


## Grammar & formatting

- Do not use H1 (`#`) titles
  - These are reserved only for the page title
- Use H2 (`##`) titles to break up doc sections
  - Use H3 (`###`) titles for subsections within an H2
- Sparing use of emoji
  - Emoji convey shorthand meaning which is non-indexable and may not be culturally transferrable
  - If possible, don’t use them; definitely don’t use them in section titles, headlines, etc.
- Use sentence casing for all titles and sections
  - DO: `Set up npm scripts`
  - DON’T: `Set Up npm Scripts`
- Ellipsis are only valid (outside code samples) to imply omitted items or quotes.
  - DO: Use them to shorten / focus a quote from someone else
  - DON’T: Use them to create a dramatic pause.
- `simple` + `easy` + `trivial`
  - Avoid (or use sparingly) language like this; what’s "easy" and "simple" for the writer may not be easy or simple for the reader.
- Use of inline code blocks (enclosed in backticks <code>\`hi\`</code>):
  - DO:
    - Use for named technical items related to the application (e.g. `staging` referring to staging environments)
    - Use for references to specific interface elements (e.g. "Click the `Submit` button")
  - DON’T:
    - Use for


## Spacing

- Line breaks:
  - Two line breaks between titles and whatever comes after them
  - Three line breaks between the end of a section and the beginning of the next section
- HRs:
  - You may use rules to segment a section (or subsection) into multiple parts if necessary
  - Only use rules between sections to denote broader changes in topic or flow


## Code

- Always begin code blocks with a commented file path
- Never begin shell commands with `$`
  - Users may copy / paste in the `$` and the command will break
- Begin code blocks with language for syntax highlighers:
  - Example:
```md
```js
let foo = 'bar'
...
```


## Common terms / phrases

- ES modules
  - ~~ESM, ESmodules, Modules, etc.~~
- GitHub
  - ~~Github, github, gitHub, etc.~~
- frontend
  - ~~front-end front end~~
- JavaScript, JS
  - ~~Javascript, js~~
- Node.js
  - ~~Node, node, nodeJS, NodeJS, etc.~~
- npm
  - ~~NPM, Node Package Manager, etc.~~
- Set up vs. setup
  - `Set up`: used as a verb (e.g. `Set up this config file`)
  - `Setup`: used as a noun (e.g. `Now that we have a working setup...`)
- Single-page application (hyphenated, can be SPA on second reference)
  - ~~single page application~~
- TypeScript
  - ~~TS, TSX~~
