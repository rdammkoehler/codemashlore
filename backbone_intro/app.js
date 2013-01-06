var theView = Backbone.View.extend({
  initialize: function(){
    this.model.on('change', this.render, this); 
  },

  render: function(){
    $('.main').html('<h1>' + this.model.get('name') + '</h1>');
    return this;
  },
});

var theModel = Backbone.Model.extend({
  defaults: {
    name: "Spongebob Squarepants"
  }
});


//Lab: Create a simple calculator to add two numbers
// View take a model and have a render
// Model have the operands
