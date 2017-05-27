import test from 'ava'
import fixture from '../fixtures/next-url/index.json'
import validate from '../..'

test('next_url same as feed_url', t => {
  const results = validate(fixture)

  t.deepEqual(results, [{
    ruleId: 'next-url',
    message: '`next_url` must not be the same as `feed_url`.'
  }])
})
