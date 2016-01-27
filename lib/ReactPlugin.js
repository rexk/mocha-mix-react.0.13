var ReactClassGenerator = require('./ReactClassGenerator');
var cleanUp = require('./cleanUp');

function ReactPlugin(mochaMix) {
  mochaMix.setDefaultMockGenerator(ReactClassGenerator);
  mochaMix.before(function () {
    var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');
    var canUseDOM = (typeof window !== 'undefined' && window.document && window.document.createElement);;
    ExecutionEnvironment.canUseDOM = canUseDOM;
    ExecutionEnvironment.canUseWorkers = typeof Worker !== 'undefined';
    ExecutionEnvironment.canUseEventListeners = canUseDOM && !!(window.addEventListener || window.attachEvent);
    ExecutionEnvironment.canUseViewport = canUseDOM && !!window.screen;
    ExecutionEnvironment.isInWorker = !canUseDOM;
  });

  mochaMix.afterEach(cleanUp);
}

module.exports = ReactPlugin;
