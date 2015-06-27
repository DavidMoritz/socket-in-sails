module.exports = function (grunt) {
	grunt.registerTask('prods', [
		'jade',
		'less:prod',
		'copy:sg',
		'pleeease:prod',
		'concat:dev',
		'uglify:prod'
	]);
};
