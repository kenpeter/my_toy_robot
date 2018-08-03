
var Robot = function() {
	this.isPlaced = false;
};

Robot.prototype.runInstructions = function(runInstructions) {
	console.log('run');
	return this;
}

module.exports = Robot;
