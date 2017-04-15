const Mare = {
	Canvas: class {
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

			this.fillColor = [255, 255, 255]
			this.strokeColor = [0, 0, 0]

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
		 * Change the canvas's fill color
		 * 
		 * @param {Number|Array} r - r parameter in rgb / color as rgb array ([r, g, b])
		 * @param {Number} [g=r] - g paramter in rgb
		 * @param {Number} [b=g] - b parameter in rgb
		 * 
		 * @return {Array[]} - the new fill color expressed as an rgb array ([r, ,g b])
		 */
		fill(r, g, b) {
			// This we need to avoid strange type conversions (i.e. 0 defaulting to r)
			// If g & b are undefined, it means the the color is being passed in as a grayscale value, so we want the 3 params to be equal
			let rp = r
			let gp = g != undefined ? g : rp
			let bp = b != undefined ? b : gp

			// Change fill color
			if (typeof r == "number") {
				this.ctx.fillStyle = `rgb(${rp}, ${gp}, ${bp})`
				this.fillColor = [rp, gp, bp]
			} else if (r instanceof Array) {
				this.ctx.fillStyle = `rgb(${rp[0]}, ${rp[1]}, ${rp[2]}`
				this.fillColor = [rp[0], rp[1], rp[2]]
			} else {
				throw new Error('Unsupported color format')
			}
			// return new fill color
			return this.fillColor
		}

		noFill() {
			this.ctx.fillStyle = this.rgb(this.bg)
		}

		noStroke() {
			this.ctx.strokeStyle = this.rgb(this.bg)
		}

		/**
		 * Change the canvas's stroke color
		 * 
		 * @param {Number|Array} r - r parameter in rgb / color as rgb array ([r, g, b])
		 * @param {Number} [g=r] - g paramter in rgb
		 * @param {Number} [b=g] - b parameter in rgb
		 * 
		 * @return {Array[]} - the new stroke color expressed as an rgb array ([r, ,g b])
		 */
		stroke(r, g, b) {
			// This we need to avoid strange type conversions (i.e. 0 defaulting to r)
			// If g & b are undefined, it means the the color is being passed in as a grayscale value, so we want the 3 params to be equal
			let rp = r
			let gp = g != undefined ? g : rp
			let bp = b != undefined ? b : gp

			// Change stroke color
			if (typeof r == "number") {
				this.ctx.strokeStyle = `rgb(${rp}, ${gp}, ${bp})`
				this.strokeColor = [rp, gp, bp]
			} else if (r instanceof Array) {
				this.ctx.strokeStyle = `rgb(${rp[0]}, ${rp[1]}, ${rp[2]}`
				this.strokeColor = [rp[0], rp[1], rp[2]]
			} else {
				throw new Error('Unsupported color format')
			}
			// return new stroke color
			return this.strokeColor
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

			// Clearing the canvas
			this.ctx.clearRect(0, 0, this.width, this.height)
			this.el.width = -1
			this.el.width = this.width

			// Change background
			if (typeof r == "number") {
				this.ctx.fillStyle = `rgb(${rp}, ${gp}, ${bp})`
				this.ctx.fillRect(0, 0, this.width, this.height)
				this.bg = [rp, gp, bp]
			} else if (r instanceof Array) {
				this.ctx.fillStyle = `rgb(${rp[0]}, ${rp[1]}, ${rp[2]}`
				this.ctx.fillRect(0, 0, this.width, this.height)
				this.bg = [rp[0], rp[1], rp[2]]
			} else {
				throw new Error('Unsupported color format')
			}

			this.ctx.fillStyle = this.rgb(this.fillColor)
			// Return the new background color
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


			this.ctx.rect(xpos, ypos, width, height)
			this.ctx.stroke()
			this.ctx.fill()
		}

		rgb(c) {
			return `${c[0], c[1], c[2]}`
		}

		/**
		 * Draws a triangle on the canvas
		 * 
		 * @param {Number} [x=canvasWidth/2] - x position of the first vertex
		 * @param {Number} [y=canvasHeight/2] - y position of the first vertex
		 * @param {Number} [w=100] - width of the triangle
		 * @param {Number} [h=w] - height of the triangle
		 */
		triangle(x, y, w, h) {
			let xpos = x !== undefined ? x : this.width / 2
			let ypos = y !== undefined ? y : this.height / 2
			let width = w !== undefined ? w : 100
			let height = h !== undefined ? h : width

			this.ctx.beginPath()
			this.ctx.moveTo(xpos, ypos)
			this.ctx.lineTo((xpos + width) / 2, ypos + height)
			this.ctx.lineTo(xpos + width, ypos)
			this.ctx.closePath()
			this.ctx.stroke()
			this.ctx.fill()
		}


		/**
		 * Draws an ellipse on the screen
		 * 
		 * @param {Number} [x=canvasWIdth/2] - x position of the center
		 * @param {Number} [y=canvasHeight/2] - y position of the center
		 * @param {Number} [rx=100] - x radius
		 * @param {Number} [ry=rx] - y radius
		 */
		ellipse(x, y, rx, ry) {
			let xpos = x !== undefined ? x : this.width / 2
			let ypos = y !== undefined ? y : this.height / 2
			let radiusX = rx !== undefined ? rx : 100
			let radiusY = ry !== undefined ? ry : radiusX

			this.ctx.beginPath()
			this.ctx.ellipse(xpos, ypos, radiusX, radiusY, 0, 0, 2 * Math.PI, false)
			this.ctx.stroke()
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
				if (points[0][0] && points[0][1]) this.ctx.moveTo(points[0][0], points[0][1])
				else throw new Error('Invalid starting point')
				for (var i = 1; i < points.length; i++) {
					if (points[i][0] && points[i][1]) this.ctx.lineTo(points[i][0], points[i][1])
					else throw new Error('Invalid point')
				}
				this.ctx.closePath()
				this.ctx.stroke()
				this.ctx.fill()
			}
		}
	}
}