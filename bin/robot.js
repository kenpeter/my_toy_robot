#!/usr/bin/env node

/* env node */
var App = require('../index.js');
var app = new App();
global.DEBUG = true;

// 0, node
// 1, cmd
// 2, param
var fileName = process.argv[2];
app.run(fileName);

