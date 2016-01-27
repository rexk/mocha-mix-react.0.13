function ReactPlugin(mochaMix) {
  var ReactClassGenerator = require('./ReactClassGenerator');
  var cleanUp = require('./cleanUp');
  mochaMix.setDefaultMockGenerator(ReactClassGenerator);
  mochaMix.afterEach(cleanUp);
}

module.exports = ReactPlugin;
