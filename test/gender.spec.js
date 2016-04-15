'use strict';

function testHeSheThey( alias ) {
	return function() {
		var template = Handlebars.compile( '{{' + alias.toLowerCase() + ' gender}}' );
		var Template = Handlebars.compile( '{{' + alias + ' gender}}' );

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


function testHisHerTheir( alias ) {
	return function() {
		var template = Handlebars.compile( '{{' + alias.toLowerCase() + ' gender}}' );
		var Template = Handlebars.compile( '{{' + alias + ' gender}}' );

		it( 'should be "their"', function() {
			expect( template() ).toBe( 'their' );
			expect( Template() ).toBe( 'Their' );
		});

		it( 'feminine should be "her"', function() {
			expect( template({ gender: 'female' })).toBe( 'her' );
			expect( Template({ gender: 'girlfriend' })).toBe( 'Her' );
		});

		it( 'masculine should be "his"', function() {
			expect( template({ gender: 'father' })).toBe( 'his' );
			expect( Template({ gender: 'husband' })).toBe( 'His' );
		});
	};
}


function testHimHerThem( alias ) {
	return function() {
		var template = Handlebars.compile( '{{' + alias.toLowerCase() + ' gender}}self' );
		var Template = Handlebars.compile( '{{' + alias + ' gender}}' );

		it( 'should be "them"', function() {
			expect( template() ).toBe( 'themself' );
			expect( Template() ).toBe( 'Them' );
		});

		it( 'feminine should be "her"', function() {
			expect( template({ gender: 'wife' })).toBe( 'herself' );
			expect( Template({ gender: 'mother' })).toBe( 'Her' );
		});

		it( 'masculine should be "him"', function() {
			expect( template({ gender: 'boy' })).toBe( 'himself' );
			expect( Template({ gender: 'male' })).toBe( 'Him' );
		});
	};
}


function describePronoun( pronoun, test ) {
	describe( pronoun, test( pronoun ));
}


describePronoun( 'They', testHeSheThey );
describePronoun( 'She',  testHeSheThey );
describePronoun( 'He',   testHeSheThey );

describePronoun( 'Their',  testHisHerTheir );
describePronoun( 'HerHis', testHisHerTheir );
describePronoun( 'His',    testHisHerTheir );
describePronoun( 'HisHer', testHisHerTheir );

describePronoun( 'Them',   testHimHerThem );
describePronoun( 'HerHim', testHimHerThem );
describePronoun( 'Him',    testHimHerThem );
describePronoun( 'HimHer', testHimHerThem );
