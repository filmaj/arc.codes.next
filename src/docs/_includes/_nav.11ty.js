// Destroy require caches or Eleventy won't build dynamically when working locally
delete require.cache[require.resolve('./_nav-sections.11ty')]
delete require.cache[require.resolve('./_nav-next-doc.11ty')]
delete require.cache[require.resolve('./_github.11ty')]

let navSections = require('./_nav-sections.11ty')
let nextDoc = require('./_nav-next-doc.11ty')
let gitHubLink = require('./_github.11ty')

module.exports = function nav (params) {

  /**
   * Handle main navigation items
   */
  let Navigation = navSections(params)

  /**
   * Handle next doc (if applicable)
   */
  let Next = nextDoc(params)

  /**
   * GitHub link
   */
  let GitHub = gitHubLink(params)

  return {Navigation, Next, GitHub}

}
