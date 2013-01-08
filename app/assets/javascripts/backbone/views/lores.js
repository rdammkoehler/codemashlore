CodemashLore.Views.Lores = Backbone.View.extend({

  initialize: function() {
    this.legitCollection = new CodemashLore.Collections.Lores();
    this.shenanigansCollection = new CodemashLore.Collections.Lores();
    this.bindCollections();
    this.shenanigansView = new CodemashLore.Views.LoreGrid({
      collection: this.shenanigansCollection,
      el: '#lores-shenanigans-table'
    });
    this.legitView = new CodemashLore.Views.LoreGrid({
      collection: this.legitCollection,
      el: '#lores-table'
    });
  },

  bindCollections: function() {
    this.legitCollection.on('change', this.render, this);
    this.shenanigansCollection.on('change', this.render, this);
  },

  render: function() {
    this.renderLegit();
    this.renderShenanigans();
  },

  renderLegit: function() {
    var legit;
    legit = this.collection.where({
      shenanigans: false
    });
    this.legitCollection.reset(legit);
    this.legitView.render();
  },

  renderShenanigans:  function() {
    var shenanigans;
    shenanigans = this.collection.where({
      shenanigans: true
    });
    this.shenanigansCollection.reset(shenanigans);
    this.shenanigansView.render();
  }

})
