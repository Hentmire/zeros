module.exports = function getZerosCount(number) {
  var a = 0;
	for (var i = 1; number / Math.pow(5, i) >= 1; i++) {
		a += Math.floor( number / Math.pow(5, i) );
	}
	return a;
}
