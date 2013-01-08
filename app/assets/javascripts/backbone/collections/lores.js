CodemashLore.Collections.Lores = Backbone.Collection.extend({

  initialize: function() {
    return this.model = CodemashLore.Models.Lore;
  },

  url: function() {
    return '/lores';
  }

})
