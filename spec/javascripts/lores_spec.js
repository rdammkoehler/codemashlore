describe('lore collection', function() {

  beforeEach(function() {
    this.subject = new CodemashLore.Collections.Lores();
  });

  it('exists', function() {
    expect(this.subject).toBeDefined();
  });

  it('has a model set', function() {
    expect(this.subject.model).toEqual(CodemashLore.Models.Lore);
  });

  it('url is set', function() {
    expect(this.subject.url()).toEqual('/lores');
  });

});
