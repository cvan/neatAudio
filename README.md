neatAudio
===========

A simple, neat promise wrapper for the web Audio Context API. Get and play sounds from urls with ease.

## Usage

You'll need to use a Promise pattern with neatAudio, since it returns promises.


### Fetch a Sound

```javascript
var neatAudio = require('neat-audio');

// Declare a variable to look after your sound buffer
var scream;

// Load the sound buffers into variable
NeatAudio.fetchSound('willhelm_scream.wav').then(function(soundBuffer){
  fooSound = soundBuffer;
});

// Play the sound
NeatAudio.playSound(scream);
```

### Fetch Multiple Sounds

```javascript
var neatAudio = require('neat-audio');

// Declare some variables to look after your sound buffers
var sounds = {
  click: null,
  shick: null,
  boom: null
};

// Load the sound buffers into local variables
Promise.all([
  NeatAudio.fetchSound('click.wav'),
  NeatAudio.fetchSound('shick.wav'),
  NeatAudio.fetchSound('boom.wav')
]).then(function(values) {
  sounds.click = values[0];
  sounds.shick = values[1];
  sounds.boom = values[2];
});

// Playing any of them
NeatAudio.playSound(sounds.boom);
```
