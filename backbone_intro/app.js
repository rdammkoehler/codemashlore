var theView = Backbone.View.extend({
  initialize: function(){
    this.model.on('change', this.render, this); 
  },

  render: function(){
    $('.main').html('<h1>' + this.model.get('name') + '</h1>');
  },
});
