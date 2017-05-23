import test from 'ava'
import fixture from './fixtures/index.json'
import validate from '..'

test('schema validation', t => {
  const results = validate(fixture)

  t.deepEqual(results, [
    'should have required property \'id\' at path \'.items[0]\''
  ])
})
