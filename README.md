neatAudio
===========

A simple, neat promise wrapper for the web Audio Context API, designed for use with browserify. Get and play sounds from urls with ease.

## Usage

You'll need to use a Promise pattern with neatAudio, since it returns promises.


### Fetch a Sound

```javascript
var neatAudio = require('neat-audio');

// Init neatAudio
neatAudio.init(window);

// Load the sound buffers into variable
neatAudio.fetchSound('willhelm_scream.wav').then(function(soundBuffer){
  var scream = soundBuffer;

  // Play the sound
  neatAudio.playSound(scream);
});
```

### Fetch Multiple Sounds

```javascript
var neatAudio = require('neat-audio');
var Promise = require('es6-promise'); // or some other promise lib/polyfill

// Init neatAudio
neatAudio.init(window);

// Declare some variables to look after your sound buffers
var sounds = {
  click: null,
  shick: null,
  boom: null
};

// Load the sound buffers into local variables
Promise.all([
  neatAudio.fetchSound('click.wav'),
  neatAudio.fetchSound('shick.wav'),
  neatAudio.fetchSound('boom.wav')
]).then(function(values) {
  sounds.click = values[0];
  sounds.shick = values[1];
  sounds.boom = values[2];
  
  // Playing any of them
  neatAudio.playSound(sounds.boom);
});
```

## Todo

[ ] Add tests for getting and playing sounds
