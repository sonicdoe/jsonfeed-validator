import test from 'ava'
import fixture from '../fixtures/id-unique/index.json'
import validate from '../..'

test('non-unique item IDs', t => {
  const results = validate(fixture)

  t.deepEqual(results, [{
    ruleId: 'id-unique',
    message: 'Item IDs must be unique.'
  }])
})
