'use strict'

const Ajv = require('ajv')
const ajv = new Ajv()
const schema = require('jsonfeed-schema')

module.exports = feed => {
  const valid = ajv.validate(schema, feed)

  if (!valid) {
    const results = ajv.errors.map(error => {
      return `${error.message} at path '${error.dataPath}'`
    })

    return results
  }

  return true
}
