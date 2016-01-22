var React = require('react');
var createStubReactClass = require('./lib/createStubReactClass');

function ReactClassGenerator(options) {
  options = options || {};
  var mockName = options.mockName;
  var tagName = options.tagName || 'DIV';
  return createStubReactClass(tagName, mockName);
}

module.exports = function reactPlugin(mochaMix) {
  mochaMix.setDefaultMockGenerator(ReactClassGenerator);

  mochaMix.afterEach(function cleanUp() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      var testDivs = document.body.childNodes;
      Array.prototype.slice.call(testDivs).every(function (div) {
        return React.unmountComponentAtNode(div);
      });
      document.body.innerHTML = '';
    }
  });
};

var ReactPlugin = require('./lib/ReactPlugin');

module.exports = ReactPlugin;
