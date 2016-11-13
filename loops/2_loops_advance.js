#!/usr/bin/env node

/*
 * Create two function with loops without using loop syntax.
 * First function can have two parameters: limit, and offset.
 * Second function must have only one parameter: limit.
 *
 * Each loop should console.log() from 0 to limit
 */


function twoParameterLoop(limit, offset) {

}

// function oneParameterLoop (limit) {
//     let i = 0;
//
//     if (i < limit) {
//         console.log(i);
//         i += 1;
//         if (i < limit) {
//             console.log(i);
//         }
//     }
// }
//
// oneParameterLoop(5);

// function oneParameterLoop (limit) {
//     let i = 0;
//
//     if (i < limit) {
//         console.log(i);
//         return oneParameterLoop(i + 1);
//     }
// }
// oneParameterLoop(10);

function oneParameterLoop (limit) {
    if (limit >= 0) {
        console.log(limit);
        return oneParameterLoop(limit - 1);
    } else {
        return limit;
    }
}
oneParameterLoop(10);



