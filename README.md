# [postcss][postcss]-placehold [![Build Status](https://travis-ci.org/awayken/postcss-placehold.svg?branch=master)][ci] [![NPM version](https://badge.fury.io/js/postcss-placehold.svg)][npm] [![Dependency Status](https://gemnasium.com/awayken/postcss-placehold.svg)][deps]

> PostCSS plugin that makes it easy to drop in placeholder images.

## Install

With [npm](https://npmjs.org/package/postcss-placehold) do:

```
npm install postcss-placehold --save
```

## Example

### Input

```css
h1 {
    color: red;
}
```

### Output

```css
h1{color:red}
```

## API

### placehold([options])

#### options

##### foo

Type: `boolean`
Default: `true`

Description of what it does. An example:

```js
var css = 'h1 { color: red }';
console.log(postcss([ require('postcss-placehold')({foo: true}) ]).process(css).css);

// => 'h1{color:red}'
```

## Usage

See the [PostCSS documentation](https://github.com/postcss/postcss#usage) for
examples for your environment.

## Contributing

Pull requests are welcome. If you add functionality, then please add unit tests
to cover it.

## License

MIT © [Miles Rausch](https://github.com/awayken/postcss-placehold)

[ci]:      https://travis-ci.org/awayken/postcss-placehold
[deps]:    https://gemnasium.com/awayken/postcss-placehold
[npm]:     http://badge.fury.io/js/postcss-placehold
[postcss]: https://github.com/postcss/postcss
