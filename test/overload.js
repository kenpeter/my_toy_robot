function testArg(err, cb) {
	console.log('works');
}

var cb = function() {

}

testArg(null, cb);

testArg('err');
