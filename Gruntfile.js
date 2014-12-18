// Project configuration.

'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
  uglify: {
    my_target: {
      files: {
        'jquery.colorbox.min.js': ['jquery.colorbox.js']
      }
    }
  }
});

  grunt.loadNpmTasks('grunt-contrib-uglify');
  

  // By default, lint and run all tests.
  grunt.registerTask('default', ['uglify']);

};