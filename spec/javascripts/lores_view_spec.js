describe('lores view', function() {
  beforeEach(function() {
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
    this.subject = new CodemashLore.Views.Lores({
      collection: this.collection
    });
  });

  it('binds the events correctly', function() {
    spyOn(this.subject.legitCollection, 'on').andCallThrough();
    spyOn(this.subject.shenanigansCollection, 'on').andCallThrough();
    this.subject.bindCollections();
    expect(this.subject.legitCollection.on).toHaveBeenCalledWith('change', this.subject.render, this.subject);
    expect(this.subject.shenanigansCollection.on).toHaveBeenCalledWith('change', this.subject.render, this.subject);
  });

  it('renders correctly', function() {
    spyOn(this.subject, 'renderLegit');
    spyOn(this.subject, 'renderShenanigans');
    this.subject.render();
    expect(this.subject.renderLegit).toHaveBeenCalled();
    expect(this.subject.renderShenanigans).toHaveBeenCalled();
  });

  it('renders legit grid', function() {
    spyOn(this.subject.legitView, 'render');
    this.subject.renderLegit();
    expect(this.subject.legitView.render).toHaveBeenCalled();
    expect(this.subject.legitCollection.length).toEqual(1);
    expect(this.subject.legitCollection.first().get('shenanigans')).toEqual(false);
  });

  it('renders shenanigans grid', function() {
    spyOn(this.subject.shenanigansView, 'render');
    this.subject.renderShenanigans();
    expect(this.subject.shenanigansView.render).toHaveBeenCalled();
    expect(this.subject.shenanigansCollection.length).toEqual(1);
    expect(this.subject.shenanigansCollection.first().get('shenanigans')).toEqual(true);
  });
});
