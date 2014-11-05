module.exports = function(grunt) {

	//Add concat
	grunt.loadNpmTasks('grunt-contrib-concat')

	//Add watch
	grunt.loadNpmTasks('grunt-contrib-watch')

	//Add cssmin
	grunt.loadNpmTasks('grunt-contrib-cssmin')

	//Define src
	var jsSrc = ['src/js/memogame.js']
	var jsBuild = 'build/main.js'

  // Configuration of Grunt
  grunt.initConfig({

  	//configuration of concat
  	concat: {
  		options:{
  			separator : ';',
  		},
  		compile: {
  			src: jsSrc,
  			dest: jsBuild
  		}
  	},

  	//configuration of uglify
  	uglify: {
      options: {
        separator: ';'
      },
      compile: {
  			src: jsSrc,
  			dest: jsBuild
  		}
    },

    // configuration of watch
    watch: {
      scripts: {
        files: 'src/js/*.js',
        tasks: ['union']
      }
    },

    //configuration of cssmin
    cssmin: {
  		minify: {
    		expand: true,
    		cwd: 'src/css/',
    		src: ['*.css', '!*.min.css'],
    		dest: 'build/',
    		ext: '.min.css'
  		}
	}
  })
  
  // Définition des tâches Grunt
  grunt.registerTask('default', ['union', 'watch'])
  grunt.registerTask('union', ['concat:dist'])
  grunt.registerTask('compress', ['uglify:dist'])

}