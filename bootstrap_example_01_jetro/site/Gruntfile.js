module.exports = function(grunt){
	
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	
	grunt.initConfig({
		
		less: {
			custom: {
				options: {
					strictMath: false
				},
				src: 'less/custom/custom.less',
				dest: 'dist/css/custom.css'
			},
			bootstrap: {
				options: {
					strictMath: true
				},
				src: 'less/bootstrap.less',
				dest: 'dist/css/bootstrap.css'
			
			}
		},
		watch: {
			less_custom : {
				files: ['less/custom/*.less'],
				tasks: 'less:custom',
				options:{
					spawn: true,
					livereload: true
				}
			},
			less_bootstrap: {
				files: ['less/**/*.less', '!less/custom/**/*.less'],
				tasks: 'less:bootstrap',
				options:{
					spawn: true
				}
			},
			distribution : {
				files: ['dist/**/*.html', 'dist/**/*.js'],
				options: {
					livereload: true
				}
			}
			
		}
	
	})
	
	grunt.registerTask('default', ['less', 'watch']);
	
	
	
}