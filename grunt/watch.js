module.exports = function exportWatch(grunt) {
	grunt.config.set('sg-watch', {
		src: {
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
