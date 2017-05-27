import test from 'ava'
import fixture from '../fixtures/schema/index.json'
import validate from '../..'

test('schema validation', t => {
  const results = validate(fixture)

  t.deepEqual(results, [{
    ruleId: 'schema',
    message: 'should have required property \'id\' at path \'.items[0]\''
  }])
})
