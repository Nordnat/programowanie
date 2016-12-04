#!/usr/bin/env php

<?php
/*
* Start functions for storehouse
*/

$carPartsInStock = ['alternator', 'klocki hamulcowe'];

/**
 * arr (array)  - array to work on
 * partName (string) - name of part to add to array
 */
function addToStock ($arr, $partName) {
    array_push($arr, $partName);
    var_dump($arr);
}
addToStock($carPartsInStock, 'silnik');

/**
 * arr (array)  - array to work on
 */
function takeFromStock ($arr) {
    array_shift($arr);
    var_dump($arr);
}
takeFromStock($carPartsInStock);