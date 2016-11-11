let number = 12;

/**
 * @param {number} countTo sets the boundry imit of loop iteration
 */
function whileLoop (countTo) {
    let i = 0;

    while (i < countTo) {
        console.log(i);
        i += 1;
    }
}

/**
 * @param {number} countTo sets the boundry imit of loop iteration
 */
function doWhileLoop (countTo) {
    let i = 0;

    do {
        console.log(i);
        i += 1;
    }
    while (i < countTo);
}


/**
 * @param {number} countTo sets the boundry imit of loop iteration
 */
function forLoop (countTo) {
    let i;

    for (i=0; i < countTo; i += 1) {
        console.log(i);
    }
}

forLoop(number);
console.log('---------------------');
whileLoop(number);
console.log('---------------------');
doWhileLoop(number);
