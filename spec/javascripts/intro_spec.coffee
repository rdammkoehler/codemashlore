describe "intro files", ->
  describe "Intro.theModel", ->
    beforeEach ->
      @subject = new Intro.theModel()

    it "should have a default name", ->
      expect(@subject.get("name")).toEqual "Spongebob Squarepants"

  describe "Intro.theView", ->
    beforeEach ->
      @model = new Backbone.Model(name: "Patrick")
      @subject = new Intro.theView(model: @model)
      setFixtures "<div class='main'></div>"

    it "the view should be defined", ->
      expect(@subject).toBeDefined()

    describe "#render", ->
      beforeEach ->
        @result = @subject.render()

      it "should have the html appended", ->
        expect($(".main").html()).toContain "Patrick"

      it "should return itself from render", ->
        expect(@result).toEqual @subject


    describe "model binding", ->
      beforeEach ->
        @model.set "name", "Mr Krabbs"

      it "should have the html appended", ->
        expect($(".main").html()).toContain "Mr Krabbs"
