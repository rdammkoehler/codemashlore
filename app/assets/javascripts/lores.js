
$(function() {
  var lores,
    _this = this;
  lores = new CodemashLore.Collections.Lores();
  this.view = new CodemashLore.Views.Lores({
    collection: lores,
    el: '#lores-table'
  });
  return lores.fetch({
    success: function(collection, response, options) {
      return _this.view.render();
    }
  });
});
