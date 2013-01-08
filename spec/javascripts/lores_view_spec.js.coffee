describe 'lores view', ->

  beforeEach ->
    setFixtures '''
      <div id='lores'></div>
    '''
    @collection = new CodemashLore.Collections.Lores [
      {id: 1, content: 'x', ranking: 1},
      {id: 2, content: 'x', ranking: 1}
    ]
    @subject = new CodemashLore.Views.Lores
      collection: @collection
      el: '#lores'

  it 'has a template', ->
    expect(@subject.template).toBeDefined()

  it 'has the correct events', ->
    expect(@subject.events['click .up-vote']).toEqual 'upvote'

  it 'renders correctly', ->
    spyOn(@subject.$el, 'html')
    @subject.render()
    expect(@subject.$el.html).toHaveBeenCalled()

  it 'responds to upvote correctly', ->
    lore = @collection.get(1)
    spyOn(lore, 'save')
    e = currentTarget: "<div data-id=1></div>"
    @subject.upvote e
    expect(lore.get('ranking')).toEqual 2
    expect(lore.save).toHaveBeenCalled()

  it 'responds to downvote correctly', ->
    lore = @collection.get(2)
    spyOn(lore, 'save')
    e = currentTarget: "<div data-id=2></div>"
    @subject.downvote e
    expect(lore.get('ranking')).toEqual 0
    expect(lore.save).toHaveBeenCalled()
