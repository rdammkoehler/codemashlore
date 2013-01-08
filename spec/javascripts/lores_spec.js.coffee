describe 'lore collection', ->

  beforeEach ->
    @subject = new CodemashLore.Collections.Lores()

  it 'exists', ->
    expect(@subject).toBeDefined()

  it 'has a model set', ->
    expect(@subject.model).toEqual CodemashLore.Models.Lore

  it 'url is set', ->
    expect(@subject.url()).toEqual '/lores'

