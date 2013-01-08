describe 'lores view', ->

  beforeEach ->
    @collection = new CodemashLore.Collections.Lores [
      {id: 1, content: 'x', ranking: 1, shenanigans: true},
      {id: 2, content: 'x', ranking: 1, shenanigans: false}
    ]
    @subject = new CodemashLore.Views.Lores
      collection: @collection

  it 'binds the events correctly', ->
    spyOn(@subject.legitCollection, 'on').andCallThrough()
    spyOn(@subject.shenanigansCollection, 'on').andCallThrough()
    @subject.bindCollections()
    expect(@subject.legitCollection.on).toHaveBeenCalledWith 'change', @subject.render, @subject
    expect(@subject.shenanigansCollection.on).toHaveBeenCalledWith 'change', @subject.render, @subject

  it 'renders correctly', ->
    spyOn(@subject, 'renderLegit')
    spyOn(@subject, 'renderShenanigans')
    @subject.render()
    expect(@subject.renderLegit).toHaveBeenCalled()
    expect(@subject.renderShenanigans).toHaveBeenCalled()

  it 'renders legit grid', ->
    spyOn(@subject.legitView, 'render')
    @subject.renderLegit()
    expect(@subject.legitView.render).toHaveBeenCalled()
    expect(@subject.legitCollection.length).toEqual 1
    expect(@subject.legitCollection.first().get('shenanigans')).toEqual false

  it 'renders shenanigans grid', ->
    spyOn(@subject.shenanigansView, 'render')
    @subject.renderShenanigans()
    expect(@subject.shenanigansView.render).toHaveBeenCalled()
    expect(@subject.shenanigansCollection.length).toEqual 1
    expect(@subject.shenanigansCollection.first().get('shenanigans')).toEqual true
