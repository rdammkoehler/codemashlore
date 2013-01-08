class CodemashLore.Views.Lores extends Backbone.View
  template: JST['backbone/templates/lores']

  initialize: ->
    @collection.on 'change', @render, @

  events:
    'click .up-vote': 'upvote'
    'click .down-vote': 'downvote'

  render: ->
    @$el.html @template
      lores: @collection.toJSON()

  upvote: (e) ->
    id = ($ e.currentTarget).data('id')
    lore = @collection.get(id)
    ranking = lore.get('ranking') + 1
    lore.set 'ranking', ranking
    lore.save()

  downvote: (e) ->
    id = ($ e.currentTarget).data('id')
    lore = @collection.get(id)
    ranking = lore.get('ranking') - 1
    lore.set 'ranking', ranking
    lore.save()
