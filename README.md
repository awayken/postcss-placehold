# postcss-placehold [![Build Status](https://travis-ci.org/awayken/postcss-placehold.svg?branch=master)][ci] [![NPM version](https://badge.fury.io/js/postcss-placehold.svg)][npm]

> [PostCSS] plugin that makes it easy to drop in placeholder images.

## Install

With [npm](https://npmjs.org/package/postcss-placehold) do:

```
npm install postcss-placehold --save
```

## Example

### Input

```css
h1 {
    background: placehold(400, 400);
}
```

### Output

```css
h1 {
    background: url("https://placehold.it/400x400");
}
```

## Options

### options.service

Type: `string`
Default: `placeholdit`

Define which placeholder service to use for your images.

Supported services:

  * [placehold.it](https://placehold.it)
  * [placekitten](https://placekitten.com)
  * [placekittengray](https://placekitten.com)
  * [dummyimage](https://dummyimage.com)

Also you can use custom service.

## Usage

See the [PostCSS documentation](https://github.com/postcss/postcss#usage) for
examples for your environment.

## Contributing

Pull requests are welcome. If you add functionality, then please add unit tests
to cover it.

## License

MIT © [Miles Rausch](https://github.com/awayken/postcss-placehold)

[ci]:      https://travis-ci.org/awayken/postcss-placehold
[npm]:     http://badge.fury.io/js/postcss-placehold
[postcss]: https://github.com/postcss/postcss
