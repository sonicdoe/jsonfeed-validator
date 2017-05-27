'use strict'

class Context {
  constructor (feed) {
    this.feed = feed
    this.reports = []
  }

  report (descriptor) {
    this.reports.push(descriptor)
  }
}

module.exports = Context
