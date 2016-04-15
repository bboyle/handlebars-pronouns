'use strict';

function testHeSheThey( alias ) {
	return function() {
		var template = Handlebars.compile( '{{' + alias + ' gender}}' );
		var Template = Handlebars.compile( '{{' + alias.charAt(0).toUpperCase() + alias.slice(1) + ' gender}}' );

		it( 'should be "they"', function() {
			expect( template() ).toBe( 'they' );
			expect( Template() ).toBe( 'They' );
		});

		it( 'feminine should be "she"', function() {
			expect( template({ gender: 'woman' })).toBe( 'she' );
			expect( Template({ gender: 'daughter' })).toBe( 'She' );
		});

		it( 'masculine should be "he"', function() {
			expect( template({ gender: 'man' })).toBe( 'he' );
			expect( Template({ gender: 'uncle' })).toBe( 'He' );
		});
	};
}


describe( 'they', testHeSheThey( 'they' ));
describe( 'she', testHeSheThey( 'she' ));
describe( 'he', testHeSheThey( 'he' ));
