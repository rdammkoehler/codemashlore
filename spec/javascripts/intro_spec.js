describe('all of it', function() {
    describe('intro files', function () {
	describe('theModel', function () {
	    beforeEach(function () {
		this.subject = new Intro.theModel();
	    });
	    
	    it('should have a default name', function () {
		expect(this.subject.get('name')).toEqual("Spongebob Squarepants");
	    });
	});

	describe('theView', function () {
	    beforeEach(function () {
		this.model = new Backbone.Model({ name: "Patrick" });
		this.subject = new Intro.theView({ model: this.model });
		setFixtures("<div class='main'></div>");
	    });
	    
	    it('the view should be defined', function () {
		expect(this.subject).toBeDefined();
	    });

	    describe("#render", function(){
		beforeEach(function () {
		    this.result = this.subject.render();
		});
		
		it('should have the html appended', function(){
		    expect($('.main').html()).toContain('Patrick'); 
		});

		it('should return itself from render', function(){
		    expect(this.result).toEqual(this.subject);
		});
	    });

	    describe("model binding", function() {
		beforeEach(function () {
		    this.model.set('name', 'Mr Krabbs');
		});
		
		it('should have the html appended', function(){
		    expect($('.main').html()).toContain('Mr Krabbs'); 
		});
	    });
	    
	});
    }); 

    describe('calc files', function() {
	
	describe('calcView',function() {
	    //TODO!
	});

	describe('calcModel', function() {

	    beforeEach(function() {
		this.subject = new Intro.calcModel();
	    });

	    it('should have a default operator', function() {
		expect(this.subject.get('operator')).toEqual("+");
	    });

	    it('should have a default operand0', function() {
		expect(this.subject.get('operand0')).toEqual("1");
	    });

	    it('should have a default operand1', function() {
		expect(this.subject.get('operand1')).toEqual("1");
	    });

	    it('should have a default result', function() {
		expect(this.subject.get('result')).toEqual("none");
	    });
/*
	    it('should have a calculate function', function() {
		expect(this.subject.calculate).toBeDefined();
	    });
*/
	    describe('maths', function() {

		beforeEach(function() {
		    this.subject.set('operand0', '3');
		    this.subject.set('operand1', '7');
		});

		it('can add', function() {
		    this.subject.set('operator', '+');
		    this.subject.calculate();
		    expect(this.subject.get('result')).toEqual(10);
		});

		it('can subtract', function() {
		    this.subject.set('operator', '-');
		    this.subject.calculate();
		    expect(this.subject.get('result')).toEqual(-4);
		});

		it('can multiply', function() {
		    this.subject.set('operator', '*');
		    this.subject.calculate();
		    expect(this.subject.get('result')).toEqual(21);
		});

		it('can divide', function() {
		    this.subject.set('operator', '/');
		    this.subject.calculate();
		    expect(this.subject.get('result')).toEqual(0.42857142857142855);
		});

/* FUUUUUUUUUUCK!
		it('does not validate operator', function() {
		    this.subject.set('operator', 'r');
		    expect(function() { this.subject.calculate(); }).toThrow(new SyntaxError("Unexpected token ILLEGAL"));
		});
*/
	    }); 

	});
    });
});