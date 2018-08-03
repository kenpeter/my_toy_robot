#!/usr/bin/env node

/* env node */
var app = require('../index.js');

// 0, node
// 1, cmd
// 2, param
var fileName = process.argv[2];

// callback has err + other
app.run(fileName, function(err, robot) {
	
	// error pattern
	if(err) {
		console.log(err);
		return false;
	}	

	if(!robot.isPlaced)	{
		console.log('robot is not placed on the table');
		return false;
	}
});
