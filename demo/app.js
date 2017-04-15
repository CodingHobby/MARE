const Mare = require('../src/mare')

window.addEventListener('load', () => {
	let canvas = new Mare.Canvas(600, 600)
	canvas.background(51)
	canvas.fill(255)
	canvas.stroke(255, 0, 255)
	canvas.rect(20, 20, 200, 200)
})