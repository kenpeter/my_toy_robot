
var Robot = function() {
	this.isPlaced = false;
	this.x = null;
	this.y = null;
	this.direction = null;
	this.maxX = 4;
	this.maxY = 4;	
};


Robot.prototype.move = function() {
	DEBUG && console.log('* move');

	if(!this.isPlaced) {
		DEBUG && console.log('no place, no move');
		return this;
	}

}


Robot.prototype.place = function(item) {
	DEBUG && console.log('* place');

	var x = item.x;
	var y = item.y;
	var direction = item.direction;
	
	if(x > this.maxX || y > this.maxY) {
		console.log('out bound');
		return this;
	}

	if(x < 0 || y < 0) {
    console.log('out bound');
    return this;
  }	

	this.isPlaced = true;	
	this.x = x;
	this.y = y;
	this.direction = direction;	
}


Robot.prototype.left = function() {
	DEBUG && console.log('* left');

  if(!this.isPlaced) { 
    DEBUG && console.log('no place, no left');
    return this;
  }

}


Robot.prototype.right = function() {
  DEBUG && console.log('* right');
  
  if(!this.isPlaced) { 
    DEBUG && console.log('no place, no right');
    return this;
  }

}


Robot.prototype.report = function() {
	DEBUG && console.log('* report');

  if(!this.isPlaced) { 
    DEBUG && console.log('no place, no report');
    return this;
  }

	var out = [this.x, this.y, this.direction.toUpperCase()].join(',');
	console.log(out);
}


Robot.prototype.runInstructions = function(cmdArr) {
	DEBUG && console.log('* run cmd');
	DEBUG && console.log(cmdArr);

	for(var i=0; i<cmdArr.length; i++) {
		var cmdItem = cmdArr[i];
		if(cmdItem == null) {

		} else {
			var cmd = cmdItem.cmd;
			if(cmd == 'move') {
				this.move();
			} else if(cmd == 'place')	{
				this.place(cmdItem);
			} else if(cmd == 'left') {
				this.left();
			} else if(cmd == 'right') {
				this.right();	
			} else if(cmd == 'report') {
				this.report();
			} else {
				console.log('unknown cmd: ' + cmd);
			}
		}
	}	

	return this;
}

module.exports = Robot;
