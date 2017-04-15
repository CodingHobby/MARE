let { Canvas } = require('../src/mare')

window.addEventListener('load', () => {
	let canvas = new Canvas(600, 600)
	canvas.background(51)

	let x = 20,
		y = 20
	setInterval(function () {
		canvas.background(51)

		canvas.fill(255)
		canvas.ellipse(x, y, 10, 10)
		x += 5
	}, 1000 / 30)
})