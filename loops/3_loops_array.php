#!/usr/bin/env php

<?php

/*
 * Create all kind of array loop. Each loop in it's own function with one parameter.
 *
 * Each loop should print() every single item in given array.
 */

$mainArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * @param (array) sets array to iterate
 */
function forEachLoop($array) {
    foreach ($array as $arr) {
        print("$arr\n");
    }
}

/**
 * @param (array) sets array to iterate
 */
function forLoop($array) {
    $arrayLength = count($array);
    for ($i = 0; $i < $arrayLength; $i++) {
        print("$array[$i]\n");
    }
}

/**
 * @param (array) sets array to iterate
 */
function whileLoop($array) {
    $i = 0;
    $arrayLength = count($array);
    while ($i < $arrayLength) {
        print("$array[$i]\n");
        $i++;
    }
}

/**
 * @param (array) sets array to iterate
 */
function doWhileLoop($array) {
    $i = 0;
    $arrayLength = count($array);
    do {
        print($i += 1);
    } while ($i < $arrayLength);
}


forEachLoop($mainArray);
forLoop($mainArray);
whileLoop($mainArray);
doWhileLoop($mainArray);