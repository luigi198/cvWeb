/* global define */

define(['jquery', 'nitram'],
	function($, nitram) {
		'use strict';

		// -----------------------------------------------------------------------
		// HOME
		// -----------------------------------------------------------------------

		nitram.homeController = function(route, data) {
			nitram.compile($('#mainView').html(data));
			console.log('home: ', data);

			var typePersonalFinish = true;

			$('#personalInfoTyped').mouseover(function() {
				var $element = $(this);
				if (typePersonalFinish) {
					typePersonalFinish = false;
					$element.empty();
					$element.typed({
						strings: ['First sentence.', 'Second sentence.', 'Third\nwuuuut'],
						typeSpeed: 0,
						callback: function() {
							typePersonalFinish = true;
						}
					});
				}
			});
		};
	});