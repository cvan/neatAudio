var neatAudio = require('./test/bundle');

describe('neatAudio', function () {

  it('should error if the environment does not support AudioContext', function () {
    expect(function () {
      neatAudio.init(null);
    }).toThrow(new Error('AudioContext is not supported in this environment.'));
  });

  it('should not error if the environment supports AudioContext', function() {
    expect(function () {
      neatAudio.init({AudioContext: {}});
    }).not.toThrow(new Error('AudioContext is not supported in this environment.'));
  });

});
