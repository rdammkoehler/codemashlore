CodemashLore.Models.Lore = Backbone.Model.extend({

  url: function() {
    return "lores/" + this.id;
  }

})
