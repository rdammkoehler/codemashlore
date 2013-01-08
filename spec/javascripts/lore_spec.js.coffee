describe 'lore', ->

  beforeEach ->
    @subject = new CodemashLore.Models.Lore {id: 1}

  it 'exists', ->
    expect(@subject).toBeDefined()

  it 'has the correct url',  ->
    expect(@subject.url()).toEqual 'lores/1'
