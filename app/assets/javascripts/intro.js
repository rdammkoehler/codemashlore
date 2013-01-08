window.Intro = {};

Intro.theView = Backbone.View.extend({
  initialize: function(){
    this.model.on('change', this.render, this); 
  },

  render: function(){
    $('.main').html('<h1>' + this.model.get('name') + '</h1>');
    return this;
  },
});

Intro.theModel = Backbone.Model.extend({
  defaults: {
    name: "Spongebob Squarepants"
  }
});

var calcModel = Backbone.Model.extend({
  defaults: {
    operand1: 0,
    operand2: 0
  },
  add: function(){
    return this.attributes.operand1 + this.attributes.operand2;
  },
  subtract: function(){
    return this.attributes.operand1 - this.attributes.operand2;
  },
  multiply: function(){
    return this.attributes.operand1 * this.attributes.operand2;
  },
  divide: function(){
    return this.attributes.operand1 / this.attributes.operand2;
  }
});

var calcView = Backbone.View.extend({
  initialize: function(){
    this.model.on('change', this.render, this); 
  },

  sum: function(){ return '<h1>Sum: ' + this.model.add() + '</h1>'; },
  difference: function(){ return '<h1>Difference: ' + this.model.subtract() + '</h1>'; },
  product: function(){ return '<h1>Product: ' + this.model.multiply() + '</h1>'; },
  quotient: function(){ return '<h1>Quotient: ' + this.model.divide() + '</h1>'; },

  render: function(){
    $('.main').html(this.sum() + this.difference() + this.product() + this.quotient());
    return this;
  },
});

/*Lab: Create a simple calculator to operate on two numbers
 * Model
 *  1. Should contain the operands
 *  2. Should contain the arthmetic functions
 *  
 * View
 *  1. Take a model at initialize
 *  2. Create a simple render function
 *  3. Bind to any model changes
 *  4. Output the sum, difference, product, and quotient of the operands
 *  5. Bonus points: Set up a simple form and button to take in the operands
*/ 
