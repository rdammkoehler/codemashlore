describe('lore collection', function() {
  beforeEach(function() {
    return this.subject = new CodemashLore.Collections.Lores();
  });
  it('exists', function() {
    return expect(this.subject).toBeDefined();
  });
  it('has a model set', function() {
    return expect(this.subject.model).toEqual(CodemashLore.Models.Lore);
  });
  return it('url is set', function() {
    return expect(this.subject.url()).toEqual('/lores');
  });
});