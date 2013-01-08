describe('lores grid view', function() {
  beforeEach(function() {
    setFixtures('<div id=\'lores\'></div>');
    this.collection = new CodemashLore.Collections.Lores([
      {
        id: 1,
        content: 'x',
        ranking: 1,
        shenanigans: true
      }, {
        id: 2,
        content: 'x',
        ranking: 1,
        shenanigans: false
      }
    ]);
    spyOn(this.collection, 'on').andCallThrough();
    this.subject = new CodemashLore.Views.LoreGrid({
      collection: this.collection,
      el: '#lores'
    });
  });

  it('has a template', function() {
    expect(this.subject.template).toBeDefined();
  });

  it('binds the events correctly', function() {
    expect(this.collection.on).toHaveBeenCalledWith('change', this.subject.render, this.subject);
    expect(this.collection.on).toHaveBeenCalledWith('remove', this.subject.render, this.subject);
  });

  it('has the correct events', function() {
    expect(this.subject.events['click .up-vote']).toEqual('upvote');
    expect(this.subject.events['click .down-vote']).toEqual('downvote');
    expect(this.subject.events['click .flip-shenanigans']).toEqual('shenanigans');
    expect(this.subject.events['click .delete']).toEqual('deleteLore');
  });

  it('renders correctly', function() {
    spyOn(this.subject.$el, 'html');
    this.subject.render();
    expect(this.subject.$el.html).toHaveBeenCalled();
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

  it('deletes correctly', function() {
    var e, lore;
    lore = this.collection.get(1);
    spyOn(lore, 'destroy');
    e = {
      currentTarget: "<div data-id=1></div>"
    };
    this.subject.deleteLore(e);
    expect(lore.destroy).toHaveBeenCalled();
  });

  it('shenanigans correctly', function() {
    var e, lore;
    lore = this.collection.get(1);
    spyOn(lore, 'save');
    e = {
      currentTarget: "<div data-id=1></div>"
    };
    this.subject.shenanigans(e);
    expect(lore.get('shenanigans')).toEqual(false);
    expect(lore.save).toHaveBeenCalled();
  });
});
