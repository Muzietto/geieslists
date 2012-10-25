geieslists
==========

Crisp clear Javascript lists; no arrays whatsoever in the way.

This is a simple implementation of lists as cons(head,tail). Just an exercise with functions.
Starting from basic building blocks (cons, head, tail, size, a factory called List and a stringifier named consToString) 
a few operations are defined: last, init, concat, reverse, take, drop, elementAt, removeAt, splitAt, sort, msort.

All has started from lesson 5 of the "Functional Programming in Scala" course by Martin Odersky and is just a port of the
examples produced in the lectures 5.2 and 5.3.

A complete test suite using YUI is enclosed. I know this Javascript code is just a bunch of global stuff, but it's 
not meant to be used as-is in a production environment.

I am in debt with:
- http://blairmitchelmore.com/javascript/cons-car-and-cdr
- http://dankogai.typepad.com/blog/2006/03/lambda_calculus.html

Handling of empty lists is very clumsy. I cannot see any way to improve it unless the whole construction gets way
more complicated (ref. http://matt.might.net/articles/js-church/).

Any feedback is welcome.
