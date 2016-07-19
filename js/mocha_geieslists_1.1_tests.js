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

  it('definitions for fold left and right', function() {

    expect(L.fold((x,ys)=>x+ys,0,L.ArrayToList([1,3,5]))).to.be.equal(9);
    expect(L.foldl((acc,x)=>acc+x,0,L.ArrayToList([1,3,6]))).to.be.equal(10);

  });

  it('a function to build sets as trees in a naive manner', function() {

    expect(L.build_set_naive(L.ArrayToList(['a'])).c).to.be.equal('[a,[],[]]');
    expect(L.build_set_naive(L.ArrayToList(['a','a'])).c).to.be.equal('[a,[],[]]');
    expect(L.build_set_naive(L.ArrayToList(['a','b'])).c).to.be.equal('[a,[],[b,[],[]]]');
    expect(L.build_set_naive(L.ArrayToList(['a','a','b'])).c).to.be.equal('[a,[],[b,[],[]]]');
    expect(L.build_set_naive(L.ArrayToList(['a','b','b'])).c).to.be.equal('[a,[],[b,[],[]]]');
    expect(L.build_set_naive(L.ArrayToList(['a','b','a'])).c).to.be.equal('[a,[],[b,[],[]]]');
    expect(L.build_set_naive(L.ArrayToList(['a','b','b','a'])).c).to.be.equal('[a,[],[b,[],[]]]');
    expect(L.build_set_naive(L.ArrayToList(['b','a'])).c).to.be.equal('[b,[a,[],[]],[]]');
    expect(L.build_set_naive(L.ArrayToList(['b','a','a','b','b','a'])).c).to.be.equal('[b,[a,[],[]],[]]');
    expect(L.build_set_naive(L.ArrayToList(['m','a','r','c'])).c).to.be.equal('[m,[a,[],[c,[],[]]],[r,[],[]]]');
    expect(L.build_set_naive(
	  L.ArrayToList(['s','u','b','d','e','r','m','a','t','o','g','l','y','p','h','i','c'])).c).to.be.equal(
	  '[s,[b,[a,[],[]],[d,[c,[],[]],[e,[],[r,[m,[g,[],[l,[h,[],[i,[],[]]],[]]],[o,[],[p,[],[]]]],[]]]]],[u,[t,[],[]],[y,[],[]]]]');

  });

  it('a function element_of_set', function() {
    // NB next tree must be ordered!
    var tree = L.make_tree('m',L.make_tree('a',L.nil,L.make_tree('r',L.make_tree('c',L.nil,L.nil),L.nil)),L.nil);
    expect(L.element_of_set('c',tree)).to.be.ok;
    expect(L.element_of_set('b',tree)).to.be.not.ok;
  });

  it('a function to build set as balanced trees', function() {

    // TODO - implement me
    expect(L.fold((x,ys)=>x+ys,0,L.ArrayToList([1,3,5]))).to.be.equal(9);
    expect(L.foldl((acc,x)=>acc+x,0,L.ArrayToList([1,3,6]))).to.be.equal(10);

  });

});
