(function() {
	'use strict';

	var masculine = /^(man)$/i;
	var feminine  = /^(woman)$/i;

	function heSheThey( gender ) {
		gender = Handlebars.escapeExpression( gender );
		return feminine.test( gender ) ? 'she' : masculine.test( gender ) ? 'he' : 'they';
	}


	Handlebars.registerHelper({
		they: heSheThey,
		 she: heSheThey,
		  he: heSheThey
	});

}());
