/* a few implementations from the Little Schemer
*/

YAHOO.namespace('GEIESLISTS.test');

var Assert = YAHOO.util.Assert;

YAHOO.GEIESLISTS.test.oTestIsIntersection = new YAHOO.tool.TestCase({
	name : "TestIsIntersection",
	testIsIntersection : function() {
		Assert.isTrue(isIntersection(List('a'),List('a')))
		Assert.isFalse(isIntersection(List(),List()))
		Assert.isFalse(isIntersection(List('a'),List('b')))
		Assert.isFalse(isIntersection(List('a'),List()))
		Assert.isFalse(isIntersection(List(),List('c')))
		Assert.isTrue(isIntersection(List('a','b','c'),List('b','a')))
		Assert.isFalse(isIntersection(List('a','b','c'),List('z','y','z')))
		Assert.isTrue(isIntersection(List('a','b','c'),List('z','c','z')))
	}
});

YAHOO.GEIESLISTS.test.oTestIntersection = new YAHOO.tool.TestCase({
	name : "TestIntersection",
	testIntersection : function() {
		Assert.areEqual('List(a)',consToString(intersection(List('a'),List('a'))))
		Assert.areEqual('List()',consToString(intersection(List(),List())))
		Assert.areEqual('List()',consToString(intersection(List('a'),List('b'))))
		Assert.areEqual('List()',consToString(intersection(List('a'),List())))
		Assert.areEqual('List()',consToString(intersection(List(),List('a'))))
		Assert.areEqual('List(a,b)',consToString(intersection(List('a','b','c'),List('b','a'))))
		Assert.areEqual('List()',consToString(intersection(List('a','b','c'),List('x','y','z'))))
		Assert.areEqual('List(c)',consToString(intersection(List('a','b','c'),List('x','c','z'))))
	}
});

YAHOO.GEIESLISTS.test.oTestUnion = new YAHOO.tool.TestCase({
	name : "TestUnion",
	testUnion : function() {
		Assert.areEqual('List(a)',consToString(union(List('a'),List('a'))))
		Assert.areEqual('List()',consToString(union(List(),List())))
		Assert.areEqual('List(a,b)',consToString(union(List('a'),List('b'))))
		Assert.areEqual('List(a)',consToString(union(List('a'),List())))
		Assert.areEqual('List(a)',consToString(union(List(),List('a'))))
		Assert.areEqual('List(c,b,a)',consToString(union(List('a','b','c'),List('b','a'))))
		Assert.areEqual('List(a,b,c,x,y,z)',consToString(union(List('a','b','c'),List('x','y','z'))))
		Assert.areEqual('List(a,b,x,c,z)',consToString(union(List('a','b','c'),List('x','c','z'))))
	}
});

YAHOO.GEIESLISTS.test.oTestIsSet = new YAHOO.tool.TestCase({
	name : "TestIsSet",
	testIsSet : function() {
		Assert.isTrue(isSet(List('a')))
		Assert.isTrue(isSet(List()))
		Assert.isFalse(isSet(List('a','a')))
		Assert.isTrue(isSet(List('a','b','c')))
	}
});

YAHOO.GEIESLISTS.test.oTestMakeset = new YAHOO.tool.TestCase({
	name : "TestMakeset",
	testMakeset : function() {
		var madeset = makeset(List('a','b','a'));
		Assert.isTrue(isMember('a',madeset));
		Assert.isTrue(isMember('b',madeset));
		Assert.areEqual(2,size(madeset));
		Assert.areEqual('List(b,a)', consToString(madeset));
	}
});

YAHOO.GEIESLISTS.test.oTestIsSubset = new YAHOO.tool.TestCase({
	name : "TestIsSubset",
	testIsSubset : function() {
		Assert.isTrue(isSubset(List(), List('a')))
		Assert.isFalse(isSubset(List('a'), List()))
		Assert.isTrue(isSubset(List('a'), List('a')))
		Assert.isTrue(isSubset(List('a'), List('a','b')))
		Assert.isTrue(isSubset(List('b'), List('a','b')))
		Assert.isTrue(isSubset(List('b','a'), List('a','b')))
	}
});

YAHOO.GEIESLISTS.test.oTestEqualSet = new YAHOO.tool.TestCase({
	name : "TestEqualSet",
	testEqualSet : function() {
		Assert.isTrue(equalSet(List(), List()))
		Assert.isFalse(equalSet(List(), List('a')))
		Assert.isFalse(equalSet(List('a'),List()))
		Assert.isFalse(equalSet(List('a','b'),List('b')))
		Assert.isTrue(equalSet(List('a'), List('a')))
		Assert.isTrue(equalSet(List('a','b'), List('b','a')))
	}
});

YAHOO.GEIESLISTS.test.oTestIsMember = new YAHOO.tool.TestCase({
	name : "TestIsMember",
	testIsMember : function() {
		Assert.isTrue(isMember('a', List('a')))
		Assert.isFalse(isMember(List(), List('a')))
		Assert.isFalse(isMember(List('a'), Nil))
		Assert.isTrue(isMember('a', List('b','a')))
		Assert.isFalse(isMember('a', List('b')))	
	}
});

YAHOO.util.Event
		.onDOMReady(function() {
		
		if (!YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite) YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite = new YAHOO.tool.TestSuite("YUI Test Suite for Geieslists");
		
			// testStuite and testRunner are defined in another file
			YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite
					.add(YAHOO.GEIESLISTS.test.oTestIsMember);
			YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite
					.add(YAHOO.GEIESLISTS.test.oTestIsSet);
			YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite
					.add(YAHOO.GEIESLISTS.test.oTestMakeset);
			YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite
					.add(YAHOO.GEIESLISTS.test.oTestIsSubset);
			YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite
					.add(YAHOO.GEIESLISTS.test.oTestEqualSet);
			YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite
					.add(YAHOO.GEIESLISTS.test.oTestIsIntersection);
			YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite
					.add(YAHOO.GEIESLISTS.test.oTestIntersection);
			YAHOO.GEIESLISTS.test.GEIESLISTS_TestSuite
					.add(YAHOO.GEIESLISTS.test.oTestUnion);
		});

