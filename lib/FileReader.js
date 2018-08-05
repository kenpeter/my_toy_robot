// lib
var fs = require('fs');

var FileReader = function() {};

// promise needs to be itself.
FileReader.prototype.buildPromise = function(fileName) {
	return new Promise((res, rej) => {
		fs.readFile(fileName, { encoding: 'utf-8' }, (err, data) => {
    	if(err) {
      	console.log(err);
        rej();
      }

      res(data);
  	});
	});
}


FileReader.prototype.readInputFile = async function(fileName) {
	var condi = this.validateFileName(fileName);
	
	if(condi == true) {
		var result = await this.buildPromise(fileName);
		return result;
	} else {
		// not valid file
	}

}


FileReader.prototype.validateFileName = function(fileName) {
	DEBUG && console.log('validate file name');

	var arr = fileName.split('/');	
	var len = arr.length;
	var lastFileName = arr[len-1];
	var arr1 = lastFileName.split('.');
	var ext = arr1[arr1.length-1];	 

	if(ext !== 'txt') {
		DEBUG && console.log('not txt file');
		return false;
	} else {
		DEBUG && console.log('it is txt file');
		return true;
	}

}

module.exports = FileReader;
