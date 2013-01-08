CodemashLore.Views.LoreGrid = Backbone.View.extend({

  template: JST['backbone/templates/lores'],

  initialize: function() {
    this.collection.on('change', this.render, this);
    this.collection.on('remove', this.render, this);
  },

  events: {
    'click .up-vote': 'upvote',
    'click .down-vote': 'downvote',
    'click .flip-shenanigans': 'shenanigans',
    'click .delete': 'deleteLore'
  },

  render: function() {
    this.$el.html(this.template({
      lores: this.collection.toJSON()
    }));
  },

  upvote: function(e) {
    var id, lore, ranking;
    id = ($(e.currentTarget)).data('id');
    lore = this.collection.get(id);
    ranking = lore.get('ranking') + 1;
    lore.set('ranking', ranking);
    lore.save();
  },

  downvote: function(e) {
    var id, lore, ranking;
    id = ($(e.currentTarget)).data('id');
    lore = this.collection.get(id);
    ranking = lore.get('ranking') - 1;
    lore.set('ranking', ranking);
    lore.save();
  },

  shenanigans: function(e) {
    var id, lore, shenanigans;
    id = ($(e.currentTarget)).data('id');
    lore = this.collection.get(id);
    shenanigans = lore.get('shenanigans');
    lore.set('shenanigans', !shenanigans);
    lore.save();
  },

  deleteLore: function(e) {
    var id, lore;
    id = ($(e.currentTarget)).data('id');
    lore = this.collection.get(id);
    lore.destroy();
  }
})
