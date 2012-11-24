YAHOO.namespace('GEIESLISTS.test');

var Assert = YAHOO.util.Assert;

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
		});

