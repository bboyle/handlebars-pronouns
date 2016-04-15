(function() {
	'use strict';

	var MASCULINE_GENDER = /^(man|male|father|son|brother|nephew|uncle|husband|boy|boyfriend|him|his|he)$/i;
	var FEMININE_GENDER  = /^(woman|female|mother|daughter|sister|neice|aunt|wife|girl|girlfriend|her|she)$/i;

	function genderPronoun( gender, feminine, masculine, generic ) {
		return FEMININE_GENDER.test( gender ) ? feminine : MASCULINE_GENDER.test( gender ) ? masculine : generic;
	}

	function titleCase( word ) {
		return word.charAt(0).toUpperCase() + word.slice(1);
	}

	function genderPronounHelperFactory( feminine, masculine, generic, unique ) {
		var f = function( gender ) {
			return genderPronoun( Handlebars.escapeExpression( gender ), feminine, masculine, generic );
		};

		Handlebars.registerHelper( generic,   f );
		Handlebars.registerHelper( masculine, f );
		if ( unique ) {
			Handlebars.registerHelper( feminine,  f );
		} else {
			Handlebars.registerHelper( feminine + masculine,  f );
			Handlebars.registerHelper( masculine + feminine,  f );
		}
	}

	function genderPronounFactory( feminine, masculine, generic, unique ) {
		genderPronounHelperFactory( feminine.toLowerCase(), masculine.toLowerCase(), generic.toLowerCase(), unique );
		genderPronounHelperFactory( titleCase( feminine ),  titleCase( masculine ),  titleCase( generic ),  unique );
	}

	genderPronounFactory( 'she', 'he',  'they',  true );
	genderPronounFactory( 'her', 'his', 'their', false );
	genderPronounFactory( 'her', 'him', 'them',  false );

}());
