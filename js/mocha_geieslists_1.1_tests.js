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
  
  it('a function to build set as trees in a naive manner', function() {
    
    expect(L.build_set_naive(L.ArrayToList(['a'])).c).to.be.equal('[a,[],[]]');
    expect(L.build_set_naive(L.ArrayToList(['a','b'])).c).to.be.equal('[a,[],[b,[],[]]]');
    expect(L.build_set_naive(L.ArrayToList(['b','a'])).c).to.be.equal('[b,[a,[],[]],[]]');

  });
  
  it('a function element_of_set', function() {
    
    

    expect(L.fold((x,ys)=>x+ys,0,L.ArrayToList([1,3,5]))).to.be.equal(9);
    expect(L.foldl((acc,x)=>acc+x,0,L.ArrayToList([1,3,6]))).to.be.equal(10);

  });
  
  it('a function to build set as balanced trees', function() {
    
    expect(L.fold((x,ys)=>x+ys,0,L.ArrayToList([1,3,5]))).to.be.equal(9);
    expect(L.foldl((acc,x)=>acc+x,0,L.ArrayToList([1,3,6]))).to.be.equal(10);

  });
  
});
