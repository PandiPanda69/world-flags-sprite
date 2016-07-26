/*global module:false*/
module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-recess');

    // Project configuration.
    grunt.initConfig({
        recess: {
            dist: {
                options: {
                    compile: true,
                    compress: true
                },
                files: {
                    'css/flags.css': ['less/flags.less']
                }
            }
        }
    });

    // Default task.
    grunt.registerTask('default', ['recess:dist']);
};
