# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

$ ->
  lores = new CodemashLore.Collections.Lores()
  @view = new CodemashLore.Views.Lores {collection: lores, el: '#lores-table'}
  lores.fetch
    success: (collection, response, options) =>
      @view.render()
