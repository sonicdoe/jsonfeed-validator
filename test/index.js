import test from 'ava'
import validate from '..'

test('feed is not an object', t => {
  t.throws(() => validate('{}'), TypeError)
})
