<?php
/**
 * @param {number} countTo sets the boundry imit of loop iteration
 */
function forLoop($countTo) {
    for ($i = 0; $i < $countTo; $i += 1){
        print("$i\n");
    }
}

/**
 * @param {number} countTo sets the boundry imit of loop iteration
 */
function whileLoop($countTo) {
    $i = 0;
    while ($i < $countTo) {
        print("$i\n");
        $i += 1;
    }
}

/**
 * @param {number} countTo sets the boundry imit of loop iteration
 */
function doWhileLoop($countTo) {
    $i = 0;
    do {
        print($i += 1);
    } while ($i < $countTo - 1);
}

forLoop(12);
whileLoop(12);
doWhileLoop(12);