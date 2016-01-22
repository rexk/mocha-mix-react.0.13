var MochaMix = require('mocha-mix');
var MockeryPlugin = require('mocha-mix-mockery');
var JsdomPlugin = require('mocha-mix-jsdom');

var babelRegister = require('babel-register');
babelRegister();
MochaMix.use(JsdomPlugin());
MochaMix.use(MockeryPlugin());
