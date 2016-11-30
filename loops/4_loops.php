<?php
/*
* Create two functions with array loops without using loop syntax.
*
* First function can have two parameters: $arr, and $offset.
* Second function must have only one parameter: $arr.
*
* Each loop should print() every single item in given array.
*/

$arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
* Recursive function iterating through array
* $arr (number)  - given array to iterate through
* $offset (number) - value of array index to start from
*/
function recursiveLoop($arr, $offset=0) {
    $arrayLength = count($arr);
    if ($offset < $arrayLength) {
        print($arr[$offset]);
        recursiveLoop($arr, $offset + 1);
    }
}
//recursiveLoop($arr);

/**
 * Recursive function iterating through array
 * $arr (number)  - given array to iterate through
 */
function recursiveLoopSecond($arr) {
    $arrayLength = count($arr);
    if ($arrayLength > 0) {
        $arrayElement = array_shift($arr);
        print($arrayElement);
        recursiveLoopSecond($arr);
    }
}
recursiveLoopSecond($arr);
