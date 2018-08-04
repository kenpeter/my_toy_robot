
var Robot = function() {
	this.isPlaced = false;
	this.x = null;
	this.y = null;
	this.direction = null;
	this.maxX = 4;
	this.maxY = 4;
	this.minX = 0;
	this.minY = 0;

	this.validDir = { 
		'north': true,
		'south': true,
		'west': true,
		'east': true
	};	


	this.moveMap = {
		north: {
			x: 0,
			y: 1
		},

		south: {
			x: 0,
			y: -1
		},

		west: {
			x: -1,
			y: 0
		},

		east: {
			x: 1,
			y: 0
		}	
	};	


	this.dirMap = {
    east: {
     	left: 'north', 
     	right: 'south' 
    },

    north: {
    	left: 'west',
			right: 'east'   
    },

    west: {
			left: 'south',
			right: 'north'
    },

    south: {
    	left: 'east',  
     	right: 'west'
    }
  };

};


Robot.prototype.move = function() {
	DEBUG && console.log('* move');

	if(!this.isPlaced) {
		DEBUG && console.log('no place, no move');
		return this;
	}

	var x = this.x;
	var y = this.y;
	var dir = this.direction;

	var move = this.moveMap[dir];
	DEBUG && console.log(move);
	
	x = x + move.x;
	y = y + move.y;

	if(x > this.maxX || x < this.minX) {
		return this;
	}				

	if(y > this.maxY || y < this.minY) { 
    return this;
  }

	// update
	this.x = x;
	this.y = y;	
}


Robot.prototype.place = function(item) {
	DEBUG && console.log('* place');

	var x = parseInt(item.x);
	var y = parseInt(item.y);
	var direction = item.direction;
	
	if(x > this.maxX || y > this.maxY) {
		console.log('out bound');
		return this;
	}

	if(x < 0 || y < 0) {
    console.log('out bound');
    return this;
  }	

	var condi = this.validDir[direction];
	if(condi === true) {
		
	} else {
		console.log('invalid direction');
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

	var x = this.x;
  var y = this.y;
  var dir = this.direction;

	dir = this.dirMap[dir]['left'];
	this.dir = dir;
}


Robot.prototype.right = function() {
  DEBUG && console.log('* right');
  
  if(!this.isPlaced) { 
    DEBUG && console.log('no place, no right');
    return this;
  }

	var x = this.x;
  var y = this.y;
  var dir = this.direction;

	dir = this.dirMap[dir]['right'];

	DEBUG && console.log('-- new dir --');
	DEBUG && console.log(dir);

  this.direction = dir;
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
