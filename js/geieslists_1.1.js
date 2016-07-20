/*
	GEIESLISTS - JS lists
	Author: Marco Faustinelli (contacts@faustinelli.net)
	Web: http://faustinelli.net/
	     http://faustinelli.wordpress.com/
	Version: 1.1

	The MIT License - Copyright (c) 2012-2016 Geieslists Project
*/
var L = function() {
    var EMPTY = function(x){return x;};
    EMPTY.c = '[]';
    var Nil = EMPTY
    var nil = EMPTY
    var NIL = EMPTY

    // cons returns an APPLICATOR OF BINARY FUNCTIONS
    function cons(x, y) {
        if (x === null || typeof x === "undefined") throw "cannot cons without head";
        if (typeof(y) !== "function")   // y must be a function at any cost (but this check is 99% safe)
            throw "cannot cons without a function in the tail";
        var result = function(w) {
            return w(x, y);
        };
        // we  can safely freeze the string representation because cons is immutable
        result.c = consToString(result)
        return result;
    };

    // car returns the APPLICATION of a binary function to an APPLICATOR of binary functions
    function head(cons) {
        return cons(function (x, y) { return x; });
    };

    // cdr returns the APPLICATION of a binary function to an APPLICATOR of binary functions
    function tail(cons) {
        return cons(function (x, y) { return y; });
    };

    // WARNING: contains mutable vars!
    function List() {
        var bigCons = EMPTY;
        for (var i = arguments.length; i--; ) {
            bigCons = cons(arguments[i], bigCons);
        }
        return bigCons
    };

    // WARNING: contains mutable vars!
    function ArrayToList(anArray) {
        var bigCons = EMPTY;
        for (var i = anArray.length; i--; ) {
            // string, number or boolean
            //if (isAtom(anArray[i]))
            if (!Array.isArray(anArray[i]))
                bigCons = cons(anArray[i], bigCons);
            // else array
            else bigCons = cons(ArrayToList(anArray[i]), bigCons)
        }
        return bigCons
    }

    function isEmpty(list){
        return (list === EMPTY);
    }

    function isAtom(sexpr){
        return (typeof(sexpr) === "string" || typeof(sexpr) === "number" || typeof(sexpr) === "boolean");
    }

    function size(list) {
        if (isEmpty(list))
            return 0
        else
            return 1 + size(tail(list))
    }

    // as alternative you may invoke cons.c
    function consToString(cons) {
        var adder = function (curCons, acc) {
            if (isEmpty(curCons))
                return acc + "]"
            else if (isAtom(head(curCons)))
                return adder(tail(curCons), acc + head(curCons) + (isEmpty(tail(curCons)) ? "" : ","))
            else
                return adder(tail(curCons), acc + consToString(head(curCons)) + (isEmpty(tail(curCons)) ? "" : ","))
        }
        return adder(cons, "[")
    }

    function last(list) {
        if (isEmpty(tail(list)))
            return head(list)
        else
            return last(tail(list))
    }

    // all elements except the last one
    function listInit(list) {
        if (isEmpty(tail(list))) {
            return EMPTY;
        } else {
            return cons(head(list), listInit(tail(list)));
        }
    }

    function concat(list1, list2) {
        if (isEmpty(list1)) return list2
        else if (isEmpty(list2)) return list1
        else if (isEmpty(tail(list1)))
            return cons(head(list1), list2)
        else
            return cons(head(list1), concat(tail(list1), list2))
    }

    function reverse(list) {
        if (isEmpty(tail(list)))
            return list
        else
            return concat(reverse(tail(list)), cons(head(list), EMPTY))
    }

    function insert(elem, orderedList) {
        if (isEmpty(orderedList))
            return cons(elem, EMPTY)
        else if (elem < head(orderedList))
            return cons(elem, orderedList)
        else
            return cons(head(orderedList), insert(elem, tail(orderedList)))
    }

    function sort(list) {
        if (isEmpty(tail(list)))
            return list
        else
            return insert(head(list), sort(tail(list)))
    }

    // take(2,List(a,b,c,d,e)) --> List(a,b)
    function take(elems, list) { // elems = absolute number of list elements
        if (isEmpty(list) || size(list) === elems) return list
        else return take(elems, listInit(list))
    }

    // drop(2,List(a,b,c,d,e)) --> List(c,d,e)
    function drop(elems, list) { // elems = absolute number of list elements
        if (isEmpty(list) || elems === 0) return list
        else return drop(elems - 1, tail(list))
    }

    // index starts from 0
    function elementAt(index, list) {
        if (isEmpty(list)) return list
        else if (index === 0) return head(list)
        else return elementAt(index - 1, tail(list))
    }

    function isMember(atom, list) {
        if (isEmpty(list)) return false;
        else return (head(list) === atom) || (isMember(atom, tail(list)));
    }

    // index starts from 0
    function removeAt(index, list) {
        if (index < 0 || index > size(list)) return list
        return concat(take(index, list), drop(index + 1, list))
    }

    // it means "split after given element"
    function splitAt(elem,list) {
        if (elem<1) {
            return ({v1:List(),v2:list});
        } else if (elem>size(list)) {
            return ({v1:list,v2:List()});
        } else {
        var splitT = function (tuple) {
            var xs = tuple.v1, ys = tuple.v2;
            if (size(xs) === elem) return ({ v1: xs, v2: ys })
            else return splitT({ v1: concat(xs, List(head(ys))), v2: tail(ys) })
        }
            return splitT({v1:List(),v2:list})
        }
    }

    // Marco's
    function equalList(listA,listB) {
        if (size(listA) !== size(listB)) return false;
        var innerEq = function(alist,blist) {
            if (head(alist) !== head(blist)) return false;
            else if (isEmpty(tail(alist)) && isEmpty(tail(blist))) return true;
            else return innerEq(tail(alist),tail(blist));
        }
        return innerEq(listA,listB)
    }

    // Dionyzis's
    function equalList2( listA, listB ) {
        return isEmpty( listA ) && isEmpty( listB )
            ||    !isEmpty( listB )
              && !isEmpty( listB )
              && head( listA ) === head( listB )
              && equalList( tail( listA ), tail( listB ) );
    }

    function msort(list) {
        var n = Math.floor(size(list) / 2)
        if (n === 0)
            return list
        else {
            var mergeT = function (xs, ys) {
                if (isEmpty(xs))
                    return ys
                else if (isEmpty(ys))
                    return xs
                else { // both lists have at least one element
                    if (head(xs) <= head(ys))
                        return cons(head(xs), mergeT(tail(xs), ys))
                    else
                        return cons(head(ys), mergeT(xs, tail(ys)))
                }
            }
            var tuple = splitAt(n, list)
            return mergeT(msort(tuple.v1), msort(tuple.v2))
        }
    }

    // fold right
    function fold(f, v, xs) { return isEmpty(xs) ? v : f(head(xs), fold(f, v, tail(xs))); }

    // fold left
    function foldl(s, a, xs) { return isEmpty(xs) ? a : foldl(s, s(a, head(xs)), tail(xs)); }

    function first(list) { return head(list); }
    function second(list) { return head(tail(list)); }
    function third(list) { return head(tail(tail(list))); }
    function fourth(list) { return head(tail(tail(tail(list)))); }
    function fifth(list) { return head(tail(tail(tail(tail(list))))); }

    function make_tree(entry, left, right) { return ArrayToList([entry,left,right]); }

    var entry = first;
    var left_branch = second;
    var right_branch = third;

    function depth(tree) {
      if (isEmpty(tree)) return 0;
      return 1 + Math.max(depth(left_branch(tree)), depth(right_branch(tree)));
    }

    function build_set_naive(elements) {
      return build_set_helper(elements, nil);
      function build_set_helper(list, tree) {
        if (isEmpty(list)) return tree;
        if (element_of_set(head(list), tree)) return build_set_helper(tail(list), tree);
        return build_set_helper(tail(list), adjoin_set(head(list), tree));
      }
    }

    function tree_to_list1(tree) {
      if (isEmpty(tree)) return nil;
      return concat(tree_to_list1(left_branch(tree)),cons(entry(tree),tree_to_list1(right_branch(tree))));
    }

    function tree_to_list2(tree) {
      return reverse(tree_to_list_helper(tree, nil));
      
      function tree_to_list_helper(tree, list) {
        if (isEmpty(tree)) return list;
        return tree_to_list_helper(right_branch(tree), tree_to_list_helper(left_branch(tree),cons(entry(tree),list)));
      }
    }

    function adjoin_set(x, set) {
      if (isEmpty(set)) return make_tree(x, nil, nil);
      var currEntry = entry(set);
      if (x < currEntry) return make_tree(currEntry, adjoin_set(x, left_branch(set)), right_branch(set));
      if (x > currEntry) return make_tree(currEntry, left_branch(set), adjoin_set(x, right_branch(set)));
    }

    function element_of_set(x, set) {
      if (isEmpty(set)) return false;
      if (x === entry(set)) return true;
      if (x < entry(set)) return element_of_set(x, left_branch(set));
      if (x > entry(set)) return element_of_set(x, right_branch(set));
    }

    function build_balanced_tree(elements) {
      return head(partial_tree(sort(elements),size(elements)));

      function partial_tree(elts, n) {
        if (n === 0) return cons(nil, elts);
        var left_size = Math.floor((n-1)/2);
        var left_result = partial_tree(elts, left_size);
        var left_tree = head(left_result);
        var non_left_elts = tail(left_result);
        var right_size = n - (left_size+1);
        var this_entry = head(non_left_elts);
        var right_result = partial_tree(tail(non_left_elts),right_size);
        var right_tree = head(right_result);
        var remaining_elts = tail(right_result);
        return cons(make_tree(this_entry,left_tree,right_tree),remaining_elts);
      }
    }
    
    function decodeH (encoded,tree) {
      var symbols = first;
      var weight = second;
      var left_branch = third;
      var right_branch = fourth;
      
      var bits = ArrayToList(encoded.split('').filter(function(x) { return (x==='1'||x==='0');}));
      return decode(bits,tree);
      
      function decode(bits,tree) {
        if (size(bits)===0) {
          if (size(head(tree))===1) {
            return head(head(tree));
          } else {
            throw new Error('non-existing encoding 1!');
          }
        }
        var currentBit = head(bits);
        if (currentBit==='0') return decode(tail(bits),left_branch(tree));
        if (currentBit==='1') return decode(tail(bits),right_branch(tree));
        throw new Error('non-existing encoding 2!')
      }
    }

    return {
        make_tree: make_tree,
        entry: entry,
        left_branch: left_branch,
        right_branch: right_branch,
        depth: depth,
        build_set_naive: build_set_naive,
        element_of_set: element_of_set,
        adjoin_set: adjoin_set,
        tree_to_list1: tree_to_list1,
        tree_to_list2: tree_to_list2,
        build_balanced_tree: build_balanced_tree,
        decodeH: decodeH,
        nil: nil,
        cons: cons,
        car: head,
        cdr: tail,
        head: head,
        tail: tail,
        List: List,
        ArrayToList: ArrayToList,
        isEmpty: isEmpty,
        isAtom: isAtom,
        size: size,
        consToString: consToString,
        last: last,
        listInit: listInit,
        concat: concat,
        reverse: reverse,
        insert: insert,
        sort: sort,
        take: take,
        drop: drop,
        elementAt: elementAt,
        isMember: isMember,
        removeAt: removeAt,
        splitAt: splitAt,
        equalList: equalList,
        msort: msort,
        fold: fold,
        foldl: foldl,
        first: first,
        second: second,
        third: third
    }
}();
