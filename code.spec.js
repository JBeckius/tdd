describe("karma run test: ", function() {
  it('should read true as true', function() {
    expect(true).toBe(true);
  })
})
describe('isTrue function test:', function() {
  it('should return true', function() {
    expect(isTrue()).toBe(true);
  })
})

describe('isFalse function test', function() {
  it('should return false', function() {
    expect(isFalse()).toBe(false);
  })
})
