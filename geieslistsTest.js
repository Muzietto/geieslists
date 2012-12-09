YAHOO.namespace('GEIESLISTS.test');

var Assert = YAHOO.util.Assert;

YAHOO.GEIESLISTS.test.oTestIsEmpty = new YAHOO.tool.TestCase({
	name : "TestIsEmpty",
	testIsEmpty : function() {
		Assert.isTrue(isEmpty(EMPTY))
		Assert.isTrue(isEmpty(NIL))
		var listA = cons('a',EMPTY)
		Assert.isFalse(isEmpty(listA))
		Assert.isTrue(isEmpty(tail(listA)))
		Assert.isTrue(isEmpty(List()))		
		var myList = List('a')
		Assert.isTrue(isEmpty(tail(myList)))
	}
});

YAHOO.GEIESLISTS.test.oTestConsHeadTail = new YAHOO.tool.TestCase({
	name : "TestConsHeadTail",
	testConsHeadTail : function() {
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
		}
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
	}
});

YAHOO.GEIESLISTS.test.oTestElementAt = new YAHOO.tool.TestCase({
	name : "TestElementAt",
	testElementAt : function() {
		var myList = List('a', 'b', 'c', 'd')
		Assert.areEqual('b', elementAt(1, myList))
		Assert.isTrue(isEmpty(elementAt(18, myList)))
	}
});

YAHOO.GEIESLISTS.test.oTestIsAtom = new YAHOO.tool.TestCase({
	name : "TestIsAtom",
	testIsAtom : function() {
		Assert.isTrue(isAtom('a'))
		Assert.isTrue(isAtom(12))
		Assert.isTrue(isAtom(false))
		var myList = List('a', 'b', 'c', 'd')
		Assert.isTrue(isAtom(head(myList)))
		Assert.isFalse(isAtom(tail(myList)))
	}
});

YAHOO.GEIESLISTS.test.oTestSize = new YAHOO.tool.TestCase({
	name : "TestSize",
	testSize : function() {
		var myList = List('a', 'b', 'd')
		Assert.areEqual(3, size(myList))
		var myEmptyList = List()
		Assert.areEqual(0, size(myEmptyList))
	}
});

YAHOO.GEIESLISTS.test.oTestTake = new YAHOO.tool.TestCase({
	name : "TestTake",
	testTake : function() {
		var myList = List('a', 'b', 'c', 'd')
		Assert.areEqual('a', head(take(1, myList))) // List('a')
		var take2 = take(2, myList)  // List('a','b')
		Assert.areEqual(2, size(take2))
		Assert.areEqual('a', head(take2))
		Assert.areEqual('b', head(tail(take2)))
		Assert.isTrue(isEmpty(take(18, myList)))
	}
});

YAHOO.GEIESLISTS.test.oTestDrop = new YAHOO.tool.TestCase({
	name : "TestDrop",
	testDrop : function() {
		var myList = List('a', 'b', 'c', 'd')
		Assert.areEqual('b', head(drop(1, myList))) // List(b,c,d)
		var drop2 = drop(2, myList)  // List(c,d)
		Assert.areEqual(2, size(drop2))
		Assert.areEqual('c', head(drop2))
		Assert.areEqual('d', head(tail(drop2)))
		Assert.isTrue(isEmpty(drop(18, myList)))
	}
});

YAHOO.GEIESLISTS.test.oTestList = new YAHOO.tool.TestCase({
	name : "TestList",
	testList : function() {
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
	}
});

YAHOO.GEIESLISTS.test.oTestListInit = new YAHOO.tool.TestCase({
	name : "TestListInit",
	testListInit : function() {
		var myList = List('a', 'b', 'd')
		var listInitt = listInit(myList)
		Assert.areEqual(2, size(listInitt))
		Assert.areEqual('a', head(listInitt))
		Assert.areEqual('b', head(tail(listInitt)))
	}
});

YAHOO.GEIESLISTS.test.oTestEqualList = new YAHOO.tool.TestCase({
	name : "TestEqualList",
	testEqualList : function() {
		var myA = List('a')
		var myA2 = List('a','b')
		var myA3 = List('b')
		var myList = List('a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z')
		var myList2 = List('a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z', 'a', 'b', 'd', 'a', 'b', 'd', 'x', 'y', 'z')
		Assert.isTrue(equalList(myList,myList2))
		Assert.isFalse(equalList(myA,myA2))
		Assert.isFalse(equalList(myA,myA3))
	}
});

