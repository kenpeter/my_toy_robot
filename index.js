
var FileReader = require('./lib/FileReader'); 
var MyParser = require('./lib/MyParser');
var Robot = require('./lib/Robot');

// total obj
var app = {};

// func, can use new
var fileReader = new FileReader();
var myParser = new MyParser();
var robot = new Robot();


// top with func param 
app.run = function(fileName, cb) {

	// read file
	fileReader.readInputFile(fileName, function(err, fileData) {

		// parse data
		myParser.parseArgs(fileData, function(err, instructionList) {

			// robot action
			robot = robot.runInstructions(instructionList);

			// print result with robot
			cb(null, robot);
		});

	});

};


module.exports = app;
