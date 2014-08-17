'use strict';
// -----------------------
// Variables
// -----------------------

var env = process.env.NODE_ENV || 'development',
	config = require('../../config/config')[env];


// Dependencias

// var data = require('../../config/data')

// -----------------------
// Controller Actions
// -----------------------

//
// Data
//
exports.helloworld = function(req, res) {
	console.log(env, config);
	console.log(req);
	res.json({
		msg: 'Hello World'
	});
};