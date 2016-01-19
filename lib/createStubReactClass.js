var React = require('react');
var getDisplayName = require('./getDisplayName');

/**
 * createSubReactclass
 *
 * @param  {string}           name    name to be a displayName
 * @return {ReactComponent}
 */
function createStubReactClass(tagName, name) {
  tagName = tagName || 'DIV';
  return React.createClass({
    displayName: getDisplayName(tagName, name),
    render: function () {
      return React.createElement(
        tagName,
        this.props,
        this.props.children
      );
    }
  });
}

module.exports = createStubReactClass;
