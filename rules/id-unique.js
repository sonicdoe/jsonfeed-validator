'use strict'

const _map = require('lodash.map')
const _uniq = require('lodash.uniq')

module.exports = context => {
  const feed = context.feed
  const ids = _map(feed.items, 'id')

  if (ids.length !== _uniq(ids).length) {
    context.report({
      message: 'Item IDs must be unique.'
    })
  }
}
