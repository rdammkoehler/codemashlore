describe 'lores grid view', ->

  beforeEach ->
    setFixtures '''
      <div id='lores'></div>
    '''
    @collection = new CodemashLore.Collections.Lores [
      {id: 1, content: 'x', ranking: 1, shenanigans: true},
      {id: 2, content: 'x', ranking: 1, shenanigans: false}
    ]
    spyOn(@collection, 'on').andCallThrough()
    @subject = new CodemashLore.Views.LoreGrid
      collection: @collection
      el: '#lores'

  it 'has a template', ->
    expect(@subject.template).toBeDefined()

  it 'binds the events correctly', ->
    expect(@collection.on).toHaveBeenCalledWith 'change', @subject.render, @subject
    expect(@collection.on).toHaveBeenCalledWith 'remove', @subject.render, @subject

  it 'has the correct events', ->
    expect(@subject.events['click .up-vote']).toEqual 'upvote'
    expect(@subject.events['click .down-vote']).toEqual 'downvote'
    expect(@subject.events['click .flip-shenanigans']).toEqual 'shenanigans'
    expect(@subject.events['click .delete']).toEqual 'delete'

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

  it 'deletes correctly', ->
    lore = @collection.get(1)
    spyOn(lore, 'destroy')
    e = currentTarget: "<div data-id=1></div>"
    @subject.delete e
    expect(lore.destroy).toHaveBeenCalled()

  it 'shenanigans correctly', ->
    lore = @collection.get(1)
    spyOn(lore, 'save')
    e = currentTarget: "<div data-id=1></div>"
    @subject.shenanigans e
    expect(lore.get('shenanigans')).toEqual false
    expect(lore.save).toHaveBeenCalled()
