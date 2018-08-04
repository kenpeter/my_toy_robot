var expect = require('chai').expect;
var sinon = require('sinon');
var Robot = require('../lib/Robot');

var robot = new Robot();

global.DEBUG = true;

describe('Robot test', function() {


	it('should place a robot correctly on valid point on the table', function() {

    robot = robot.place({x: 0, y: 1, direction: 'north'});

    expect(robot.isPlaced).to.be.true;
    expect(robot.x).to.equal(0);
		expect(robot.y).to.equal(1);
    expect(robot.direction).to.equal('north');
  });	

});
