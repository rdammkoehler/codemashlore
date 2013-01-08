class CodemashLore.Views.Lores extends Backbone.View

  initialize: ->
    @legitCollection = new CodemashLore.Collections.Lores()
    @shenanigansCollection = new CodemashLore.Collections.Lores()
    @bindCollections()

    @shenanigansView = new CodemashLore.Views.LoreGrid
      collection: @shenanigansCollection
      el: '#lores-shenanigans-table'

    @legitView = new CodemashLore.Views.LoreGrid
      collection: @legitCollection
      el: '#lores-table'

  bindCollections: ->
    @legitCollection.on 'change', @render, @
    @shenanigansCollection.on 'change', @render, @

  render: ->
    @renderLegit()
    @renderShenanigans()

  renderLegit: ->
    legit = @collection.where({shenanigans: false})
    @legitCollection.reset legit
    @legitView.render()

  renderShenanigans: ->
    shenanigans = @collection.where({shenanigans: true})
    @shenanigansCollection.reset shenanigans
    @shenanigansView.render()
