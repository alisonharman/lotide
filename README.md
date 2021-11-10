# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @aharman/lotide`

**Require it:**

`const _ = require('@aharman/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
head,
  tail,
  middle,
  eqArrays,
  assertEqual,
  assertArraysEqual

* `head(array)`: returns an array containing the first element; if zero elements, then returns empty array
* `tail(array)`: returns array for all elements except head element
* `middle(array)`: returns array of middle elements
* `eqArrays(array1, array2)`: compares two arrays and returns boolean indicating if they are a perfect match
* `assertEqual(actual, expected)`: compares two primitive datatypes and returns true if strictly equal (does not work with arrays)
* `assertArraysEqual(actual, expected)`: compares two arrays and returns true if they are strictly equal to each other based on their elements 