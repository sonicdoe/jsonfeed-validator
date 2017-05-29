# jsonfeed-validator

[![Node.js package](https://img.shields.io/npm/v/jsonfeed-validator.svg)](https://www.npmjs.com/package/jsonfeed-validator)
[![Build status](https://img.shields.io/travis/sonicdoe/jsonfeed-validator.svg)](https://travis-ci.org/sonicdoe/jsonfeed-validator)

> [JSON Feed](https://jsonfeed.org) validator

## Installation

```
$ npm install jsonfeed-validator --save
```

## Usage

```js
const validate = require('jsonfeed-validator')

const feed = {
  version: 'https://jsonfeed.org/version/1',
  title: 'My Example Feed',
  home_page_url: 'https://example.org/',
  feed_url: 'https://example.org/feed.json',
  items: [
    {
      content_html: '<p>Hello, world!</p>',
      url: 'https://example.org/initial-post'
    }
  ]
}

const results = validate(feed)
/*
  [
    {
      ruleId: 'schema',
      message: 'should have required property \'id\' at path \'.items[0]\''
    }
  ]
*/
```

### API

#### validate(feed)

##### feed

Type: `object`

JSON Feed to be validated.
