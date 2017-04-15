# MARE

MARE, which stands for **My Awesome Rendering Engine**, is, as the name suggests, a rendering engine, which uses the HTML canvas element.

It was made to be used with another project of mine: [My LIL CAT](https://www.github.com/codinghobby/my-lil-cat), which is a physics engine.

The library is written in ES6 and compiled through Webpack, so if you want to include just look in the `lib` folder and copy the `mare.js` in your libraries folder and add it to your index.html, or copy the source files and require them in your entry.

If you want to contribute it wuold be lovely, so don't hesitate to [contact me](mailto:caneparicorrado@outlook.it) or fork this repository!

Note that I have two different webpack configurations: one for when you want to build the demo app that is included, and one for when you want to update the library.

Run `npm run dev:app` to start building the app, and `npm run dev:lib` to just compile the library source.

## Usage

---

To install this library, run the command `npm install marejs` and, once that completes, you'll be able to require it in your code:

```javascript
const { Canvas } = require('marejs')
```

At this point you'll be able to create new canvases and draw onto them. Here is an example:

```javascript
const { Canvas } = require('marejs')

// Create a 600 by 600 px canvas
let canvas = new Canvas(600, 600)

// Set a background color
canvas.background(51)

// Draw a rectangle at the point (20, 20), and make it 100 by 100 px
canvas.rect(20, 20, 100, 100)
```

Check out the [wiki](https://www.github.com/codinghobby/mare/wiki) section of the github repo to learn how to use it!

Also, this package goes really well with another package, currently in development, which is [My lil' cat](https://www.github.com/codinghobby/my-lil-cat), which is a physics engine, which uses this as its renderer.