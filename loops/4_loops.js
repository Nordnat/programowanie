/*
 * Create two functions with array loops without using loop syntax.
 *
 * First function can have two parameters: arr, and offset.
 * Second function must have only one parameter: arr.
 *
 * You can not use function properties to hold current state of loop.
 *
 * Each loop should console.log() every single item in given array.
 */

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Recursive function iterating through array
 * @param arr - array to iterate through
 * @param offset - value of array index to start from
 */
function recursiveFunctionOne (arr, offset=0) {
    if (offset < arr.length) {
        console.log(arr[offset]);
        recursiveFunctionOne(arr, offset + 1);
    }
}
// recursiveFunctionOne(arr);

/**
 * Recursive function iterating through array
 * @param arr - array to iterate through
 */
function recursiveFunctionSecond (arr) {
    if (arr.length > 0) {
        let arrayElement = arr.shift();

        console.log(arrayElement);
        recursiveFunctionSecond(arr);
    }
}
recursiveFunctionSecond(arr);
