let slugify = require('slugify')

module.exports = s => slugify(s, {lower: true, remove: /[:’'`,&"]/g})
