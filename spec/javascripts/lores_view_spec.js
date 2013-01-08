describe('lores view', function() {

  beforeEach(function() {
    setFixtures('<div id=\'lores\'></div>');
    this.collection = new CodemashLore.Collections.Lores([
      {
        id: 1,
        content: 'x',
        ranking: 1
      }, {
        id: 2,
        content: 'x',
        ranking: 1
      }
    ]);
    this.subject = new CodemashLore.Views.Lores({
      collection: this.collection,
      el: '#lores'
    });
  });

  it('has a template', function() {
    expect(this.subject.template).toBeDefined();
  });

  it('has the correct events', function() {
    expect(this.subject.events['click .up-vote']).toEqual('upvote');
  });

  it('renders correctly', function() {
    spyOn(this.subject.$el, 'html');
    this.subject.render();
    return expect(this.subject.$el.html).toHaveBeenCalled();
  });

  it('responds to upvote correctly', function() {
    var e, lore;
    lore = this.collection.get(1);
    spyOn(lore, 'save');
    e = {
      currentTarget: "<div data-id=1></div>"
    };
    this.subject.upvote(e);
    expect(lore.get('ranking')).toEqual(2);
    expect(lore.save).toHaveBeenCalled();
  });

  it('responds to downvote correctly', function() {
    var e, lore;
    lore = this.collection.get(2);
    spyOn(lore, 'save');
    e = {
      currentTarget: "<div data-id=2></div>"
    };
    this.subject.downvote(e);
    expect(lore.get('ranking')).toEqual(0);
    expect(lore.save).toHaveBeenCalled();
  });

});
