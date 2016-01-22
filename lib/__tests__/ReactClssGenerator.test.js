var expect = require('expect');
var MochaMix = require('mocha-mix');

describe('ReactClassGenerator', function () {
  var mixer = MochaMix.mix({
    rootDir: __dirname,
    import: '../ReactClassGenerator',
    mocks: {
      StubReactClass: {
        import: './StubReactClass',
        mock: function (tagName, mockName) {
          return {tagName, mockName};
        }
      }
    }
  });

  var ReactClassGenerator;
  beforeEach(function () {
    ReactClassGenerator = mixer.require();
  });

  it('should pass default tagName as div', function () {
    var actual = ReactClassGenerator();
    expect(actual).toEqual({tagName: 'div', mockName: undefined});
  });

  it('should pass tagName', function () {
    var actual = ReactClassGenerator({tagName: 'input'});
    expect(actual).toEqual({tagName: 'input', mockName: undefined});
  });

  it('should pass tagName and mockName', function () {
    var actual = ReactClassGenerator({
      tagName: 'input',
      mockName: 'MyComponent'
    });

    expect(actual).toEqual({
      tagName: 'input',
      mockName: 'MyComponent'
    });
  });
});
