/*jslint node: true */
'use strict';

var io = require('socket.io-client');
var five = require('johnny-five');

var board = new five.Board();

board.on('ready', function () {
  var motor;
  var motorOn = false;
  console.log('Board is ready');
  motor = new five.Led(2);

  var socket = io.connect('http://flying-chicken.herokuapp.com');
  socket
    .on('connect', function () {
      // socket connected
      console.log('connected');
    })
    .on('disconnect', function () {
      console.log('disconnected');
      // socket disconnected
    })
    .on('newcommit', function () {
      console.log('New Commit');
      // If we are mid-ring, then ignore incoming commit messages.
      // TODO: if we are mid-ring, we should queue the other commits.
      if (!motorOn) {
        motorOn = true;
        motor.on();
        board.wait(250, function () {
          motorOn = false;
          motor.off();
        });
      }
    });
});
