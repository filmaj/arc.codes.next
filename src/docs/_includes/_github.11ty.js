module.exports = function gitHubLink ({page}) {
  let file = page.inputPath.replace('./', '')
  let link = `https://github.com/architect/arc.codes/edit/master/${file}`
  return `<a href="${link}">Edit this page on GitHub</a>`
}
