# geieslists   ( _j_-_s_-lists)

Crisp clear JavaScript binary tree lists; no JS arrays whatsoever in the way. Everything is a JS function.

Starting from basic building blocks (`cons`, `head`, `tail`, `size`, `isEmpty`, `isAtom`, two factories called `List` and `ArrayToList` plus a stringifier named `consToString`) 
This is a simple implementation of lists as `cons(head,tail)`. Just an exercise with functions.
a few operations are defined: `last`, `init`, `concat`, `reverse`, `take`, `drop`, `elementAt`, `removeAt`, `splitAt`, `sort`, `msort`.

All this started from lesson 5 of the "Functional Programming in Scala" course by Martin Odersky and it contains a port of the examples produced in the lectures 5.2 and 5.3.

Just clone the project, doubleclick one of the HTML files and there you go...

This repository is [presented at my blog](http://faustinelli.wordpress.com/2013/08/14/functional-programming-in-javascript-playing-with-lists-cons-car-and-cdr).

OFFICIAL RELEASE 1.0
--------------------
Official release 1.0 includes elements from the Little Schemer: it supports nested (aka S-expressions) lists in the two factories and in the basic operators. 
The goal is to grow up to FULL FUNCTIONAL support of S-expressions in all operators, in order to allow the implementation of every operation 
contained in the companion repository [LittleFunkyJavascripter](https://github.com/Muzietto/littleFunkyJavascripter).

Handling of empty lists is now complete: it all boils down to using `EMPTY` (a pointless fixed-point evaluation, which actually never gets performed).

SNAPSHOT RELEASE 1.1
--------------------
Release 1.1 is portable: it creates namespace L with all functions from release 1.0, plus a couple more.
It was prepared in order to support the development of [Geiespictures](https://github.com/Muzietto/geiespictures).

TESTING SHOWCASE: YUI and Mocha
-------------------------------
A complete test suite in browser page is enclosed, using two test runners (YUI and Mocha).

The minimal level of support for S-expressions is shown by the test coverage. What ain't tested may still be possible, but you can't know for sure.

During debugging, the method <cons>.c shows a pretty print of the current list.

FOLLOWING UP: LAMBDA CALCULUS
-----------------------------
The logical follow-up of this project is to present a comprehensive implementation of lambda calculus as a whole.

This has been done in two contexts:

 * [es6-lambda-calculus](https://github.com/Muzietto/es6-lambda-calculus), which uses the EcmaScript 6 arrow notation
 * [khepri-lambda](https://github.com/Muzietto/khepri-lambda), which brings the reader to yet another, a lot more expressive, JavaScript dialect

DEBITS AND CREDITS
------------------
I know release 1.0 is just a bunch of global stuff, but it's not meant to be used as-is in a production environment.

Release 1.1 allows to use the code as a portable library, but it cannot overcome the limits of the call stack size. Use it with care :-)

I am in debt with:
- http://blairmitchelmore.com/javascript/cons-car-and-cdr
- http://dankogai.typepad.com/blog/2006/03/lambda_calculus.html

Every feedback is welcome.
