/**
 * While Loop
 * @param countTo
 */
function whileLoop (countTo) {
    var i = 1;

    while (i <= countTo) {
        console.log(i + " ");
        i += 1;
    }
}

/**
 * do while loop
 * @param countTo
 */
function doWhileLoop (countTo) {
    var i = 1;

    do {
        console.log(i + " ");
        i += 1;
    }
    while (i <= countTo);
}


/**
 * for loop
 * @param countTo
 */
function forLoop (countTo) {
    var i;

    for (i=1; i <= countTo; i++) {
        console.log(i);
    }
}

forLoop(number);
console.log('---------------------');
whileLoop(number);
console.log('---------------------');
doWhileLoop(number);
