geieslists - RELEASE 1.0
========================
Crisp clear Javascript binary tree lists; no JS arrays whatsoever in the way. Everything is a JS function.

This is a simple implementation of lists as cons(head,tail). Just an exercise with functions.
Starting from basic building blocks (cons, head, tail, size, isEmpty, isAtom, two factories called List and ArrayToList plus a stringifier named consToString) 
a few operations are defined: last, init, concat, reverse, take, drop, elementAt, removeAt, splitAt, sort, msort.

All has started from lesson 5 of the "Functional Programming in Scala" course by Martin Odersky and it contains a port of the
examples produced in the lectures 5.2 and 5.3.

This repository is presented at:

http://faustinelli.wordpress.com/2013/08/14/functional-programming-in-javascript-playing-with-lists-cons-car-and-cdr

OFFICIAL RELEASE
---------------- 
Official release 1 includes elements from the Little Schemer: it supports nested (aka S-expressions) lists in the two factories and in the basic operators. 
The goal is to grow up to FULL FUNCTIONAL support of S-expressions in all operators, in order to allow the implementation of every operation 
contained in the companion repository LittleFunkyJavascripter.

Handling of empty lists is now complete: it all boils down to using EMPTY (a pointless fixed-point evaluation, which actually never gets performed).

A complete test suite using YUI is enclosed. The minimal level of support for S-expressions is shown by the test coverage. What ain't tested
may still be possible, but you can't know for sure.

Whilst debugging, the method <cons>.c shows a pretty print of the current list.

DEBITS AND CREDITS
------------------
I know this Javascript code is just a bunch of global stuff, but it's not meant to be used as-is in a production environment.

I am in debt with:
- http://blairmitchelmore.com/javascript/cons-car-and-cdr
- http://dankogai.typepad.com/blog/2006/03/lambda_calculus.html

Any feedback is welcome.
