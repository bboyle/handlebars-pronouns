(function() {
	'use strict';

	var MASCULINE_GENDER = /^(man|male|father|son|brother|nephew|uncle|husband|boy|him|his|he)$/i;
	var FEMININE_GENDER  = /^(woman|female|mother|daughter|sister|neice|aunt|wife|girl|her|she)$/i;

	function genderPronoun( gender, feminine, masculine, generic ) {
		return FEMININE_GENDER.test( gender ) ? feminine : MASCULINE_GENDER.test( gender ) ? masculine : generic;
	}

	function titleCase( word ) {
		return word.charAt(0).toUpperCase() + word.slice(1);
	}

	function genderPronounHelperFactory( feminine, masculine, generic ) {
		var f = function( gender ) {
			return genderPronoun( Handlebars.escapeExpression( gender ), feminine, masculine, generic );
		};

		Handlebars.registerHelper( feminine,  f );
		Handlebars.registerHelper( masculine, f );
		Handlebars.registerHelper( generic,   f );
	}

	function genderPronounFactory( feminine, masculine, generic ) {
		genderPronounHelperFactory( feminine.toLowerCase(), masculine.toLowerCase(), generic.toLowerCase() );
		genderPronounHelperFactory( titleCase( feminine ),  titleCase( masculine ),  titleCase( generic ));
	}

	genderPronounFactory( 'she', 'he', 'they' );

}());
