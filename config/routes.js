'use strict';
// -----------------------
// Variables
// -----------------------

// controllers
var main = require('../app/controllers/main'),
	api = require('../app/controllers/api');

// -----------------------
// Expose
// -----------------------

module.exports = function(app) {

	// main
	app.get('/', main.home);

	//
	// API
	//
	app.get('/api/helloworld', api.helloworld);
};