var React = require('react');
var MochaMix = require('mocha-mix');
var expect = require('expect');

describe('cleanUp', function () {
  var TestReactClass = React.createClass({
    componentWillUnmount() {
      console.log('unmount!');
      this.props.onUnmount();
    },

    render: function () {
      return React.createElement(
        'div',
        this.props,
        this.props.children
      );
    }
  });

  var mixer = MochaMix.mix({
    rootDir: __dirname,
    import: '../cleanUp'
  });

  it('should dismount all ReactElements', function () {
    var cleanUp = mixer.require();
    for (let i = 0; i < 10; i++) {
      let div = document.createElement('div');
      document.body.appendChild(div);
      React.render(
        <TestReactClass
          idx={i} />,
      div);
    }
    cleanUp();
    expect(document.body.innerHTML).toEqual('');
  });
});
