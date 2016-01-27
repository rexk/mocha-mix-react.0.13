# mocha-mix-react.0.13

MochaMix plugin which provides default MockGenerator for unit testing.
Uses react@0.13.x for those who wants to test legacy react versions.

## Install

```bash
npm install mocha-mix mocha-mix-react --save
```

## Usage

```js
var MochaMix = require('mocha-mix');
var ReactPlugin = require('mocha-mix-react.0.13');

MochaMix.use(ReactPlugin);

...

```
