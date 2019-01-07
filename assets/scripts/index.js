'use strict'

require('bootstrap')


// allows usage of new JS features
require('babel-polyfill')


// styles
var sass = require('sass');

sass.render({file: scss_filename}, function(err, result) { /* ... */ });
// require('./assets/styles/index.scss')

require('./assets/styles/main.css')

$(() => {
  $('.a').wavify({
    // height of wave
    height: 200,
  // Amplitude of wave
    amplitude: 100,
  // Animation speed
    speed: .15,
  // Total number of articulation in wave
    bones: 3,
  // Color
    color: 'rgba(255,255,255, 0.20)'
  })
})
