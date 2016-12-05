/*
 * Start functions for storehouse
 */

let inStock = [];

/**
 * @param partName (string)
 */
function addToStock (partName) {
    inStock.push(partName);
}

function takeFromStock () {
        return inStock.shift();
}
