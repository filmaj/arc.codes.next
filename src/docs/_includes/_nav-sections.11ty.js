// Destroy require caches or Eleventy won't build dynamically when working locally
delete require.cache[require.resolve('../ToC')]

let ToC = require('../ToC')
let slug = require('./_slug.11ty')

/**
 * Generate the navigation, including the active doc and its sections
 */
module.exports = function navSections(params) {
  let {collections, lang, page} = params
  let navigation = ''

  // Run through categories
  Object.keys(ToC).forEach(cat => {
    navigation += `<strong>${cat.charAt(0).toUpperCase() + cat.substr(1)}</strong><br>`

    // Run through each category's docs
    ToC[cat].forEach(i => {

      // Individual top-level docs
      if (typeof i === 'string') {
        let link = `/${lang}/${cat}/${i}`
        navigation += `\n${navLink(i, link)}<br>\n`
      }

      // Groups of docs
      else if (typeof i === 'object') {
        let groupName = Object.keys(i)[0]
        // let groupLink = `/${lang}/${cat}/${groupName}`
        // TODO restore once group pages are set up
        // navigation += `\n${navLink(groupName, groupLink, ['group'])}\n`
        navigation += `\n${groupName}\n`

        let items = i[groupName].map(j => {
          let link = `/${lang}/${cat}/${groupName}/${j.replace(/[/]/g, '')}`

          let active = page.url === slug(`${link}/`)
          let sections = ''

          let doc = collections.all.find(i => i.url === page.url)
          let hasSections = doc &&
                            doc.template &&
                            doc.template.frontMatter &&
                            doc.template.frontMatter.data &&
                            doc.template.frontMatter.data.sections

          if (active && hasSections) {
            sections = doc.template.frontMatter.data.sections.map(section => `<li><a href="#${slug(section)}">${section}</a></li>`)
            sections = `\n  <ul>\n    ${sections.join('\n    ')}\n</ul>\n`
          }

          return `  <li>${navLink(j, link)}${sections}</li>`}
        ).join('\n')
        navigation += `<ul>\n${items}\n</ul>`
      }

      // idk / jic
      else throw Error(`Invalid nav type: ${i}`)

    })
  })

  return navigation
}

function navLink(name, href, classes) {
  classes = classes ? ` classes="${classes.join(', ')}"` : ''
  return `<a href="${slug(href)}"${classes}>${name}</a>`
}
