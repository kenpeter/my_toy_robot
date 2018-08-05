
var MyParser = function() {};


MyParser.prototype.parseStrData = function(strData) {
	DEBUG && console.log('parse str data')

	console.log(strData);

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

	return buf; 
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
	var obj;	

	if(item == 'left' || item == 'move' || item == 'right' || item == 'report') { 
  	obj = {
    	cmd: item 
  	};
	} else {
		obj = null;
	}

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

	var obj;
	if(cmd == 'place') {
		obj = {
			cmd: cmd,
			x: x,
			y: y,
			direction: direction
		};
	} else {
		obj = null;	
	}

	return obj;
}


module.exports = MyParser;
