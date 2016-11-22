#!/usr/bin/env node

/*
 * Create all kind of array loop. Each loop in it's own function with one parameter.
 *
 * Each loop should console.log() every single item in given array.
 */


var mainArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 *
 * @param (array) sets array to iterate
 */
function forLoop (array) {
    for (let arr of array) {
        console.log(arr);
    }
}

/**
 *
 * @param (array) sets array to iterate
 */
function forInLoop (array) {
    for (let arr in array) {
        if (array.hasOwnProperty(arr)) {
            console.log(arr);
        }
    }
}

/**
 *
 * (array) sets array to iterate
 */
function standardForLoop (array) {
    for (let index = 0; index < array.length; index++) {
        console.log(array[index]);
    }
}

/**
 *
 * @param (array) sets array to iterate
 */
function forEachLoop (array) {
    array.forEach(function(arrayElement) {
        console.log(arrayElement);
    });
}

/**
 *
 * @param array (array) sets array to iterate
 */
function whileLoop (array) {
    let arrayLength = array.length,
        i = 0;

    while (i < arrayLength) {
        console.log(array[i]);
        i += 1;
    }
}

/**
 *
 * @param array
 */
function doWhileLoop (array) {
    let arrayLength = array.length,
        i = 0;

    do {
        console.log(array[i]);
        i += 1;
    } while (i < arrayLength);
}


forLoop(mainArray);
console.log('---------------------');
forInLoop(mainArray);
console.log('---------------------');
standardForLoop(mainArray);
console.log('---------------------');
forEachLoop(mainArray);
console.log('---------------------');
whileLoop(mainArray);
console.log('---------------------');
doWhileLoop(mainArray);
