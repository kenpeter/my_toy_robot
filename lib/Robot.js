
var Robot = function() {
	this.isPlaced = false;
};

Robot.prototype.runInstructions = function(runInstructions) {
	DEBUG && console.log('robot runs');
	return this;
}

module.exports = Robot;
