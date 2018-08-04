
var MyParser = function() {};


MyParser.prototype.parseArgs = function(strData, cb) {

	/*
PLACE 0,0,NORTH
MOVE
REPORT
	*/

	this.parseStrData(strData, function(){

	});	

	// robot runs with data
	cb(null, strData); 
}


MyParser.prototype.parseStrData = function(strData, cb) {
	var arr = strData.split('\n').map(function(item){
		return item.toLowerCase();
	});

	// this needs scope
	buf = [];
	arr.forEach(function(item){
		var cmdObj;
		if(this.isPlaceCmd(item)) {
			cmdObj = this.parsePlaceCmd(item);	
		} else {
			// single word cmd
			cmdObj = this.parseSingleCmd(item);	
		}
		buf.push(cmdObj);	

	}.bind(this)); 

	DEBUG && console.log(buf);

	// 
	cb(null, null);
}


MyParser.prototype.isPlaceCmd = function(item) {
	var arr = item.split(' ');
	if (arr[0] == 'place') {
		return true;
	} else {
		return false;
	}
}


MyParser.prototype.parseSingleCmd = function(item) {
  // left, move, right 
  var obj = {
    cmd: item 
  };

  return obj;
}


MyParser.prototype.parsePlaceCmd = function(item) {
	// place 0,0,north
	var arr = item.split(' ');		
	var cmd = arr[0];
	var param = arr[1];
	param = param.split(','); 
	var x = param[0];
	var y = param[1];
	var direction = param[2];

	var obj = {
		cmd: cmd,
		x: x,
		y: y,
		direction: direction
	};

	return obj;
}


module.exports = MyParser;
