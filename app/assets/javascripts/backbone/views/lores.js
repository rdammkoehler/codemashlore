CodemashLore.Views.Lores = Backbone.View.extend({

  template: JST['backbone/templates/lores'],

  events:  {
    'click .up-vote': 'upvote'
  },

  initialize: function() {
    return this.collection.on('change', this.render, this);
  },

  render: function() {
    return this.$el.html(this.template({
      lores: this.collection.toJSON()
    }));
  },

  upvote: function(e) {
    var id, lore, ranking;
    id = ($(e.currentTarget)).data('id');
    lore = this.collection.get(id);
    ranking = lore.get('ranking') + 1;
    lore.set('ranking', ranking);
    return lore.save();
  }
})
