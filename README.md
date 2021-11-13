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
  assertArraysEqual,
  flatten,
  countOnly,
  letterPositions,
  findKeyByValue,
  eqObjects,
  map,
  countLetters,
  assertObjectsEqual,
  findKey,
  takeUntil,
  without

* `head(array)`: returns an array containing the first element; if zero elements, then returns empty array
* `tail(array)`: returns array for all elements except head element
* `middle(array)`: returns array of middle elements
* `eqArrays(array1, array2)`: compares two arrays and returns boolean indicating if they are a perfect match
* `assertEqual(actual, expected)`: compares two primitive datatypes and returns true if strictly equal (does not work with arrays)
* `assertArraysEqual(actual, expected)`: compares two arrays and returns true if they are strictly equal to each other based on their elements 
* `flatten(array)`: takes an array with elements nested array elements (only support one level of nesting) and flattens it to a 1D array
* `countOnly(allItemsArray, itemsToCountObject` :takes in a collection of items as strings and an object of which specific subset of items to count
* `letterPositions(sentence)`: takes in a string and returns an object that gives all the idices in the string where each character is found
* `findKeyByValue(object, value)`: returns first key containing the value found in the object
* `eqObjects(object1, object2)` : compares two object by key-value pairs and returns if they are equal
* `map(array, callback)`: will return a new array based on results of callback function
* `countLetters(sentence)`: takes in a string and returns object of a count of each letter
* `findKey(object, callback)`: returns first key for which the callback yields a truthy value
* `takeUntil (array, callback)`: returns slice of the array based on criteria specified in callback
* `without(source, itemsToRemove)`: takes in a source array and itemsToRemove array and returns items from source not in itemsToRemove
* `assertObjectsEqual(object1, object2)`: writes to console whether two objects are deeply equal or not

