var React = require('react');

function cleanUp () {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    var testDivs = document.body.childNodes;
    Array.prototype.slice.call(testDivs).every(function (div) {
      return React.unmountComponentAtNode(div);
    });
    document.body.innerHTML = '';
  }
}

module.exports = cleanUp;
