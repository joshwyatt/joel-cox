#!/usr/bin/env node
'use strict';

var shellscript = require('shellscript').globalize();

var sayIt = function(){
  shell('say "Joel Cox, woooooooooooooooooooooooooooo!!!"');
};

module.exports = function(){
  sayIt();
}();