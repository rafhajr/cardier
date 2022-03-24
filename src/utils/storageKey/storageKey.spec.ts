import { storageKey } from './storageKey'

describe('storageKey()', () => {
  it('should return storage key', () => {
    expect(storageKey('token')).toBe('@maral.token')
  })
})
