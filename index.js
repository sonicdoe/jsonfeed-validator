'use strict'

const path = require('path')
const fs = require('fs')
const Context = require('./lib/context')

const rulesPath = path.join(__dirname, 'rules')
const ruleIds = fs.readdirSync(rulesPath).map(file => path.basename(file, '.js'))

module.exports = feed => {
  if (typeof feed !== 'object') {
    throw new TypeError('feed must be an object')
  }

  const results = []

  for (const ruleId of ruleIds) {
    const rule = require(path.join(rulesPath, ruleId))
    const context = new Context(feed)

    rule(context)

    for (const report of context.reports) {
      results.push(Object.assign(report, { ruleId }))
    }
  }

  return results
}
