commit-bell
===========

Ring a bell when someone commits code to a Code for America repository. What
else did you expect?

This basic websockets client listens for `newcommit` messages from
[flying-chicken](https://github.com/codeforamerica/flying_chicken). When it
receives one, it communicates with an Arduino device and briefly turns on one
of the GPIO pins. You need to wire up a bell to that pin if you want this to be
fun. For a simple setup, you can use a transistor to let the Arduino control a
solenoid. The solenoid shaft can strike the bell to ring it. *Blamo!* You've a
bell that rings whenever we advance civic
technology.

## Requirements

This bell-ringing client requires Node.js and the socket.io-client and johnny-five modules. And of course you need the Arduino board and probably a bell, solenoid, etc.
