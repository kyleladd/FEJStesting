describe('getDivAttribute', function() {
    var d = document.querySelector('.box');

    it('Should be bar', function() {
        expect(d.getAttribute('foo')).toBe('bar');
    });
});
describe('always true', function() {
  it('Should be bar', function() {
      expect(true).toBe(true);
      expect(false).toBe(false);
  });
  it('Should be bar', function() {
      expect(true).toBe(true);
      expect(false).toBe(false);
  });
});
