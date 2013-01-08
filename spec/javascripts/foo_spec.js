// use require to load any .js file available to the asset pipeline

describe("WTF", function() {
  beforeEach(function () {
    this.isTrue = true;
  });
  
  it("should be true", function() {
    expect(this.isTrue).toEqual(true);
  });
  
});

