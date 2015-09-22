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
		var listA = cons('a',EMPTY)
		Assert.areEqual('a', head(listA))
		Assert.areEqual(EMPTY, tail(listA))		
		// List(b,a)
		var listBA = cons('b',listA)
		Assert.areEqual('b', head(listBA))
		Assert.areEqual(listA, tail(listBA))		
		// List(List(a),b,a)
		var listlA_BA = cons(listA,listBA)
		Assert.areEqual(listA, head(listlA_BA))
		Assert.areEqual(listBA, tail(listlA_BA))
		Assert.areEqual(listA, tail(tail(listlA_BA)))
		Assert.areEqual('a', head(head(listlA_BA)))
		Assert.isTrue(isEmpty(tail(head(listlA_BA))))

		Assert.isFalse(isEmpty(head(EMPTY)), 'head of EMPTY does not exist')
		Assert.isFalse(isEmpty(tail(EMPTY)), 'tail of EMPTY does not exist')

    expect(isLat(List())).to.be.ok;
    expect(isLat(List('a','b'))).to.be.ok;
    expect(isLat(ArrayToList([['a'],'b']))).to.be.not.ok;
  })
  it('should detect fawlty input', function() {
		// check faulty input handling
		try{
			var listXX = cons('avv','aString')
			Assert.isTrue(false, 'cons without a function in the tail should fail')
		} catch (err) {
			Assert.areEqual("cannot cons without a function in the tail", err)
		}
		try{
			var listA = cons(null,EMPTY)
			Assert.isTrue(false, 'cons without head should fail')
		} catch (err) {
			Assert.areEqual("cannot cons without head", err)
		}    expect(isLat(List())).to.be.ok;

    expect(isLat(List('a','b'))).to.be.ok;
    expect(isLat(ArrayToList([['a'],'b']))).to.be.not.ok;
  })

    it('features elementAt', function() {
		var myList = List('a', 'b', 'c', 'd')
		Assert.areEqual('b', elementAt(1, myList))
		Assert.isTrue(isEmpty(elementAt(18, myList)))
    });
    
  it('features isAtom', function() {
		Assert.isTrue(isAtom('a'))
		Assert.isTrue(isAtom(12))
		Assert.isTrue(isAtom(false))
		var myList = List('a', 'b', 'c', 'd')
		Assert.isTrue(isAtom(head(myList)))
		Assert.isFalse(isAtom(tail(myList)))
  });

  it('features size', function() {
		var myList = List('a', 'b', 'd')
		Assert.areEqual(3, size(myList))
		var myEmptyList = List()
		Assert.areEqual(0, size(myEmptyList))
  });

  it('features take', function() {
		var myList = List('a', 'b', 'c', 'd')
		Assert.areEqual('a', head(take(1, myList))) // List('a')
		var take2 = take(2, myList)  // List('a','b')
		Assert.areEqual(2, size(take2))
		Assert.areEqual('a', head(take2))
		Assert.areEqual('b', head(tail(take2)))
		Assert.isTrue(isEmpty(take(18, myList)))
  });

  it('features drop', function() {
		var myList = List('a', 'b', 'c', 'd')
		Assert.areEqual('b', head(drop(1, myList))) // List(b,c,d)
		var drop2 = drop(2, myList)  // List(c,d)
		Assert.areEqual(2, size(drop2))
		Assert.areEqual('c', head(drop2))
		Assert.areEqual('d', head(tail(drop2)))
		Assert.isTrue(isEmpty(drop(18, myList)))
  });

  it('features a List constructor', function() {
		var myEmpty = List();
		Assert.isTrue(isEmpty(myEmpty))
		Assert.areEqual(EMPTY, myEmpty)				
		var myA = List('a')
		Assert.areEqual('a', head(myA))		
		Assert.isTrue(isEmpty(tail(myA)))
		var myList = List('a', 'b', 'd')
		Assert.areEqual('a', head(myList))
		Assert.areEqual('b', head(tail(myList)))
		Assert.areEqual('d', head(tail(tail(myList))))
		var my12 = List(12)
		Assert.areEqual(12, head(my12))		
  });

  it('features listInit', function() {
		var myList = List('a', 'b', 'd')
		var listInitt = listInit(myList)
		Assert.areEqual(2, size(listInitt))
		Assert.areEqual('a', head(listInitt))
		Assert.areEqual('b', head(tail(listInitt)))
  });

  it('features equalList', function() {
		var myA = List('a')
		var myA2 = List('a','b')
		var myA3 = List('b')
		var myList = List('a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z')
		var myList2 = List('a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z')
		Assert.isTrue(equalList(myList,myList2))
		Assert.isFalse(equalList(myA,myA2))
		Assert.isFalse(equalList(myA,myA3))
  });

  it('features equalList2', function() {
		var myA = List('a')
		var myA2 = List('a','b')
		var myA3 = List('b')
		var myList = List('a', 'b', 'd')
		var myList2 = List('a', 'b', 'd')
		Assert.isTrue(equalList2(myList,myList2))
		Assert.isFalse(equalList2(myA,myA2))
		Assert.isFalse(equalList2(myA,myA3))
  });

  it('features ArrayToList', function() {
        var myEmptyList = ArrayToList([])
        Assert.isTrue(myEmptyList === EMPTY)
        Assert.areEqual(234, head(ArrayToList([234])))
		
        Assert.areEqual(true, head(ArrayToList([true])))

        var myList = ArrayToList(['d', 123, false])
        Assert.areEqual('d', head(myList))
        Assert.areEqual(123, head(tail(myList)))
        Assert.areEqual(false, last(myList))

        var sorted = msort(myList)
        Assert.areEqual(false, head(sorted))
        Assert.areEqual(123, head(tail(sorted)))
        Assert.areEqual('d', last(sorted))

        var myLlist = ArrayToList(['d', [[false], 678], []])
        Assert.areEqual('d', head(myLlist))
        Assert.areEqual(false, head(head(head(tail(myLlist)))))
        Assert.areEqual(678, head(tail(head(tail(myLlist)))))
  });

  it('features last', function() {
		Assert.areEqual('a', last(List('a')))
		var myList = List('a', 'b', 'd')
		Assert.areEqual('d', last(myList))
        var myLlist = ArrayToList(['d', 'z', ['s', ['b'], 'a']])
		Assert.areEqual('a', last(last(myLlist)))
  });

  it('features removeAt', function() {
		Assert.isTrue(isEmpty(removeAt(0,List('a'))))
		var myList = List('a', 'b', 'c', 'd');
		var acd = removeAt(1, myList);
		Assert.areEqual(3, size(acd))
		Assert.areEqual('a', head(acd))
		Assert.areEqual('d', head(tail(tail(acd))))
		Assert.areEqual(myList, removeAt(18, myList))
  });

  it('features splitAt', function() {
		var myList = List('a', 'b', 'd')
		Assert.areEqual('[a,b]', consToString(splitAt(2, myList).v1))
		Assert.areEqual('[d]', consToString(splitAt(2, myList).v2))
		Assert.areEqual('[a,b,d]', consToString(splitAt(4, myList).v1))		
		Assert.areEqual('[]', consToString(splitAt(4, myList).v2))
		Assert.areEqual('[]', consToString(splitAt(0, myList).v1))
		Assert.areEqual('[a,b,d]', consToString(splitAt(0, myList).v2))
		Assert.areEqual('[]', consToString(splitAt(-2, myList).v1))
		Assert.areEqual('[a,b,d]', consToString(splitAt(-2, myList).v2))

		var myEmptyList = List()
		Assert.areEqual('[]', consToString(splitAt(4, myEmptyList).v2))
		Assert.areEqual('[]', consToString(splitAt(4, myEmptyList).v1))
  });

  it('features consToString', function() {
		Assert.areEqual('[]', consToString(List()))
		Assert.areEqual('[a]', List('a').c)
		
		Assert.areEqual('[a,b,d]', consToString(List('a', 'b', 'd')))
		var listA = List('a')
		var listAbd = List('a', 'b', 'd')
		var llist = cons(listA,listAbd)
		Assert.areEqual('[[a],a,b,d]', llist.c)
		
		Assert.areEqual('[12]', consToString(List(12)))
		Assert.areEqual('[12,[a,12]]', consToString(ArrayToList([12,['a',12]])))
  });

  it('features concat', function() {
		var myList1 = List('b', 'd')
		var myList2 = cons('a', EMPTY)
		var conc = concat(myList1, myList2)
		Assert.areEqual(head(conc), 'b')
		Assert.areEqual(last(conc), 'a')
		Assert.areEqual('[b,d]', consToString(concat(List(),myList1)))
		Assert.areEqual('[b,d]', consToString(concat(myList1,List())))
  });

  it('features reverse', function() {
		var myList = List('a', 'b', 'd')
		var revv = reverse(myList)
		Assert.areEqual('[d,b,a]', consToString(revv))
  });

  it('features insert', function() {
		var myList = List('b', 'd')
		var insC = insert('c', myList)
		Assert.areEqual(head(insC), 'b')
		Assert.areEqual(head(tail(insC)), 'c')
		Assert.areEqual(head(tail(tail(insC))), 'd')
		var insA = insert('a', myList)
		Assert.areEqual(head(insA), 'a')
		var insZ = insert('z', myList)
		Assert.areEqual(head(tail(tail(insZ))), 'z')
  });

  it('features sort', function() {
		var myList = List('b', 'c', 'z', 'a')
		var sorted = sort(myList)
		Assert.areEqual('[a,b,c,z]',consToString(sorted))
  });

  it('features MergeSort', function() {
		var myList = List('b', 'c', 'z', 'a')
		var sorted = msort(myList)
		Assert.areEqual('[a,b,c,z]',consToString(sorted))
  });


  function safeThrow(command, string) {
    try {
      command();
    } catch(err) {
      expect(err).to.be.equal(string);
    }
  }
});
