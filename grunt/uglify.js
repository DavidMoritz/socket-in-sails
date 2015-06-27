/**
 * concat and minify scripts
 */
module.exports = function exportUglify(grunt) {
	grunt.config.set('sg-uglify', {
		prod: {
			options: {
				banner: '<%= banner %>',
			},
			files: {
				'<%= distPath %>main.js': '<%= distPath %>main.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
};
