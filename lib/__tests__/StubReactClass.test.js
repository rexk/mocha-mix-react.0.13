var expect = require('expect');
var React = require('react');
var MochaMix = require('mocha-mix');
var TestUtils = require('react/lib/ReactTestUtils');

describe('StubReactClass', function () {
  var mixer = MochaMix.mix({
    rootDir: __dirname,
    import: '../StubReactClass',
    mocks: {
      getDisplayName: {
        import: './getDisplayName',
        mock: function () {
          return 'AlwaysSameName';
        }
      }
    }
  });
  var ShallowRenderer;
  var StubReactClass;
  beforeEach(function () {
    StubReactClass = mixer.require();
    ShallowRenderer = TestUtils.createRenderer();
  });

  it('should create <div>', function () {
    var StubDiv = StubReactClass();
    ShallowRenderer.render(<StubDiv />);
    var actual = ShallowRenderer.getRenderOutput();
    expect(actual.type).toEqual('div');
    expect(actual.props.children).toNotExist();
  });

  it('should create <${tag}>', function () {
    var StubInput = StubReactClass('input');
    ShallowRenderer.render(<StubInput />);
    var actual = ShallowRenderer.getRenderOutput();
    expect(actual.type).toEqual('input');
    expect(actual.props.children).toNotExist();
  });

  it('should render with given props', function () {
    var StubClass = StubReactClass('div', 'MyComponent');
    var props = { a: 1, b: 'name' };
    ShallowRenderer.render(<StubClass {...props}/>);
    var actual = ShallowRenderer.getRenderOutput();
    let { children, ...actualProps } = actual.props;
    expect(actualProps).toEqual(props);
  });

  it('should render with given children', function () {
    var StubClass = StubReactClass('ul', 'MyComponent');
    var props = { a: 1, b: 'name' };
    ShallowRenderer.render(
      <StubClass {...props}>
        <li>one</li>
        <li>two</li>
      </StubClass>
    );
    var actual = ShallowRenderer.getRenderOutput();
    let {children} = actual.props;
    let expectChildren = (child, value) => {
      expect(child.type).toEqual('li');
      expect(child.props.children).toEqual(value);
    };
    let expects = [
      (child) => expectChildren(child, 'one'),
      (child) => expectChildren(child, 'two')
    ];
    Array.prototype.forEach.call(children, function (child, index) {
      expects[index](child);
    });
  });
});
