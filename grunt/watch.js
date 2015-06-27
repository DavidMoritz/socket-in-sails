module.exports = function exportWatch(grunt) {
	grunt.config.set('sg-watch', {
		dev: {
			files: [
				'src/**/*.*'
			],
			tasks: [
				'dev'
			]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
};
