var path = require('path'),
	rootPath = path.resolve(__dirname + '../..'),
	title = 'Luis Córdoba - CV';

// -----------------------
// Expose config
// -----------------------

// title: título base para el sitio

module.exports = {
	development: {
		root: rootPath,
		publicdir: '/public',
		title: '[dev] ' + title,
		style: '/css/style.css',
		main: '/js/main.js',
		domain: '',
		db: 'mongodb://localhost/test'
	},
	staging: {
		root: rootPath,
		publicdir: '/public',
		title: title,
		style: '/css/style.css',
		main: '/js/main.js',
		domain: '',
		db: process.env.MONGOHQ_URL
	},
	production: {
		root: rootPath,
		publicdir: '/public',
		title: title,
		style: '/css/style.css',
		main: '/js/main.js',
		domain: '',
		db: process.env.MONGOHQ_URL
	}
};