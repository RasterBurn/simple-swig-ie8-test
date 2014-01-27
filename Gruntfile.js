'use strict';

module.exports = function (grunt) {
	grunt.initConfig({
		connect: {
			server: {
				options: {
					port: 3000,
					base: "."
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-connect');
};

