const { Canvas } = require('./src/mare')

window.addEventListener('load', function () {
	let canvas = new Canvas(500, 500)
	canvas.background(51)

	canvas.shape([
		[20, 20],
		[120, 20],
		[120, 120],
		[20, 120]
	])
})