describe("calcModel", function() {
  beforeEach(function() {
    this.subject = new Intro.calcModel();
  });

  describe("defaults", function() {
    it("should set operand1 to 0", function() {
      expect(this.subject.get("operand1")).toEqual(0);
    });

    it("should set operand2 to 0", function() {
      expect(this.subject.get("operand2")).toEqual(0);
    });
  });

  describe('arithmetic functions', function () {
    beforeEach(function () {
      this.subject.set('operand1', 4)
      this.subject.set('operand2', 2)
    });

    describe("#add", function() {
      it("should add them up", function() {
        expect(this.subject.add()).toEqual(6);
      });
    });
    
    describe("#subtract", function() {
      it("should subtract 'em", function() {
        expect(this.subject.subtract()).toEqual(2);
      });
    });
  
    describe("#multiply", function() {
      it("should multiply thyne numbers", function() {
        expect(this.subject.multiply()).toEqual(8);
      });
    });
    
    describe("#divide", function() {
      it("divide and conquer", function() {
        expect(this.subject.divide()).toEqual(2);
      });
    });
  });
});

describe('calcView', function () {
  beforeEach(function () {
    this.model = new Intro.calcModel({
      operand1: 4,
      operand2: 2
    });

    this.addSpy = spyOn(this.model, 'add').andCallThrough();
    this.subtractSpy = spyOn(this.model, 'subtract').andCallThrough();
    this.multiplySpy = spyOn(this.model, 'multiply').andCallThrough();
    this.divideSpy = spyOn(this.model, 'divide').andCallThrough();

    this.subject = new Intro.calcView({model: this.model});
  });

  describe("#sum", function() {
    beforeEach(function () {
      this.result = this.subject.sum();
    });
    
    it("should have sum title", function() {
      expect(this.result).toContain("Sum: ");
    });

    it("should have the sum", function() {
      expect(this.result).toContain("6");
    });
    
    it("should call add on the model", function() {
      expect(this.addSpy).toHaveBeenCalled();
    });
  });

  describe("#difference", function() {
    beforeEach(function () {
      this.result = this.subject.difference();
    });
    
    it("should have difference title", function() {
      expect(this.result).toContain("Difference: ");
    });

    it("should have the difference", function() {
      expect(this.result).toContain("2");
    });
    
    it("should call subtact on the model", function() {
      expect(this.subtractSpy).toHaveBeenCalled();
    });
  });
  
  describe("#product", function() {
    beforeEach(function () {
      this.result = this.subject.product();
    });
    
    it("should have product title", function() {
      expect(this.result).toContain("Product: ");
    });

    it("should have the product", function() {
      expect(this.result).toContain("8");
    });
    
    it("should call multiply on the model", function() {
      expect(this.multiplySpy).toHaveBeenCalled();
    });
  });

  describe("#quotient", function() {
    beforeEach(function () {
      this.result = this.subject.quotient();
    });
    
    it("should have quotient title", function() {
      expect(this.result).toContain("Quotient: ");
    });

    it("should have the quotient", function() {
      expect(this.result).toContain("2");
    });
    
    it("should call divide on the model", function() {
      expect(this.divideSpy).toHaveBeenCalled();
    });
  });
});

