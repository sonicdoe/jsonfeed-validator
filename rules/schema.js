'use strict'

const Ajv = require('ajv')
const ajv = new Ajv()
const schema = require('jsonfeed-schema')

module.exports = context => {
  const feed = context.feed
  const valid = ajv.validate(schema, feed)

  if (!valid) {
    for (const error of ajv.errors) {
      context.report({
        message: `${error.message} at path '${error.dataPath}'`
      })
    }
  }
}
