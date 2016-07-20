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
    //var gigio = L.build_balanced_tree(L.ArrayToList([/*'a','b',*/'c','d','e','f']));
    //debugger;
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

  it('a function to navigate Huffman trees', function() {
    var a = L.ArrayToList([['a'],6,[],[]]);
    var b = L.ArrayToList([['b'],3,[],[]]);
    var c = L.ArrayToList([['c'],1,[],[]]);
    var d = L.ArrayToList([['d'],1,[],[]]);
    var e = L.ArrayToList([['e'],2,[],[]]);
    var cd = L.ArrayToList([['c','d'],2,c,d]);
    var cde = L.ArrayToList([['c','d','e'],4,cd,e]);
    var bcde = L.ArrayToList([['b','c','d','e'],7,b,cde]);
    var abcde = L.ArrayToList([['a','b','c','d','e'],13,a,bcde]);

    expect(L.decodeH('0',abcde)).to.be.equal('a');
    expect(L.decodeH('10',abcde)).to.be.equal('b');
    expect(L.decodeH('1101',abcde)).to.be.equal('d');
    
  });

  it('a function to build Huffman trees', function() {
    var a = L.ArrayToList([['a'],6,[],[]]);
    var b = L.ArrayToList([['b'],3,[],[]]);
    var c = L.ArrayToList([['c'],1,[],[]]);
    var d = L.ArrayToList([['d'],1,[],[]]);
    var e = L.ArrayToList([['e'],2,[],[]]);
    var cd = L.ArrayToList([['c','d'],2,c,d]);
    var cde = L.ArrayToList([['c','d','e'],4,cd,e]);
    var bcde = L.ArrayToList([['b','c','d','e'],7,b,cde]);
    var abcde = L.ArrayToList([['a','b','c','d','e'],13,a,bcde]);
    
    var as = [['a'],6];
    var bs = [['b'],3];
    var cs = [['c'],1];
    var ds = [['d'],1];
    var es = [['e'],2];
    
    var symbols_cd = L.ArrayToList([cs,ds]);
    expect(L.buildH(symbols_cd).c).to.be.equal(cd.c);

    var symbols_cde = L.ArrayToList([cs,ds,es]);
    expect(L.buildH(symbols_cde).c).to.be.equal(cde.c);

    var symbols_bcde = L.ArrayToList([bs,cs,ds,es]);
    expect(L.buildH(symbols_bcde).c).to.be.equal(bcde.c);

    var symbols_abcde = L.ArrayToList([as,bs,cs,ds,es]);
    expect(L.buildH(symbols_abcde).c).to.be.equal(abcde.c);    
  });

  it('a function to build unordered Huffman dictionaries', function() {
    expect(L.dictionaryH('a').c).to.be.equal('[[[a],1]]');
    expect(L.dictionaryH('a ').c).to.be.equal('[[[a],1]]');
    expect(L.dictionaryH('ab').c).to.be.equal('[[[b],1],[[a],1]]');
    expect(L.dictionaryH('a b').c).to.be.equal('[[[b],1],[[a],1]]');
    expect(L.dictionaryH('aba').c).to.be.equal('[[[b],1],[[a],2]]');
    expect(L.dictionaryH('abacba').c).to.be.equal('[[[c],1],[[b],2],[[a],3]]');
    expect(L.dictionaryH('The quick brown fox jumps over the lazy dog').c).to.be.equal('[]');
  });
});
