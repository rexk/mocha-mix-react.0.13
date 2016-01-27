var StubReactClass = require('./StubReactClass');

/**
 * Create a ReactClass with given options
 *
 * @param  {MockDescription} options  An MochaMix.MockDescription instance
 * @return {ReactClass}
 */
function ReactClassGenerator(options) {
  options = options || {};
  var mockName = options.mockName;
  var tagName = options.tagName || 'div';
  return StubReactClass(tagName, mockName);
}

module.exports = ReactClassGenerator;
