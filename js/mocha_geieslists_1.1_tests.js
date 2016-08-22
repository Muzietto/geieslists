/*
	GEIESLISTS - JS lists
	Author: Marco Faustinelli (contacts@faustinelli.net)
	Web: http://faustinelli.net/
	     http://faustinelli.wordpress.com/
	Version: 1.1

	The MIT License - Copyright (c) 2012-2018 Geieslists Project
*/

var expect = chai.expect;

describe('Implementing SICP chapter 2 using Geieslists requires', function () {

  it('an implementation of isMember that contemplates the optional injection of a comparator', function() {
		var bd = L.List('b', 'd');
		expect(L.isMember('b', bd)).to.be.ok;
		expect(L.isMember('k', bd)).to.be.not.ok;
  });

  it('an implementation of isMember that contemplates the optional injection of a comparator', function() {    
		var bcza = L.List(L.List('a', 'c'), L.List('h', 'c'), L.List('b', 'c'), L.List('z', 'a'));
		expect(L.isMember(L.List('b','whatever'), bcza, carComparer)).to.be.ok;
		expect(L.isMember(L.List('whatever', 'b','whatever'), bcza, carComparer)).to.be.not.ok;
    function carComparer(a, b) { return L.head(a) === L.head(b); }
  });

  it('an implementation of insert that contemplates the optional injection of a comparator', function() {
		var bd = L.List('b', 'd');

		var insC = L.insert('c', bd);
		expect(insC.c).to.be.equal('[b,c,d]');

		var insA = L.insert('a', bd);
		expect(insA.c).to.be.equal('[a,b,d]');

		var insZ = L.insert('z', bd);
		expect(insZ.c).to.be.equal('[b,d,z]');
  });

  it('an implementation of sort that contemplates the optional injection of a comparator', function() {
		var bcza = L.List('b', 'c', 'z', 'a');
		var sorted = L.sort(bcza);
		expect(sorted.c).to.be.equal('[a,b,c,z]');
  });

  it('an implementation of insert that accepts a comparator', function() {
		var db = L.List('d', 'b');
		var insC = L.insert('c', db, inverter);
		expect(insC.c).to.be.equal('[d,c,b]');
    
		var insA = L.insert('a', db, inverter);
		expect(insA.c).to.be.equal('[d,b,a]');
    
		var insZ = L.insert('z', db, inverter);
		expect(insZ.c).to.be.equal('[z,d,b]');

    function inverter(a,b) {
      if (a===b) return 0;
      if (a>b) return -1;
      return 1;
    }
  });

  it('an implementation of sort that accepts a comparator', function() {
		var bcza = L.List('b', 'c', 'z', 'a');
		var sorted = L.sort(bcza, function(a,b) {
      if (a===b) return 0;
      if (a>b) return -1;
      return 1;
    });
		expect(sorted.c).to.be.equal('[z,c,b,a]');
  });

  it('an implementation for map', function() {
    expect(L.map(L.ArrayToList([1,3,5])).c).to.be.equal('[1,3,5]');
    expect(L.map(L.ArrayToList([1,3,5]),function(x){return x+1}).c).to.be.equal('[2,4,6]');
  });

  it('implementations for fold left and right', function() {
    expect(L.fold(function(x,ys){return x+ys},0,L.ArrayToList([1,3,5]))).to.be.equal(9);
    expect(L.foldl(function(acc,x){return acc+x},0,L.ArrayToList([1,3,6]))).to.be.equal(10);
  });
});
