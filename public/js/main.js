/* global DBG*/
require.config({
	baseUrl: '/js',
	paths: {
		'jquery': 'lib/jquery-1.11.0.min',
		'history': 'lib/native.history',
		'nitram': 'lib/nitram.min',
		'controllers': 'controllers',
		'routes': 'routes'
	},
	shim: {
		'history': {
			deps: ['jquery']
		}
	}
});

// uglify elimina el codigo inaccesable
window.DBG = (typeof DBG === 'undefined') ? true : DBG;

// Avoid `console` errors in browsers that lack a console.
(function() {
	'use strict';
	var method;
	var noop = function() {};
	var methods = [
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}
}());

require(['jquery', 'nitram', 'history', 'controllers', 'routes'],
	function($, nitram) {

		'use strict';

		$(document).ready(function() {
			if (DBG) console.log('Ready!');
			nitram.init();

			// debug exports
			if (DBG) {
				window.APPGLOBALS = {
					nitram: nitram
				};
			}
		});

	});