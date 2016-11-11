<?php
/**
 * for loop
 * @param $countTo
 */
function forLoop($countTo) {
    for ($i = 1; $i <= $countTo; $i++){
        print($i . "<br>");
    }
}

/**
 * while loop
 * @param $countTo
 */
function whileLoop($countTo) {
    $i = 1;
    while ($i <= $countTo):
        print($i . "<br>");
        $i++;
    endwhile;
}

/**
 * do while loop
 * @param $countTo
 */
function doWhileLoop($countTo) {
    $i = 1;
    do {
        print($i++ . "<br>");
    } while ($i <= $countTo);
}

forLoop(12);
whileLoop(12);
doWhileLoop(12);