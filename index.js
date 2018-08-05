
var FileReader = require('./lib/FileReader'); 
var MyParser = require('./lib/MyParser');
var Robot = require('./lib/Robot');

// func, can use new
var fileReader = new FileReader();
var myParser = new MyParser();
var robot = new Robot();


// total obj
var app = function() {

};


app.prototype.print = function(err, robot) {
	// error pattern
  if(err) {
    console.log(err);
    return false;
  }

  if(!robot.isPlaced) {
    console.log('robot is not placed on the table');
    return false;
  }
}


app.prototype.run = async function(fileName) {

	// read file
  var content = await fileReader.readInputFile(fileName);
	var cmdArr = myParser.parseStrData(content);
  robot = robot.runInstructions(cmdArr);
  this.print(null, robot);

};


module.exports = app;
