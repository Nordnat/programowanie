#!/usr/bin/env php

<?php
/*
* Start functions for storehouse
*/

$stock = [];

/**
 * arr (array)  - array to work on
 * partName (string) - name of part to add to array
 */
function addToStock ($arr, $partName) {
    array_push($arr, $partName);
}

/**
 * arr (array)  - array to work on
 */
function takeFromStock ($arr) {
    return array_shift($arr);
}