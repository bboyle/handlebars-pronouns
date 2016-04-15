'use strict';

function testHeSheThey( alias ) {
	return function() {
		var template = Handlebars.compile( '{{' + alias + ' gender}}' );

		it( 'should be "they"', function() {
			expect( template() ).toBe( 'they' );
		});

		it( 'feminine should be "she"', function() {
			expect( template({ gender: 'woman' })).toBe( 'she' );
		});

		it( 'masculine should be "he"', function() {
			expect( template({ gender: 'man' })).toBe( 'he' );
		});
	};
}


describe( 'they', testHeSheThey( 'they' ));
describe( 'she', testHeSheThey( 'she' ));
describe( 'he', testHeSheThey( 'he' ));
