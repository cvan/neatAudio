neatAudio
===========

A simple, neat promise wrapper for the web Audio Context API. Get and play sounds from urls with ease.

## Usage

You'll need to use a Promise pattern with neatAudio, since it returns promises.


### Fetch a Sound

```javascript
// Declare a variable to look after your sound buffer
var fooSound;

// Load the sound buffers into variable
NeatAudio.fetchSound('soundFoo.wav').then(function(soundBuffer){
  fooSound = soundBuffer;
});

// Play the sound
NeatAudio.playSound(sounds.foo);
```

### Fetch Multiple Sounds

```javascript
// Declare some variables to look after your sound buffers
var sounds = {
  foo: null,
  bar: null,
  baz: null
};

// Load the sound buffers into local variables
Promise.all([
  NeatAudio.fetchSound('soundFoo.wav'),
  NeatAudio.fetchSound('soundBar.wav'),
  NeatAudio.fetchSound('soundBaz.wav')
]).then(function(values) {
  sounds.foo = values[0];
  sounds.bar = values[1];
  sounds.baz = values[2];
});

// Playing any of them
NeatAudio.playSound(sounds.foo);
```
