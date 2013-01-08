CodemashLore.Views.AddLore = Backbone.View.extend({

  template: JST['backbone/templates/add'],

  events: {
    'click #add-lore': 'addLore'
  },

  render: function() {
    return this.$el.html(this.template());
  },

  addLore: function() {
    var lore;
    lore = new CodemashLore.Models.Lore();
    lore.set('content', ($('#lore_content')).val());
    lore.set('ranking', ($('#lore_ranking')).val());
    lore.set('title', ($('#lore_title')).val());
    lore.set('shenanigans', ($('#lore_shenanigans')).is(':checked') ? true : false);
    lore.save();
    window.location.href = '/';
  }
})
