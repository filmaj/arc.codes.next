// Destroy require caches or Eleventy won't build dynamically when working locally
delete require.cache[require.resolve('../ToC')]

let ToC = require('../ToC')
let slug = require('./_slug.11ty')

module.exports = function nextDoc({page, lang}) {
  // Ignore home
  let isHome = page.url === '/' ||
               page.url === `/${lang}/`
  if (isHome) return ''

  // Get the category
  let parts = page.url.split('/').filter(p => p)
  let cat = parts[1]

  function nextLink({group='', title}) {
    if (group) group = `${group}/`
    return `Next: <a href="${slug(`/${lang}/${cat}/${group}${title.replace(/[/]/g, '')}/`)}">${title}</a>`
  }

  /**
   * ToC FYI:
   * - All docs live within a category
   * - Two types of docs: root and grouped
   * - Root and grouped docs can live next to each other in order
   */
  let result
  ToC[cat].forEach((d, i) => {
    // Gets the current group name (or not)
    let group = typeof d === 'object'
      ? Object.keys(ToC[cat][i])[0]
      : undefined

    // Index of the current doc (if it's in a group)
    let currentGroupDoc
    if (group) {
      currentGroupDoc = ToC[cat][i][group].findIndex(i => page.url === slug(`/${lang}/${cat}/${group}/${i}/`))
    }

    // Keep walking the tree searching for the doc we're rendering
    let isCurrent = group
      ? ToC[cat][i][group].some(i => page.url === slug(`/${lang}/${cat}/${group}/${i.replace(/[/]/g, '')}/`))
      : page.url === slug(`/${lang}/${cat}/${ToC[cat][i].replace(/[/]/g, '')}/`)

    if (isCurrent) {
      // Get ready to maybe move into the next category
      let currentCat = Object.keys(ToC).findIndex(i => i === cat)
      let nextCat = Object.keys(ToC)[currentCat + 1]

      let nextItem = group
        // If we're in the last doc of the group, progress to the next item in the category
        ? ToC[cat][i][group][currentGroupDoc + 1] ||
          ToC[cat][i + 1]
        // Try to enter into next item (which may be a group), or just go to the next item
        : ToC[cat][i] &&
          ToC[cat][i][group] &&
          ToC[cat][i][group][currentGroupDoc + 1] ||
          ToC[cat][i + 1]

      // Ok, try moving into the next category
      if (!nextItem) {
        nextItem = ToC[nextCat] && ToC[nextCat][0]
        cat = nextCat
      }

      if (typeof nextItem === 'string') {
        let title = nextItem
        let link = {title}
        // Only add group if we're in a group and not traversing into a new category, or the link will break
        if (group && cat !== nextCat) {
          link.group = group
        }
        result = nextLink(link)
      }
      else if (typeof nextItem === 'object') {
        let group = Object.keys(nextItem)[0]
        let title = nextItem[group][0]
        result = nextLink({group, title})
      }
    }
  })
  return result
}
