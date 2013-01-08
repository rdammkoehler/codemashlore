describe('lore', function() {
  beforeEach(function() {
    return this.subject = new CodemashLore.Models.Lore({
      id: 1
    });
  });
  it('exists', function() {
    return expect(this.subject).toBeDefined();
  });
  return it('has the correct url', function() {
    return expect(this.subject.url()).toEqual('lores/1');
  });
});
