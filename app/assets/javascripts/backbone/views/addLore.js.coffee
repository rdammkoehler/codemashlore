class CodemashLore.Views.AddLore extends Backbone.View
  template: JST['backbone/templates/add']

  events:
    'click #add-lore': 'addLore'
  
  render: ->
    @$el.html @template()

  addLore: ->
    lore = new CodemashLore.Models.Lore()
    lore.set 'content', ($ '#lore_content').val()
    lore.set 'ranking', ($ '#lore_ranking').val()
    lore.set 'title', ($ '#lore_title').val()
    lore.set 'shenanigans', if ($ '#lore_shenanigans').is(':checked') then true else false
    lore.save()
    window.location.href = '/'
