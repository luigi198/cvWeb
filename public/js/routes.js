/* global define */

define(['jquery', 'nitram'], function($, nitram) {
	'use strict';

	nitram.routes = {
		'/': {
			controller: 'homeController',
			title: 'Luis Córdoba - CV',
			req: false,
			bodyClass: 'body-home'
		}
	};

});