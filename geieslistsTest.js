YAHOO.namespace('GEIESLISTS.test');

var Assert = YAHOO.util.Assert;

YAHOO.GEIESLISTS.test.oTestList = new YAHOO.tool.TestCase({
	name : "TestList",
	testList : function() {
		var myA = List('a')
		Assert.areEqual(head(myA), 'a')
		Assert.isNull(tail(myA))

		var myList = List('a', 'b', 'd')
		var listInitt = listInit(myList)
		Assert.areEqual(head(listInitt), 'a')
		Assert.areEqual(head(tail(listInitt)), 'b')
		Assert.areEqual(last(listInitt), 'b')
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
    testList: function () {
        var myList = ArrayToList(['d', 'b', 'a'])
        Assert.areEqual(head(myList), 'd')
        Assert.areEqual(head(tail(myList)), 'b')
        Assert.areEqual(last(myList), 'a')

        var sorted = msort(myList)
        Assert.areEqual(head(sorted), 'a')
        Assert.areEqual(head(tail(sorted)), 'b')
        Assert.areEqual(last(sorted), 'd')
    }
});

YAHOO.GEIESLISTS.test.oTestListInit = new YAHOO.tool.TestCase({
	name : "TestInit",
	testInit : function() {
		var myList = List('a', 'b', 'd')
		var listInitt = listInit(myList)
		Assert.areEqual(head(listInitt), 'a')
		Assert.areEqual(head(tail(listInitt)), 'b')
		Assert.areEqual(last(listInitt), 'b')
	}
});

YAHOO.GEIESLISTS.test.oTestSize = new YAHOO.tool.TestCase({
	name : "TestSize",
	testSize : function() {
		var myList = List('a', 'b', 'd')
		Assert.areEqual(size(myList), 3)

		var myEmptyList = List()
		Assert.areEqual(size(myEmptyList), 0)
	}
});

YAHOO.GEIESLISTS.test.oTestRemoveAt = new YAHOO.tool.TestCase({
	name : "TestRemoveAt",
	testRemoveAt : function() {
		var myList = List('a', 'b', 'c', 'd')
		Assert.areEqual('List(a,c,d)', consToString(removeAt(1, myList)))
		Assert.areEqual('List(a,b,c,d)', consToString(removeAt(18, myList)))
	}
});

YAHOO.GEIESLISTS.test.oTestIsNil = new YAHOO.tool.TestCase({
	name : "TestIsNil",
	testIsNil : function() {
		Assert.isTrue(isNil(List()))
		var myList = List('a')
		Assert.isTrue(isNil(tail(myList)))
		Assert.isTrue(isNil(removeAt(0,myList)))
	}
});

YAHOO.GEIESLISTS.test.oTestElementAt = new YAHOO.tool.TestCase({
	name : "TestElementAt",
	testElementAt : function() {
		var myList = List('a', 'b', 'c', 'd')
		Assert.areEqual('b', elementAt(1, myList))
		Assert.areEqual(null, elementAt(18, myList))
	}
});

YAHOO.GEIESLISTS.test.oTestTake = new YAHOO.tool.TestCase({
	name : "TestTake",
	testTake : function() {
		var myList = List('a', 'b', 'c', 'd')
		Assert.areEqual('List(a)', consToString(take(1, myList)))
		Assert.areEqual('List(a,b)', consToString(take(2, myList)))
		Assert.areEqual('List()', consToString(take(18, myList)))
	}
});

YAHOO.GEIESLISTS.test.oTestDrop = new YAHOO.tool.TestCase({
	name : "TestDrop",
	testDrop : function() {
		var myList = List('a', 'b', 'c', 'd')
		Assert.areEqual('List(c,d)'.toString(), consToString(drop(2, myList)))
		Assert.areEqual('List()', consToString(drop(18, myList)))
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
		var myListU = undefined
		Assert.areEqual('List()', consToString(myListU))
		var myListA = List()
		// cannot invoke .toString on an empty List - TODO fix this one!!
		Assert.areEqual('List()', consToString(myListA))
		var myListB = List('a')
		Assert.areEqual(myListB.toString(), 'List(a)')
		var myList = List('a', 'b', 'd')
		Assert.areEqual('List(a,b,d)', consToString(myList))
		var myListZZZ = List('a', 'b', 'd')
		Assert.areEqual(myListZZZ.toString(), 'List(a,b,d)')
	}
});

YAHOO.GEIESLISTS.test.oTestConcat = new YAHOO.tool.TestCase({
	name : "TestConcat",
	testConcat : function() {
		var myList1 = List('b', 'd')
		var myList2 = cons('a', null)
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

YAHOO.GEIESLISTS.test.oTestLast = new YAHOO.tool.TestCase({
	name : "TestLast",
	testLast : function() {
		var myList = List('a', 'b', 'd')
		Assert.areEqual(last(myList), 'd')
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

YAHOO.GEIESLISTS.test.oTest001 = new YAHOO.tool.TestCase({
	name : "Test001",
	testListStuff : function() {
		var firstList = cons('a', null)
		var secondList = cons('b', firstList)

		Assert.areEqual(head(firstList), 'a')
		Assert.areEqual(head(tail(secondList)), 'a')
	}
});

YAHOO.util.Event
		.onDOMReady(function() {

			YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite = new YAHOO.tool.TestSuite(
					"YUI Test Suite for Geieslists");

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
					.add(YAHOO.GEIESLISTS.test.oTestList);
			YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite
					.add(YAHOO.GEIESLISTS.test.oTestConsToString);
			YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite
					.add(YAHOO.GEIESLISTS.test.oTest001);
			YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite
					.add(YAHOO.GEIESLISTS.test.oTestInsert);
			YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite
					.add(YAHOO.GEIESLISTS.test.oTestSort);
			YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite
					.add(YAHOO.GEIESLISTS.test.oTestLast);
			YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite
					.add(YAHOO.GEIESLISTS.test.oTestListInit);
			YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite
					.add(YAHOO.GEIESLISTS.test.oTestIsNil);
			YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite
					.add(YAHOO.GEIESLISTS.test.oTestConcat);
			YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite
					.add(YAHOO.GEIESLISTS.test.oTestReverse);
			YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite
					.add(YAHOO.GEIESLISTS.test.oTestEqualList);
			YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite
					.add(YAHOO.GEIESLISTS.test.oTestEqualList2);

			var logger = new YAHOO.tool.TestLogger("testLogger_GEIESLISTS");
			YAHOO.tool.TestRunner
					.add(YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite);
		});
