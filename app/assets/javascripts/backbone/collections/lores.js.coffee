class CodemashLore.Collections.Lores extends Backbone.Collection

  initialize: ->
    @model = CodemashLore.Models.Lore

  url: -> '/lores'
