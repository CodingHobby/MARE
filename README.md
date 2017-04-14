# MARE

MARE, which stands for **My Awesome Rendering Engine**, is, as the name suggests, a rendering engine, which uses the HTML canvas element.

It was made to be used with another project of mine: [My LIL CAT](https://www.github.com/codinghobby/my-lil-cat), which is a physics engine.

The library is written in ES6 and compiled through Webpack, so if you want to include just look in the `lib` folder and copy the `mare.js` in your libraries folder and add it to your index.html, or copy the source files and require them in your entry.

If you want to contribute it wuold be lovely, so don't hesitate to [contact me](mailto:caneparicorrado@outlook.it) or fork this repository!

Note that I have two different webpack configurations: one for when you want to build the demo app that is included, and one for when you want to update the library.

Run `npm run dev:app` to start building the app, and `npm run dev:lib` to just compile the library source.