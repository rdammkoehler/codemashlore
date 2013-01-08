CodemashLore.Collections.Lores = Backbone.Collection.extend({

  initialize: function() {
    this.model = CodemashLore.Models.Lore;
  },

  url: function() {
    return '/lores';
  }
})
