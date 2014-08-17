'use strict';
// -----------------------
// Variables
// -----------------------

var env = process.env.NODE_ENV || 'development',
	config = require('../../config/config')[env],
	resJSON = require('../utils/resJSON');

// -----------------------
// Controller Actions
// -----------------------

//
// Basic
//
var renderHome = function(res) {
	res.render('home', {
		config: config
	});
};


//
// Home
//
exports.home = function(req, res) {
	if (env === 'development') console.log(env);
	if (req.xhr) {
		console.log('xhr');
		res.render('partials/home', function(err, html) {
			if (err) {
				res.json(resJSON.error(err));
			} else {
				console.log('html en serv: ', html);
				res.json(resJSON.ok({
					html: html
				}));
			}
		});
	} else {
		renderHome(res);
	}
};