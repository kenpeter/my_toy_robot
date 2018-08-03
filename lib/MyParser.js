
var MyParser = function() {};

MyParser.prototype.parseArgs = function(fileData, cbRobotRun) {

	console.log('parse data');
	cbRobotRun(null, null); 
}


module.exports = MyParser;
