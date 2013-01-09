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

Intro.calcView = Backbone.View.extend({
    initialize: function() {
	this.model.on('change', this.render, this);
    },

    render: function() {
	$('.main').html('<h2>' + this.model.get('result') + '</h2>');
	return this;
    }
});

Intro.calcModel = Backbone.Model.extend({
    defaults: {
	operator: '+',
	operand0: '1',
	operand1: '1',
	result: "none"
    },
    calculate: function() {
	this.attributes.result = this.attributes.operand0 + this.attributes.operator + this.attributes.operand1 + ";";
	this.attributes.result = eval(this.attributes.result);
	return this.attributes.result;
    }
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
