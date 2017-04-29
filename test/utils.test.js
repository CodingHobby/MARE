const utils = require('../src/utils.js')

describe('Map', function () {
	it('Maps a range of values to another', function () {
		const x = 2
		let y = utils.map(2, 1, 2, 1, 4)

		expect(y).toEqual(4)
	})
})

describe('Random', function () {
	it('Throws if it is passed a String or Object', function () {
		expect(function () {
			utils.random('Stuff')
		}).toThrow()
		expect(function () {
			utils.random({ x: 2, y: 3 })
		}).toThrow()
	})

	it('Picks random elements from arrays', function () {
		const ns = [1, 3, 7]
		const r = utils.random(ns)
		console.log(r)
		expect(ns.indexOf(r)).not.toEqual(-1)
	})
})

describe('Angle operations', function () {
	describe('To degrees', function () {
		it('Converts a number from radians to degrees', function () {
			const radians = Math.PI
			expect(utils.toDegrees(radians)).toEqual(180)
		})
	})

	describe('To radians', function() {
		it('Converts a number from degrees to radians', function() {
			const degrees = 180
			expect(utils.toRadians(degrees)).toEqual(Math.PI)
		})
	})
})