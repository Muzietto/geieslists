/* a few implementations from the Little Schemer
*/
function isSet(list) {
	if (isEmpty(list)) return true;
	else return (!isMember(head(list),tail(list)) && isSet(tail(list)));
}

function makeset(list) {
	if (isEmpty(list)) return Nil;
	else if (isMember(head(list), tail(list))) return makeset(tail(list));
	else return cons (head(list),makeset(tail(list)));
}

function isSubset(set1,set2){
	if (isEmpty(set1)) return true;
	else return (isMember(head(set1),set2) && isSubset(tail(set1),set2));
}

/* allows combinations of elements
	by using isSubset */
function equalSet(set1,set2) {
	return (isSubset(set1,set2) && isSubset(set2,set1));
}

function isIntersection(set1, set2){
	if (isEmpty(set1) || isEmpty(set2)) return false;
	else return (isMember(head(set1),set2) || isIntersection(tail(set1),set2));
}

function intersection(set1,set2) {
	if (isEmpty(set1)) return Nil;
	else if (isMember(head(set1),set2)) return cons(head(set1),intersection(tail(set1),set2));
	else return intersection(tail(set1),set2);
}

function union(set1,set2){
	if (isEmpty(set1)) return set2;
	else if (isMember(head(set1),set2)) return union(tail(set1),set2);
	else return cons(head(set1),union(tail(set1),set2));
}
