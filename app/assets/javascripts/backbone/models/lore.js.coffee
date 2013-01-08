class CodemashLore.Models.Lore extends Backbone.Model
  url: -> if @isNew() then "/lores" else "/lores/#{@id}"