YAHOO.GEIESLISTS.test.oTestEqualList2 = new YAHOO.tool.TestCase({
	name : "TestEqualList2",
	testEqualList2 : function() {
		var myA = List('a')
		var myA2 = List('a','b')
		var myA3 = List('b')
		var myList = List('a', 'b', 'd')
		var myList2 = List('a', 'b', 'd')
		Assert.isTrue(equalList2(myList,myList2))
		Assert.isFalse(equalList2(myA,myA2))
		Assert.isFalse(equalList2(myA,myA3))
	}
});

YAHOO.GEIESLISTS.test.oTestArrayToList = new YAHOO.tool.TestCase({
    name: "TestArrayToList",
    testArrayToList: function () {
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
	}
});

YAHOO.GEIESLISTS.test.oTestLast = new YAHOO.tool.TestCase({
	name : "TestLast",
	testLast : function() {
		Assert.areEqual('a', last(List('a')))
		var myList = List('a', 'b', 'd')
		Assert.areEqual('d', last(myList))
        var myLlist = ArrayToList(['d', 'z', ['s', ['b'], 'a']])
		Assert.areEqual('a', last(last(myLlist)))
	}
});

YAHOO.GEIESLISTS.test.oTestRemoveAt = new YAHOO.tool.TestCase({
	name : "TestRemoveAt",
	testRemoveAt : function() {
		Assert.isTrue(isEmpty(removeAt(0,List('a'))))
		var myList = List('a', 'b', 'c', 'd');
		var acd = removeAt(1, myList);
		Assert.areEqual(3, size(acd))
		Assert.areEqual('a', head(acd))
		Assert.areEqual('d', head(tail(tail(acd))))
		Assert.areEqual(myList, removeAt(18, myList))
	}
});

YAHOO.GEIESLISTS.test.oTestSplitAt = new YAHOO.tool.TestCase({
	name : "TestSplitAt",
	testSplitAt : function() {
		var myList = List('a', 'b', 'd')
		Assert.areEqual('List(a,b)', consToString(splitAt(2, myList).v1))
		Assert.areEqual('List(d)', consToString(splitAt(2, myList).v2))
		Assert.areEqual('List(a,b,d)', consToString(splitAt(4, myList).v1))		
		Assert.areEqual('List()', consToString(splitAt(4, myList).v2))
		Assert.areEqual('List()', consToString(splitAt(0, myList).v1))
		Assert.areEqual('List(a,b,d)', consToString(splitAt(0, myList).v2))
		Assert.areEqual('List()', consToString(splitAt(-2, myList).v1))
		Assert.areEqual('List(a,b,d)', consToString(splitAt(-2, myList).v2))

		var myEmptyList = List()
		Assert.areEqual('List()', consToString(splitAt(4, myEmptyList).v2))
		Assert.areEqual('List()', consToString(splitAt(4, myEmptyList).v1))
	}
});

YAHOO.GEIESLISTS.test.oTestConsToString = new YAHOO.tool.TestCase({
	name : "TestConsToString",
	testConsToString : function() {
		Assert.areEqual('List()', consToString(List()))
		Assert.areEqual('List(a)', List('a').c)
		
		Assert.areEqual('List(a,b,d)', consToString(List('a', 'b', 'd')))
		var listA = List('a')
		var listAbd = List('a', 'b', 'd')
		var llist = cons(listA,listAbd)
		Assert.areEqual('List(List(a),a,b,d)', llist.c)
		
		Assert.areEqual('List(12)', consToString(List(12)))
		Assert.areEqual('List(12,List(a,12))', consToString(ArrayToList([12,['a',12]])))
	}
});

