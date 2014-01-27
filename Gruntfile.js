'use strict';

module.exports = function (grunt) {
	grunt.initConfig({
		connect: {
			server: {
				options: {
					port: 3000,
					base: ".",
					hostname: "*"
				}
			}
		},
		watch: {
			all: {
				options: {
					livereload: true
				},
				files: ['index.html', 'swig.js']
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('develop', ['connect', 'watch']);
};

