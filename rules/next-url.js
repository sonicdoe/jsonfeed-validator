'use strict'

module.exports = context => {
  const feed = context.feed

  if (!feed.next_url || !feed.feed_url) return

  if (feed.next_url === feed.feed_url) {
    context.report({
      message: '`next_url` must not be the same as `feed_url`.'
    })
  }
}
