describe "calcModel", ->
  beforeEach ->
    @subject = new Intro.calcModel()

  describe "defaults", ->
    it "should set operand1 to 0", ->
      expect(@subject.get("operand1")).toEqual 0

    it "should set operand2 to 0", ->
      expect(@subject.get("operand2")).toEqual 0


  describe "arithmetic functions", ->
    beforeEach ->
      @subject.set "operand1", 4
      @subject.set "operand2", 2

    describe "#add", ->
      it "should add them up", ->
        expect(@subject.add()).toEqual 6


    describe "#subtract", ->
      it "should subtract 'em", ->
        expect(@subject.subtract()).toEqual 2


    describe "#multiply", ->
      it "should multiply thyne numbers", ->
        expect(@subject.multiply()).toEqual 8


    describe "#divide", ->
      it "divide and conquer", ->
        expect(@subject.divide()).toEqual 2




describe "calcView", ->
  beforeEach ->
    @model = new Intro.calcModel(
      operand1: 4
      operand2: 2
    )
    @addSpy = spyOn(@model, "add").andCallThrough()
    @subtractSpy = spyOn(@model, "subtract").andCallThrough()
    @multiplySpy = spyOn(@model, "multiply").andCallThrough()
    @divideSpy = spyOn(@model, "divide").andCallThrough()
    @subject = new Intro.calcView(model: @model)

  describe "#sum", ->
    beforeEach ->
      @result = @subject.sum()

    it "should have sum title", ->
      expect(@result).toContain "Sum: "

    it "should have the sum", ->
      expect(@result).toContain "6"

    it "should call add on the model", ->
      expect(@addSpy).toHaveBeenCalled()


  describe "#difference", ->
    beforeEach ->
      @result = @subject.difference()

    it "should have difference title", ->
      expect(@result).toContain "Difference: "

    it "should have the difference", ->
      expect(@result).toContain "2"

    it "should call subtact on the model", ->
      expect(@subtractSpy).toHaveBeenCalled()


  describe "#product", ->
    beforeEach ->
      @result = @subject.product()

    it "should have product title", ->
      expect(@result).toContain "Product: "

    it "should have the product", ->
      expect(@result).toContain "8"

    it "should call multiply on the model", ->
      expect(@multiplySpy).toHaveBeenCalled()


  describe "#quotient", ->
    beforeEach ->
      @result = @subject.quotient()

    it "should have quotient title", ->
      expect(@result).toContain "Quotient: "

    it "should have the quotient", ->
      expect(@result).toContain "2"

    it "should call divide on the model", ->
      expect(@divideSpy).toHaveBeenCalled()
