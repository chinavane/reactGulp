(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var ReactDOM = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);
var HeaderComponent = require('./HeaderComponent.js');
var ListComponent = require('./ListComponent.js');
var FooterComponent = require('./FooterComponent.js');

var LayoutComponent = React.createClass({
	displayName: 'LayoutComponent',

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'header',
				null,
				React.createElement(HeaderComponent, null)
			),
			React.createElement(
				'section',
				null,
				React.createElement(ListComponent, null)
			),
			React.createElement(
				'footer',
				null,
				React.createElement(FooterComponent, null)
			)
		);
	}
});

ReactDOM.render(React.createElement(LayoutComponent, null), document.getElementById('app'));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./FooterComponent.js":2,"./HeaderComponent.js":3,"./ListComponent.js":4}],2:[function(require,module,exports){
(function (global){
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var FooterComponent = React.createClass({
	displayName: 'FooterComponent',

	render: function render() {
		return React.createElement(
			'div',
			null,
			'\u8FD9\u91CC\u662FFooter'
		);
	}
});

module.exports = FooterComponent;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(require,module,exports){
(function (global){
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var HeaderComponent = React.createClass({
	displayName: 'HeaderComponent',

	render: function render() {
		return React.createElement(
			'div',
			null,
			'\u8FD9\u91CC\u662FHeader'
		);
	}
});

module.exports = HeaderComponent;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],4:[function(require,module,exports){
(function (global){
'use strict';

var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var ListComponent = React.createClass({
	displayName: 'ListComponent',

	render: function render() {
		return React.createElement(
			'div',
			null,
			'\u8FD9\u91CC\u662FList'
		);
	}
});

module.exports = ListComponent;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
