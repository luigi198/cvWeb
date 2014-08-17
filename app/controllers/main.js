'use strict';
// -----------------------
// Variables
// -----------------------

var env = process.env.NODE_ENV || 'development',
	config = require('../../config/config')[env];

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
		res.render('partials/home');
	} else {
		renderHome(res);
	}
};