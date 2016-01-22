var expect = require('expect');
var getDisplayName = require('../getDisplayName');

describe('getDisplayName', function () {
  it('should return "MixStub(${tag})"', function () {
    var actual = getDisplayName('DIV');
    expect(actual).toEqual('MixStub(div)');
  });

  it('should return "MixStub(${tagName}.MyComponent)"', function () {
    var actual = getDisplayName('input', 'MyComponent');
    expect(actual).toEqual('MixStub(input.MyComponent)');
  });

});
