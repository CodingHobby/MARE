module.exports = class Canvas {
	/**
	 * Creates an instance of the Canvas object 
	 *
	 * @param {Number} [w=400] - width of the canvas
	 * @param {Number} [h=w] - height of the canvas
	 * @param {Number} [opts] - additional options
	 */
	constructor(w, h, opts) {
		// Although it looks a bit redundant, it's to avoid weird stuff JS would do if the value were 0
		this.width = w !== undefined ? w : 400
		this.height = h !== undefined ? h : this.width

		// All operations which require config
		if (opts) {
			this.bg = opts.bg || [0, 0, 0]
		} else {
			this.bg = [0, 0, 0]
		}

		// This will avoid strange errors during testing
		if (document) {
			this.el = document.createElement('CANVAS')
			this.ctx = this.el.getContext('2d')

			// NOTE if w and h were set as CSS attributes the canvas would just be stretched
			this.el.setAttribute('width', this.width)
			this.el.setAttribute('height', this.height)

			this.el.style.background = this.background(this.bg)

			document.body.appendChild(this.el)
		} else {
			throw new Error('No document')
		}
	}

	/**
	 * sets the element's background and updates class variables
	 * 
	 * @param {Number|Array} r - r parameter in rgb / color as rgb array ([r, g, b])
	 * @param {Number} [g=r] - g parameter in rgb
	 * @param {Number} [b=g] - b parameter in rgb
	 * 
	 * @return {Number[]} - the new bg color expressed as an rgb array ([r, g, b])
	 */
	background(r, g, b) {
		// This we need to avoid strange type conversions (i.e. 0 defaulting to r)
		// If g & b are undefined, it means the the color is being passed in as a grayscale value, so we want the 3 params to be equal
		let rp = r
		let gp = g != undefined ? g : rp
		let bp = b != undefined ? b : gp

		// Change background
		if (typeof r == "number") {
			this.el.style.background = `rgb(${rp}, ${gp}, ${bp})`
			this.bg = [rp, gp, bp]
		} else if (r instanceof Array) {
			this.el.style.background = `rgb(${rp[0]}, ${rp[1]}, ${rp[2]}`
			this.bg = [rp[0], rp[1], rp[2]]
		} else {
			throw new Error('Unsupported color format')
		}
		// Set this.background to the newly set background
		return this.bg
	}


	/**
	 * Function to draw a rectangle
	 * 
	 * @param {Number} [x=this.width/2] - x position 
	 * @param {Number} [y=this.height/2] - y position
	 * @param {Number} [w=100] - width
	 * @param {Number} [h=w] - height
	 */
	rect(x, y, w, h) {
		let xpos = x !== undefined ? x : this.width / 2
		let ypos = y !== undefined ? y : this.height / 2
		let width = w !== undefined ? w : 100
		let height = h !== undefined ? h : width

		this.ctx.fillStyle = '#FFFFFF'
		this.ctx.rect(xpos, ypos, width, height)
		this.ctx.fill()
	}

	/**
	 * Creates a path on the canvas based on an array of points
	 * 
	 * @param {Array[]} points - an array of order pairs representing points on a plane
	 * 
	 */
	shape(points) {
		// Verify that the arg is a valid point array
		if (points && points.length >= 3) {
			this.ctx.beginPath()
			if(points[0][0] && points[0][1]) this.ctx.moveTo(points[0][0], points[0][1])
			else throw new Error('Invalid starting point')
			for(var i = 1; i < points.length; i++) {
				if(points[i][0] && points[i][1]) this.ctx.lineTo(points[i][0], points[i][1])
				else throw new Error('Invalid point')
			}
			this.ctx.fillStyle = "#FFFFFF"
			this.ctx.fill()
		}
	}
}