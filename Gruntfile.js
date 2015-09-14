/*jshint ignore:start*/
module.exports = function(grunt) {

	// Load the plugin that provides the "notify" task.
	grunt.loadNpmTasks('grunt-notify');

	// Load the plugin that provides the "watch" task.
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Load the plugin that provides the "less" task.
	grunt.loadNpmTasks('grunt-contrib-less');

	// Load the plugin that provides the "copy" task.
	grunt.loadNpmTasks('grunt-contrib-copy');

	// Load the plugin that provides the "connect" task.
	grunt.loadNpmTasks('grunt-contrib-connect');

	// Load the plugin that provides the "jshint" task.
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// Load the plugin that provides the "bower" task.
	grunt.loadNpmTasks('grunt-bower-task');

	// Load the plugin that provides the "jscpd" task.
	grunt.loadNpmTasks('grunt-jscpd');

	// Load the plugin that provides the "clean" task.
	grunt.loadNpmTasks('grunt-contrib-clean');

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Load the plugin that provides the "cssmin" task.
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		cssmin: {
			combine: {
				files: {
					'css/styles.min.css': ['css/styles.css'],
				},
			},
		},
		jscpd: {
			javascripts: {
				path: 'js/',
			},
		},
		uglify: {
			functions: {
				files: {
					'js/functions.min.js': ['js/functions.js'],
				},
			},
		},
		watch: {
			css: {
				files: ['css/styles.css'],
				tasks: ['cssmin'],
			},
			less: {
				files: ['less/**/*.less'],
				tasks: ['less:development'],
			},
		},
		less: {
			development: {
				options: {
					paths: ['css']
				},
				files: {
					'css/styles.css': 'less/styles.less'
				}
			},
		},
		bower: {
			install: {
				options: {
				},
			}
		},
	});

grunt.registerTask('default', [ 'bower:install', 'less:development', 'watch']);
grunt.registerTask('build', ['bower:install', 'less:development', 'uglify', 'cssmin']);

};
/*jshint ignore:end*/
