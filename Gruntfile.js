/*
 * grunt-sjrk-couch-config
 * https://github.com/BlueSlug/grunt-sjrk-couch-config
 *
 * Copyright (c) 2017 OCAD University
 */

'use strict';

    module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc',
                reporterOutput: ""
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['tmp']
        },

        // Configuration to be run (and then tested).
        sjrk_couch_config: {
            runDbSetup: {
                files: {
                    src: ['test/fixtures/dbSetup.js']
                }
            }
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/*_test.js']
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'sjrk_couch_config', 'nodeunit']);
    grunt.registerTask('run-without-test', ['sjrk_couch_config']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'run-without-test']);

};
