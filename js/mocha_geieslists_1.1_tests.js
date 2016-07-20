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

  it('a function to measure the depth of trees', function() {

    expect(L.depth(L.build_set_naive(L.ArrayToList(['a'])))).to.be.equal(1);
    expect(L.depth(L.build_set_naive(L.ArrayToList(['a','b'])))).to.be.equal(2);
    expect(L.depth(L.build_set_naive(L.ArrayToList(['m','a','r','c'])))).to.be.equal(3);
    expect(L.depth(L.build_set_naive(
    L.ArrayToList(['s','u','b','d','e','r','m','a','t','o','g','l','y','p','h','i','c'])))).to.be.equal(10);

  });

  it('a function element_of_set', function() {
    // NB next tree must be ordered!
    var tree = L.make_tree('m',L.make_tree('a',L.nil,L.make_tree('r',L.make_tree('c',L.nil,L.nil),L.nil)),L.nil);
    expect(L.element_of_set('c',tree)).to.be.ok;
    expect(L.element_of_set('b',tree)).to.be.not.ok;
  });

  it('two functions to flatten binary trees', function() {
    var tree6 = L.make_tree('x',L.nil,L.nil)
    expect(L.tree_to_list1(tree6).c).to.be.equal('[x]');
    var tree7 = L.make_tree('x',L.make_tree('y',L.nil,L.nil),L.nil)
    expect(L.tree_to_list1(tree7).c).to.be.equal('[y,x]');
    var tree8 = L.make_tree('x',L.make_tree('y',L.nil,L.nil),L.make_tree('z',L.nil,L.nil))
    expect(L.tree_to_list1(tree8).c).to.be.equal('[y,x,z]');
    var tree9 = L.make_tree('m',L.make_tree('a',L.nil,L.make_tree('r',L.make_tree('c',L.nil,L.nil),L.nil)),L.nil);
    expect(L.tree_to_list1(tree9).c).to.be.equal('[a,c,r,m]');

    var tree1 = L.make_tree('x',L.nil,L.nil)
    expect(L.tree_to_list2(tree1).c).to.be.equal('[x]');
    var tree2 = L.make_tree('x',L.make_tree('y',L.nil,L.nil),L.nil)
    expect(L.tree_to_list2(tree2).c).to.be.equal('[x,y]');
    var tree3 = L.make_tree('x',L.make_tree('y',L.nil,L.nil),L.make_tree('z',L.nil,L.nil))
    expect(L.tree_to_list2(tree3).c).to.be.equal('[x,y,z]');
    var tree4 = L.make_tree('m',L.make_tree('a',L.nil,L.make_tree('r',L.make_tree('c',L.nil,L.nil),L.nil)),L.nil);
    expect(L.tree_to_list2(tree4).c).to.be.equal('[m,a,r,c]');
    });

  it('a function to build sets as balanced trees', function() {
    var gigio = L.build_balanced_tree(L.ArrayToList([/*'a','b',*/'c','d','e','f']));
    debugger;
    expect(L.build_balanced_tree(L.ArrayToList(['a'])).c).to.be.equal('[a,[],[]]');
    expect(L.build_balanced_tree(L.ArrayToList(['a','b'])).c).to.be.equal('[a,[],[b,[],[]]]');
    expect(L.build_balanced_tree(L.ArrayToList(['b','a'])).c).to.be.equal('[a,[],[b,[],[]]]');
    expect(L.build_balanced_tree(L.ArrayToList(['m','a','r','c'])).c).to.be.equal('[c,[a,[],[]],[m,[],[r,[],[]]]]');
    expect(L.build_balanced_tree(
	  L.ArrayToList(['s','u','b','d','e','r','m','a','t','o','g','l','y','p','h','i','c'])).c).to.be.equal(
	  '[l,[d,[b,[a,[],[]],[c,[],[]]],[g,[e,[],[]],[h,[],[i,[],[]]]]],[r,[o,[m,[],[]],[p,[],[]]],[t,[s,[],[]],[u,[],[y,[],[]]]]]]');

    expect(L.depth(L.build_set_naive(
    L.ArrayToList(['s','u','b','d','e','r','m','a','t','o','g','l','y','p','h','i','c'])))).to.be.equal(10);
    expect(L.depth(L.build_balanced_tree(
    L.ArrayToList(['s','u','b','d','e','r','m','a','t','o','g','l','y','p','h','i','c'])))).to.be.equal(5);
  });

});
