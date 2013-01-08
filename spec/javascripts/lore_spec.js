describe('lore', function() {

  beforeEach(function() {
    this.subject = new CodemashLore.Models.Lore({
      id: 1
    });
  });

  it('exists', function() {
    expect(this.subject).toBeDefined();
  });

  it('has the correct url', function() {
    expect(this.subject.url()).toEqual('/lores/1');
  });

  it('has the correct url for a new record', function() {
    this.subject = new CodemashLore.Models.Lore();
    expect(this.subject.url()).toEqual('/lores');
  });
});
