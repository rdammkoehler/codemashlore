describe 'lores grid view', ->

  beforeEach ->
    setFixtures '''
      <div id='lores'>
        <input id="lore_content" value='content'>
        <input id="lore_ranking" value='ranking'>
        <input id="lore_title" value='title'>
        <input id="lore_shenanigans" checked='checked' type='checkbox'>
      </div>
    '''
    @subject = new CodemashLore.Views.AddLore
      el: '#lores'

  it 'has a template', ->
    expect(@subject.template).toBeDefined()

  it 'has the correct events', ->
    expect(@subject.events['click #add-lore']).toEqual 'addLore'

  it 'renders correctly', ->
    spyOn(@subject.$el, 'html')
    @subject.render()
    expect(@subject.$el.html).toHaveBeenCalled()
