/*
 * Start functions for storehouse
 */

let stock = [];

/**
 * @param partName (string)
 */
function addToStock (partName) {
    stock.push(partName);
}

function takeFromStock () {
        return stock.shift();
}
