describe('lores grid view', function() {
  beforeEach(function() {

    setFixtures('<div id=\'lores\'>\n  <input id="lore_content" value=\'content\'>\n  <input id="lore_ranking" value=\'ranking\'>\n  <input id="lore_title" value=\'title\'>\n  <input id="lore_shenanigans" checked=\'checked\' type=\'checkbox\'>\n</div>');

    this.subject = new CodemashLore.Views.AddLore({
      el: '#lores'
    });
  });

  it('has a template', function() {
    expect(this.subject.template).toBeDefined();
  });

  it('has the correct events', function() {
    expect(this.subject.events['click #add-lore']).toEqual('addLore');
  });

  it('renders correctly', function() {
    spyOn(this.subject.$el, 'html');
    this.subject.render();
    expect(this.subject.$el.html).toHaveBeenCalled();
  });
});
