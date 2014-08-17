/* global define */

define(['jquery', 'nitram'],
	function($, nitram) {
		'use strict';

		// -----------------------------------------------------------------------
		// HOME
		// -----------------------------------------------------------------------

		nitram.homeController = function(route, data) {
			nitram.compile($('#mainView').html(data));
		};
	});