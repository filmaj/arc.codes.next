// Must destroy require cache or else Eleventy won't work dynamically
delete require.cache[require.resolve('./_metadata.11ty')]
delete require.cache[require.resolve('./_nav.11ty')]
let metadata = require('./_metadata.11ty')
let nav = require('./_nav.11ty')

module.exports = function layout (params) {
  params.lang = 'en'
  let {Title, Description, pageTitle} = metadata(params)
  let {Navigation, Next='', GitHub=''} = nav(params)
  let page = /*html*/`
<html>
  <head>
    <title>${Title}</title>
    <meta name="description" content="${Description}">
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700">
    <link rel="stylesheet" type="text/css" href="/_static/css/app.css">
  </head>
  <body>
    <section>

      <section>
        <h1>${pageTitle}</h1>
        ${params.layoutContent}<br>
        ${GitHub}<br>
        ${Next}<br><br>
        <hr>
      </section>

      <section>
        ${Navigation}
      </section>

    </section>
  </body>
</html>
`
  return page
}
