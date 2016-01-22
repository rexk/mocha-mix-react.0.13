var expect = require('expect');
var MochaMix = require('mocha-mix');

describe('ReactPlugin', function () {
  var mixer = MochaMix.mix({
    rootDir: __dirname,
    import: '../ReactPlugin',
    mocks: {
      cleanUp: {
        import: './cleanUp',
        mock: {__cleanUpMock: true}
      },
      ReactClassGenerator: {
        import: './ReactClassGenerator',
        mock: {__generatorMock: true}
      }
    }
  });

  var MochaMixMock = {
    setDefaultMockGenerator: expect.createSpy(),
    afterEach: expect.createSpy()
  };


  var Plugin;
  beforeEach(function () {
    Plugin = mixer.require();
  });

  afterEach(function () {
    MochaMixMock.setDefaultMockGenerator.restore();
    MochaMixMock.afterEach.restore();
  });

  it('should set DefaultMockGenerator as ReactClassGenerator', function () {
    Plugin(MochaMixMock);
    let {ReactClassGenerator} = mixer.mocks;
    expect(MochaMixMock.setDefaultMockGenerator).toHaveBeenCalledWith(ReactClassGenerator);
  });

  it('should register afterEach hook with "cleanUp"', function () {
    Plugin(MochaMixMock);
    let {cleanUp} = mixer.mocks;
    expect(MochaMixMock.afterEach).toHaveBeenCalledWith(cleanUp);
  });

});