YAHOO.GEIESLISTS.test.oTestConcat = new YAHOO.tool.TestCase({
	name : "TestConcat",
	testConcat : function() {
		var myList1 = List('b', 'd')
		var myList2 = cons('a', EMPTY)
		var conc = concat(myList1, myList2)
		Assert.areEqual(head(conc), 'b')
		Assert.areEqual(last(conc), 'a')
		Assert.areEqual('List(b,d)', consToString(concat(List(),myList1)))
		Assert.areEqual('List(b,d)', consToString(concat(myList1,List())))
	}
});

YAHOO.GEIESLISTS.test.oTestReverse = new YAHOO.tool.TestCase({
	name : "TestReverse",
	testReverse : function() {
		var myList = List('a', 'b', 'd')
		var revv = reverse(myList)
		Assert.areEqual('List(d,b,a)', consToString(revv))
	}
});

YAHOO.GEIESLISTS.test.oTestInsert = new YAHOO.tool.TestCase({
	name : "TestInsert",
	testInsert : function() {
		var myList = List('b', 'd')
		var insC = insert('c', myList)
		Assert.areEqual(head(insC), 'b')
		Assert.areEqual(head(tail(insC)), 'c')
		Assert.areEqual(head(tail(tail(insC))), 'd')
		var insA = insert('a', myList)
		Assert.areEqual(head(insA), 'a')
		var insZ = insert('z', myList)
		Assert.areEqual(head(tail(tail(insZ))), 'z')
	}
});

YAHOO.GEIESLISTS.test.oTestSort = new YAHOO.tool.TestCase({
	name : "TestSort",
	testSort : function() {
		var myList = List('b', 'c', 'z', 'a')
		var sorted = sort(myList)
		Assert.areEqual('List(a,b,c,z)',consToString(sorted))
	}
});

YAHOO.GEIESLISTS.test.oTestMergeSort = new YAHOO.tool.TestCase({
	name : "TestMergeSort",
	testMergeSort : function() {
		var myList = List('b', 'c', 'z', 'a')
		var sorted = msort(myList)
		Assert.areEqual('List(a,b,c,z)',consToString(sorted))
	}
});


YAHOO.util.Event
		.onDOMReady(function() {

			YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite = new YAHOO.tool.TestSuite(
					"YUI Test Suite for Geieslists");

			YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite
					.add(YAHOO.GEIESLISTS.test.oTestIsEmpty);
			YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite
					.add(YAHOO.GEIESLISTS.test.oTestIsAtom);
			YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite
					.add(YAHOO.GEIESLISTS.test.oTestConsHeadTail);
			YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite
					.add(YAHOO.GEIESLISTS.test.oTestList);
			YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite
					.add(YAHOO.GEIESLISTS.test.oTestConsToString);
			YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite
					.add(YAHOO.GEIESLISTS.test.oTestArrayToList);
			YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite
					.add(YAHOO.GEIESLISTS.test.oTestTake);
			YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite
					.add(YAHOO.GEIESLISTS.test.oTestDrop);
			YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite
					.add(YAHOO.GEIESLISTS.test.oTestElementAt);
			YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite
					.add(YAHOO.GEIESLISTS.test.oTestSize);
			YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite
					.add(YAHOO.GEIESLISTS.test.oTestRemoveAt);
			YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite
					.add(YAHOO.GEIESLISTS.test.oTestSplitAt);
			YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite
					.add(YAHOO.GEIESLISTS.test.oTestMergeSort);
			YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite
					.add(YAHOO.GEIESLISTS.test.oTestInsert);
			YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite
					.add(YAHOO.GEIESLISTS.test.oTestSort);
			YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite
					.add(YAHOO.GEIESLISTS.test.oTestLast);
			YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite
					.add(YAHOO.GEIESLISTS.test.oTestListInit);
			YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite
					.add(YAHOO.GEIESLISTS.test.oTestConcat);
			YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite
					.add(YAHOO.GEIESLISTS.test.oTestReverse);
			YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite
					.add(YAHOO.GEIESLISTS.test.oTestEqualList);
			YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite
					.add(YAHOO.GEIESLISTS.test.oTestEqualList2);

			var logger = new YAHOO.tool.TestLogger("testLogger_GEIESLISTS");
			logger.hideCategory("info");

			YAHOO.tool.TestRunner
					.add(YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite);
		});
