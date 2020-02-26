module.exports = function getMetadata({collections, lang, page}) {
  /**
   * Backfill any missing metadata just in case
   */
  collections.all.forEach(i => {
    // Title
    try {
      typeof i.template.frontMatter.data.title
      if (!i.template.frontMatter.data.title) throw Error('Backfill title')
    }
    catch (err) {
      i.template.frontMatter.data = i.template.frontMatter.data || {}
      i.template.frontMatter.data.title = 'Architect docs'
    }
    // Description
    try {
      typeof i.template.frontMatter.data.description
      if (!i.template.frontMatter.data.description) throw Error('Backfill description')
    }
    catch (err) {
      i.template.frontMatter.data = i.template.frontMatter.data || {}
      i.template.frontMatter.data.description = 'Architect documentation'
    }
  })

  let isHome = page.url === '/' ||
               page.url === `/${lang}/`

  let doc = collections.all.find(i => i.url === page.url)
  let Title = isHome
    ? doc.template.frontMatter.data.title
    : `${doc.template.frontMatter.data.title} - OpenJS Architect`
  let Description = doc.template.frontMatter.data.description
  let pageTitle = doc.template.frontMatter.data.title

  return {Title, Description, pageTitle}
}
