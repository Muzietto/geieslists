/*
	GEIESLISTS - JS lists
	Author: Marco Faustinelli (contacts@faustinelli.net)
	Web: http://faustinelli.net/
	     http://faustinelli.wordpress.com/
	Version: 1.0

	The MIT License - Copyright (c) 2012-2015 Geieslists Project
*/

var expect = chai.expect;

describe('a fully functional JS implementation of lists', function () {

  it('allows manipulation of cons, car/head and cdr/tail', function() {
    
		// List(a)
		var listA = cons('a',EMPTY);
		expect(head(listA)).to.be.equal('a');
		expect(tail(listA)).to.be.equal(EMPTY);
    
		// List(b,a)
		var listBA = cons('b',listA);
		expect(head(listBA)).to.be.equal('b');
		expect(tail(listBA)).to.be.equal(listA);
    
		// List(List(a),b,a)
		var listlA_BA = cons(listA,listBA);
		expect(head(listlA_BA)).to.be.equal(listA);
		expect(tail(listlA_BA)).to.be.equal(listBA);
		expect(tail(tail(listlA_BA))).to.be.equal(listA);
		expect(head(head(listlA_BA))).to.be.equal('a');
		expect(isEmpty(tail(head(listlA_BA)))).to.be.ok;

		expect(isEmpty(head(EMPTY))).to.be.not.ok;
		expect(isEmpty(tail(EMPTY))).to.be.not.ok;
  });

  it('should detect fawlty input', function() {
		// check faulty input handling
    expect(function(){ cons(12, 23); }).to.throw();
    expect(function(){ cons(null, EMPTY); }).to.throw();
  });

  it('features elementAt', function() {
    var myList = List('a', 'b', 'c', 'd');
    expect(elementAt(1, myList)).to.be.equal('b');
    expect(isEmpty(elementAt(18, myList))).to.be.ok;
  });

  it('features isAtom', function() {
		expect(isAtom('a')).to.be.ok;
		expect(isAtom(12)).to.be.ok;
		expect(isAtom(false)).to.be.ok;
		var myList = List('a', 'b', 'c', 'd');
		expect(isAtom(head(myList))).to.be.ok;
		expect(isAtom(tail(myList))).to.be.not.ok;
  });

  it('features size', function() {
		var myList = List('a', 'b', 'd');
		expect(size(myList)).to.be.equal(3);
		var myEmptyList = List();
		expect(size(myEmptyList)).to.be.equal(0);
  });

  it('features take', function() {
		var myList = List('a', 'b', 'c', 'd');
		expect(head(take(1, myList))).to.be.equal('a'); // List('a')
		var take2 = take(2, myList);  // List('a','b')
		expect(size(take2)).to.be.equal(2);
		expect(head(take2)).to.be.equal('a');
		expect(head(tail(take2))).to.be.equal('b');
		expect(isEmpty(take(18, myList))).to.be.ok;
  });

  it('features drop', function() {
		var myList = List('a', 'b', 'c', 'd');
		expect(head(drop(1, myList))).to.be.equal('b'); // List(b,c,d)
		var drop2 = drop(2, myList);  // List(c,d)
		expect(size(drop2)).to.be.equal(2);
		expect(head(drop2)).to.be.equal('c');
		expect(head(tail(drop2))).to.be.equal('d');
		expect(isEmpty(drop(18, myList))).to.be.ok;
  });

  it('features a List constructor', function() {
		var myEmpty = List();
		expect(isEmpty(myEmpty)).to.be.ok;
		expect(myEmpty).to.be.equal(EMPTY);
		var myA = List('a');
		expect(head(myA)).to.be.equal('a');
		expect(isEmpty(tail(myA))).to.be.ok;
		var myList = List('a', 'b', 'd');
		expect(head(myList)).to.be.equal('a');
		expect(head(tail(myList))).to.be.equal('b');
		expect(head(tail(tail(myList)))).to.be.equal('d');
		var my12 = List(12);
		expect(head(my12)).to.be.equal(12);
  });

  it('features listInit', function() {
		var myList = List('a', 'b', 'd');
		var listInitt = listInit(myList);
		expect(size(listInitt)).to.be.equal(2);
		expect(head(listInitt)).to.be.equal('a');
		expect(head(tail(listInitt))).to.be.equal('b');
  });

  it('features equalList', function() {
		var myA = List('a');
		var myA2 = List('a','b');
		var myA3 = List('b');
		var myList = List('a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z')
		var myList2 = List('a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z')
		expect(equalList(myList, myList2)).to.be.ok;
		expect(equalList(myA, myA2)).to.be.not.ok;
		expect(equalList(myA, myA3)).to.be.not.ok;
  });

  it('features equalList2', function() {
		var myA = List('a');
		var myA2 = List('a','b');
		var myA3 = List('b');
		var myList = List('a', 'b', 'd');
		var myList2 = List('a', 'b', 'd');
		expect(equalList2(myList,myList2)).to.be.ok;
		expect(equalList2(myA,myA2)).to.be.not.ok;
		expect(equalList2(myA,myA3)).to.be.not.ok;
  });

  it('features a helper function ArrayToList', function() {
    var myEmptyList = ArrayToList([])
    expect(myEmptyList === EMPTY).to.be.ok;
    expect(head(ArrayToList([234]))).to.be.equal(234);

    expect(head(ArrayToList([true]))).to.be.equal(true);

    var myList = ArrayToList(['d', 123, false])
    expect(head(myList)).to.be.equal('d');
    expect(head(tail(myList))).to.be.equal(123);
    expect(last(myList)).to.be.equal(false);

    var sorted = msort(myList)
    expect(head(sorted)).to.be.equal(false);
    expect(head(tail(sorted))).to.be.equal(123);
    expect(last(sorted)).to.be.equal('d');

    var myLlist = ArrayToList(['d', [[false], 678], []])
    expect(head(myLlist)).to.be.equal('d');
    expect(head(head(head(tail(myLlist))))).to.be.not.ok;
    expect(head(tail(head(tail(myLlist))))).to.be.equal(678);
  });

  it('features a helper function consToString', function() {
		expect(consToString(List())).to.be.equal('[]');
		expect(List('a').c).to.be.equal('[a]');
		
		expect(consToString(List('a', 'b', 'd'))).to.be.equal('[a,b,d]');
		var listA = List('a')
		var listAbd = List('a', 'b', 'd')
		var llist = cons(listA,listAbd)
		expect(llist.c).to.be.equal('[[a],a,b,d]');
		
		expect(consToString(List(12))).to.be.equal('[12]');
		expect(consToString(ArrayToList([12,['a',12]]))).to.be.equal('[12,[a,12]]');
  });

  it('features last', function() {
		expect(last(List('a'))).to.be.equal('a');
		var myList = List('a', 'b', 'd');
		expect(last(myList)).to.be.equal('d');
    var myLlist = ArrayToList(['d', 'z', ['s', ['b'], 'a']]);
		expect(last(last(myLlist))).to.be.equal('a');
  });

  it('features removeAt', function() {
		expect(isEmpty(removeAt(0, List('a')))).to.be.ok;
		var myList = List('a', 'b', 'c', 'd');
		var acd = removeAt(1, myList);
		expect(size(acd)).to.be.equal(3);
		expect(head(acd)).to.be.equal('a');
		expect(head(tail(tail(acd)))).to.be.equal('d');
		expect(removeAt(18, myList)).to.be.equal(myList);
  });

  it('features splitAt', function() {
		var myList = List('a', 'b', 'd')
		expect(consToString(splitAt(2, myList).v1)).to.be.equal('[a,b]');
		expect(consToString(splitAt(2, myList).v2)).to.be.equal('[d]');
		expect(consToString(splitAt(4, myList).v1)).to.be.equal('[a,b,d]');
		expect(consToString(splitAt(4, myList).v2)).to.be.equal('[]');
		expect(consToString(splitAt(0, myList).v1)).to.be.equal('[]');
		expect(consToString(splitAt(0, myList).v2)).to.be.equal('[a,b,d]');
		expect(consToString(splitAt(-2, myList).v1)).to.be.equal('[]');
		expect(consToString(splitAt(-2, myList).v2)).to.be.equal('[a,b,d]');

		var myEmptyList = List()
		expect(consToString(splitAt(4, myEmptyList).v2)).to.be.equal('[]');
		expect(consToString(splitAt(4, myEmptyList).v1)).to.be.equal('[]');
  });

  it('features concat', function() {
		var myList1 = List('b', 'd');
		var myList2 = cons('a', EMPTY);
		var conc = concat(myList1, myList2);
		expect(head(conc)).to.be.equal('b');
		expect(last(conc)).to.be.equal('a');
		expect(consToString(concat(List(),myList1))).to.be.equal('[b,d]');
		expect(consToString(concat(myList1,List()))).to.be.equal('[b,d]');
  });

  it('features reverse', function() {
		var myList = List('a', 'b', 'd');
		var revv = reverse(myList);
		expect(consToString(revv)).to.be.equal('[d,b,a]');
  });

  it('features insert', function() {
		var myList = List('b', 'd');
		var insC = insert('c', myList);
		expect(head(insC)).to.be.equal('b');
		expect(head(tail(insC))).to.be.equal('c');
		expect(head(tail(tail(insC)))).to.be.equal('d');
    
		var insA = insert('a', myList);
		expect(head(insA)).to.be.equal('a');
    
		var insZ = insert('z', myList);
		expect(head(tail(tail(insZ)))).to.be.equal('z');
  });

  it('features sort', function() {
		var myList = List('b', 'c', 'z', 'a');
		var sorted = sort(myList);
		expect(consToString(sorted)).to.be.equal('[a,b,c,z]');
  });

  it('features MergeSort', function() {
		var myList = List('b', 'c', 'z', 'a');
		var sorted = msort(myList);
		expect(consToString(sorted)).to.be.equal('[a,b,c,z]');
  });
});
