// lib
var fs = require('fs');

var FileReader = function() {};

FileReader.prototype.readInputFile = function(fileName, cb) {
	this.validateFileName(fileName, function(err, validFileName){
		
		fs.readFile(validFileName, { encoding: 'utf-8' }, function(err, data) {

			if(err) {
				console.log(err);
				return false;	
			}

			// robot run cmd
			cb(null, data);
		});
	});

}


FileReader.prototype.validateFileName = function(fileName, cb) {
	DEBUG && console.log('validate file name');

	var arr = fileName.split('/');	
	var len = arr.length;
	var lastFileName = arr[len-1];
	var arr1 = lastFileName.split('.');
	var ext = arr1[arr1.length-1];	 

	if(ext !== 'txt') {
		DEBUG && console.log('not txt file');
	} else {
		DEBUG && console.log('it is txt file');
		// read file with data
		cb(null, fileName);
	}

}

module.exports = FileReader;
