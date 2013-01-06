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


/*Lab: Create a simple calculator to add two numbers
 * Model
 *  1. Should contain the operands
 *  
 * View
 *  1. Take a model at initialize
 *  2. Create a simple render function
 *  3. Bind to any model changes
 *  4. Bonus points: Have it add the numbers via model function rather than model bind
*/ 
