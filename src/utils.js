module.exports = {
	map: function (x, a, b, c, d) {
		return ((x - a) / (b - a) * (d - c) + c)
	},

	random: function (x) {
		if (typeof x == 'number') {
			return Math.random() * x
		} else if (x instanceof Array) {
			let i = Math.floor(Math.random() * (x.length - 1))
			return x[i]
		} else {
			throw new Error('Unsupported data type')
		}
	},
	toDegrees: function (radians) {
		return radians * (180 / Math.PI)
	},

	toRadians: function (degrees) {
		return degrees * (Math.PI / 180)
	}
}