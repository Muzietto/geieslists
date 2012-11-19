function cons(x, y) {
	return function(w) {
	 if (!x) 
		 return false 
	 else
		return w(x, y)
	};
};

function head(listFun) { 
	return listFun(function(x, y) {
		// avoid undefined heads
		return (x == undefined) ? null : x
	});
};

function tail(listFun) { 
	return listFun(function(x, y) {
		// avoid undefined tails
		return (y == undefined) ? null : y
	});
};

function List() {
	var bigCons;
	for ( var i = arguments.length; i--;) {
		bigCons = cons(arguments[i], bigCons);
	}
	if (bigCons) // NB: List() is undefined!!
		bigCons.toString = consToString.bind(bigCons, bigCons)
	return bigCons
};

function ArrayToList(anArray) {
	var bigCons;
	for ( var i = anArray.length; i--;) {
		bigCons = cons(anArray[i], bigCons);
	}
	if (bigCons) // NB: List() is undefined!!
		bigCons.toString = consToString.bind(bigCons, bigCons)
	return bigCons
}

var Nil = List()

function size(list) {
	if (!list)
		return 0
	else if (!tail(list))
		return 1
	else
		return 1 + size(tail(list))
}

function consToString(cons) {
	var adder = function(curCons, acc) {
		if (curCons == undefined)
			return acc + ")"
		else if (!tail(curCons))
			return acc + head(curCons) + ")"
		else
			return adder(tail(curCons), acc + head(curCons) + ",")
	}
	return adder(cons, "List(")
}

function last(list) {
	if (!tail(list))
		return head(list)
	else
		return last(tail(list))
}

function init(list) {
	if (!tail(list))
		return null
	else
		return cons(head(list), init(tail(list)))
}

function concat(list1, list2) {
	if (!list1) return list2
	else if (!list2) return list1
	else if (!tail(list1))
		return cons(head(list1), list2)
	else
		return cons(head(list1), concat(tail(list1), list2))
}

function reverse(list) {
	if (!tail(list))
		return list
	else
		return concat(reverse(tail(list)), cons(head(list), null))
}

function insert(elem, orderedList) {
	if (!orderedList)
		return cons(elem, null)
	else if (elem < head(orderedList))
		return cons(elem, orderedList)
	else
		return cons(head(orderedList), insert(elem, tail(orderedList)))
}

function sort(list) {
	if (!tail(list))
		return list
	else
		return insert(head(list), sort(tail(list)))
}

// elems = absolute number of list elements
function take(elems,list) {
	if (!list || size(list) === elems) return list
	else return take(elems,init(list))
}

// elems = absolute number of list elements
function drop(elems,list) {
	if (!list || elems === 0) return list
	else return drop(elems-1,tail(list))
}

// index starts from 0
function elementAt(index,list) {
	if (!list) return list
	else if (index === 0) return head(list)
	else return elementAt(index-1,tail(list))
}

// index starts from 0
function removeAt(index,list) {
	if (index<0 || index>size(list)) return list
	return concat(take(index,list),drop(index+1,list))
}

// it means "split after given element"
function splitAt(elem,list) {
	if (elem<1) return ({_1:List(),_2:list})
	else if (elem>size(list)) return ({_1:list,_2:List()})
	else {
		var splitT = function({_1:xs,_2:ys}){
			if (size(xs)===elem) return ({_1:xs,_2:ys})
			else return splitT({_1:concat(xs,List(head(ys))),_2:tail(ys)})
		}
		return splitT({_1:List(),_2:list})
	}
}

function msort(list) {
	var n = Math.floor(size(list) / 2)
	if (n === 0)
		return list
	else {
		var mergeT = function(xs, ys) {
			if (!xs)
				return ys
			else if (!ys)
				return xs
			else { // both lists have at least one element
				if (head(xs) <= head(ys))
					return cons(head(xs), mergeT(tail(xs), ys))
				else
					return cons(head(ys), mergeT(xs, tail(ys)))
			}
		}
		var tuple = splitAt(n,list)
		return mergeT(msort(tuple._1),msort(tuple._2))
	}
}
