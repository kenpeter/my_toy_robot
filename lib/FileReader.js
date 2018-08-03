
var FileReader = function() {};

FileReader.prototype.readInputFile = function(fileName, cbParseArg) {

	console.log('read input file');
	cbParseArg(null, null);	
}

module.exports = FileReader;
