// Must destroy require cache or else Eleventy won't work dynamically
delete require.cache[require.resolve('./_metadata.11ty')]
delete require.cache[require.resolve('./_nav.11ty')]
let metadata = require('./_metadata.11ty')
let nav = require('./_nav.11ty')
// let logo = require('../../assets/architect-logo-white.svg')

module.exports = function layout (params) {
  params.lang = 'en'
  let {Title, Description, pageTitle} = metadata(params)
  let {Navigation, Next='', GitHub=''} = nav(params)
  return `
<html>
<head>
    <title>${ Title }</title>
    <meta name="description" content="${ Description }">
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700">
    <link rel="stylesheet" type="text/css" href="/_static/css/prism.css">
    <link rel="stylesheet" type="text/css" href="/_static/css/index.css">
</head>
<body>
<section class=wrapper>
  <nav> 
    <a href="/"><img src="../../assets/architect-logo-500b@2x.png" alt="logo" style="height:30px;"></a>
    <br>${ Navigation }</br>
  </nav>
  <main>
    <h1>${ pageTitle }</h1>
    ${ params.layoutContent }<br>
    ${ GitHub }<br>
    ${ Next }<br><br>
  </main>
</section>
</body>
</html>`
}
