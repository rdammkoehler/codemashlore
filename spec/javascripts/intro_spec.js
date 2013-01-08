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

