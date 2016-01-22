var StubReactClass = require('./StubReactClass');

function ReactClassGenerator(options) {
  options = options || {};
  var mockName = options.mockName;
  var tagName = options.tagName || 'div';
  return StubReactClass(tagName, mockName);
}

module.exports = ReactClassGenerator;
