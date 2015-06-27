/**
 * Copy files and folders.
 *
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Copies all directories and files, exept coffescript and less fiels, from the sails
 * assets folder into the .tmp/public directory.
 *
 * # build task config
 * Copies all directories nd files from the .tmp/public directory into a www directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function(grunt) {

	grunt.config.set('copy', {
		dev: {
			files: [{
				expand: true,
				cwd: './assets',
				src: ['**/*.!(coffee|less)'],
				dest: '.tmp/public'
			}]
		},
		build: {
			files: [{
				expand: true,
				cwd: '.tmp/public',
				src: ['**/*'],
				dest: 'www'
			}]
		},
		sg: {
			files: [
				// copy all html pages
				{
					expand: true,
					cwd: 'src/html',
					src: ['**'],
					dest: '<%= distRoot %>/html'
				},

				// copy all bootstrap fonts
				{
					expand: true,
					cwd: 'lib/bootstrap/fonts/',
					src: ['**'],
					dest: '<%= distRoot %>/fonts/'
				},

				// copy all fontawesome fonts
				{
					expand: true,
					cwd: 'lib/fontawesome/fonts/',
					src: ['**'],
					dest: '<%= distRoot %>/fonts/'
				},

				// copy all custom fonts
				{
					expand: true,
					cwd: 'src/fonts/',
					src: ['**'],
					dest: '<%= distRoot %>/fonts/'
				},

				// copy Angular for head
				{
					src: 'lib/angular/angular.min.js',
					dest: '<%= distPath %>angular.js'
				},

				// copy all img files too
				{
					expand: true,
					cwd: 'src/img',
					src: ['**'],
					dest: '<%= distRoot %>/img'
				},

				// copy favicon & apple-icon
				{
					expand: true,
					cwd: 'src/',
					src: ['favicon.ico', 'apple-touch-icon.png'],
					dest: '<%= distRoot %>/'
				}
			]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
};
