module.exports = function(grunt) {
	grunt.config.set('jscs', {
		src: ['src/**/*.js',
			'!src/external/**/*'],
		options: {
			config: '.jscsrc'
		}
	});

	grunt.loadNpmTasks('grunt-jscs');
};