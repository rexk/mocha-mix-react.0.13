var ReactClassGenerator = require('./ReactClassGenerator');
var cleanUp = require('./cleanUp');

function ReactPlugin(mochaMix) {
  mochaMix.setDefaultMockGenerator(ReactClassGenerator);

  mochaMix.afterEach(cleanUp);
}

module.exports = ReactPlugin;
