"use strict";var _createClass = (function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};})();Object.defineProperty(exports, "__esModule", { value: true });exports.default = 










































function (src, dest) {
    var styles = new Styles(src, dest);
    return styles.compile();};var _gulp = require("gulp");var _gulp2 = _interopRequireDefault(_gulp);var _lost = require("lost");var _lost2 = _interopRequireDefault(_lost);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var $ = require("gulp-load-plugins")();var Styles = (function () {function Styles(src, dest) {_classCallCheck(this, Styles);this.src = src;this.dest = dest;this.autoprefixer = ['ie >= 10', 'ie_mob >= 10', 'ff >= 30', 'chrome >= 34', 'safari >= 7', 'opera >= 23', 'ios >= 7', 'android >= 4.4', 'bb >= 10'];this.postcssPlugins = [(0, _lost2.default)()];}_createClass(Styles, [{ key: "compile", value: function compile() {return _gulp2.default.src(this.src).pipe($.changed(this.dest, { extension: '.css' })).pipe($.stylus()).pipe($.autoprefixer(this.autoprefixer)).pipe($.postcss(this.postcssPlugins)).pipe(_gulp2.default.dest(this.dest)).pipe($.size({ title: "Styles were compiled!" })).pipe($.livereload());} }]);return Styles;})();
