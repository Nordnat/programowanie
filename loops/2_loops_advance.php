#!/usr/bin/env php

<?php

/*
 * Create function with loop without using loop syntax.
 * Function can have two parameters: $limit, and $offset.
 *
 * Loop should print() from 0 to $limit
 */


/**
 * Recursive function counting from offset to limit
 * limit (number)  - the boundry limit of iteration
 * offset (number) - value function will count from
 */
function recursiveLoop($limit, $offset=0) {
    if ($offset < $limit) {
        print($offset);
        recursiveLoop($limit, $offset + 1);
    }
}
recursiveLoop(10);