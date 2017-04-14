const { Canvas } = require('./src/mare')

window.addEventListener('load', function () {
	let canvas = new Canvas(500, 500)
	canvas.ellipse()
})