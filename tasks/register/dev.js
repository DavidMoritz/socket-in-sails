module.exports = function (grunt) {
	grunt.registerTask('dev', [
		'jade',
		'less:sg',
		'copy:sg',
		'pleeease:dev',
		'concat:dev',
		'jshint',
		'jscs'
	]);
};
