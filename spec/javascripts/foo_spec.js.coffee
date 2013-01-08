# use require to load any .js file available to the asset pipeline

describe "Foo", ->
  it "it is not bar", ->
    v = new Foo()
    expect(v.bar()).toEqual(false)

describe "Bar", ->
  it "it is not foo", ->
    v = new Bar()
    expect(v.foo()).toEqual(false)

describe "WTF", ->
  it "should be true", ->
    expect(true).toBeTruthy()
