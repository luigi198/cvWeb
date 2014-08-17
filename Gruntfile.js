module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			options: {
				ignores: [],
				jshintrc: true
			},
			all: [
				'public/js/**/*.js',
				'!public/js/lib/**/*.js',
				'app/**/*.js',
				'config/**/*.js',
				'lib/**/*.js',
				'server.js'
			]
		},
		compass: {
			options: {
				basePath: 'public',
				sassDir: 'sass',
				cssDir: 'css',
				imagesDir: 'img',
				javascriptDir: 'js',
				fontsDir: 'fonts',
				relativeAssets: true
			},
			dev: {
				options: {
					outputStyle: 'expanded'
				}
			},
			production: {
				options: {
					outputStyle: 'compressed'
				}
			}
		},
		requirejs: {
			production: {
				options: {
					appDir: 'public',
					baseUrl: 'js',
					dir: 'public-build',
					mainConfigFile: 'public/js/common.js',
					modules: [{
						name: 'common'
					}, {
						name: 'main',
						exclude: ['common']
					}],
					locale: '<%= pkg.locale %>',
					optimizeCss: 'standard',
					skipDirOptimize: true,
					removeCombined: true,
					uglify: {
						defines: {
							DBG: ['name', 'false']
						}
					}
				}
			}
		},
		watch: {
			compass: {
				files: ['public/sass/**/*.scss'],
				tasks: ['compass:dev']
			},
			jshint: {
				files: ['<%= jshint.all %>'],
				tasks: ['jshint']
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('build', ['jshint', 'compass:production', 'requirejs']);

};