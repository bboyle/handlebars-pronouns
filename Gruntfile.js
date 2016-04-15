'use strict';

module.exports = function( grunt ) {

	// Project configuration.
	grunt.initConfig({
		// Metadata.
		pkg: grunt.file.readJSON( 'package.json' ),
		banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
			'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
			'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
			'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
			' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
		// Task configuration.

		// lint
		eslint: {
			src: [ 'src/*.js' ],
			test: [ 'test/*.js' ],
			build: [ '*.js' ]
		},

		// tests
		jasmine: {
			src : 'src/**/*.js',
			options : {
				vendor: 'node_modules/handlebars/dist/handlebars.js',
				specs : 'test/*.spec.js'
			}
		},

		// auto
		watch: {
			test: {
				files: [
					'test/*.spec.js'
				],
				tasks: [ 'eslint:test', 'jasmine' ]
			},
			src: {
				files: 'src/*.js',
				tasks: [ 'eslint:src', 'jasmine' ]
			},
			build: {
				files: '<%= eslint.build %>',
				tasks: [ 'eslint:build' ]
			}
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks( 'grunt-eslint' );
	grunt.loadNpmTasks( 'grunt-contrib-jasmine' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );

	// Default task.
	grunt.registerTask( 'build', [ 'eslint:build' ]);
	grunt.registerTask( 'dev', [ 'build', 'watch' ]);
	grunt.registerTask( 'test', [ 'eslint', 'jasmine' ]);
	grunt.registerTask( 'default', [ 'dev' ]);

};
