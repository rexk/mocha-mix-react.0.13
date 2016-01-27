var React = require('react');
var getDisplayName = require('./getDisplayName');

/**
 * createSubReactclass
 *
 * @param  {string}           name    name to be a displayName
 * @return {ReactClass}
 */
function StubReactClass(tagName, name) {
  tagName = tagName || 'DIV';
  tagName = tagName.toLowerCase();
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

module.exports = StubReactClass;
