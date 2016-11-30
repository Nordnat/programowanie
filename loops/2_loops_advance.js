#!/usr/bin/env node

/*
 * Create two function with loops without using loop syntax.
 * First function can have two parameters: limit, and offset.
 * Second function must have only one parameter: limit.
 *
 * Each loop should console.log() from 0 to limit
 */

/**
 * Recursive function counting from offset to limit
 * @param limit (number)  - the boundry limit of iteration
 * @param offset (number) - value function will count from
 */

function recursiveLoop (limit, offset=0) {
    if (offset < limit) {
        console.log(offset);
        recursiveLoop(limit, offset + 1);
    }
}
recursiveLoop(10);
