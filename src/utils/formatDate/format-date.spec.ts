import { formatDate } from '.'

describe('storageKey()', () => {
  it('should return storage key', () => {
    expect(formatDate(new Date('2021-03-10'))).toBe('09/03/2021')
  })
})
