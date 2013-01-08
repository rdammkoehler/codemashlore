class CodemashLore.Views.LoreGrid extends Backbone.View
  template: JST['backbone/templates/lores']

  initialize: ->
    @collection.on 'change', @render, @
    @collection.on 'remove', @render, @

  events:
    'click .up-vote': 'upvote'
    'click .down-vote': 'downvote'
    'click .flip-shenanigans': 'shenanigans'
    'click .delete': 'delete'

  render: ->
    @$el.html @template
      lores: @collection.toJSON()

  upvote: (e) =>
    id = ($ e.currentTarget).data('id')
    lore = @collection.get(id)
    ranking = lore.get('ranking') + 1
    lore.set 'ranking', ranking
    lore.save()

  downvote: (e) =>
    id = ($ e.currentTarget).data('id')
    lore = @collection.get(id)
    ranking = lore.get('ranking') - 1
    lore.set 'ranking', ranking
    lore.save()

  shenanigans: (e) ->
    id = ($ e.currentTarget).data('id')
    lore = @collection.get(id)
    shenanigans = lore.get('shenanigans')
    lore.set 'shenanigans', !shenanigans
    lore.save()

  delete: (e) ->
    id = ($ e.currentTarget).data('id')
    lore = @collection.get(id)
    lore.destroy()
