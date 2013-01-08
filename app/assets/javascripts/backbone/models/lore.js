CodemashLore.Models.Lore = Backbone.Model.extend({

  url: function() {
    if (this.isNew()) {
      return "/lores";
    } else {
      return "/lores/" + this.id;
    }
  }

})
