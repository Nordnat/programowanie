/*
 * Start functions for storehouse
 */

let carPartsInStock = ['alternator', 'klocki hamulcowe'];

/**
 * @param partName (string)
 */
function addToStock (partName) {
    carPartsInStock.push(partName);
}
addToStock('silnik');

function takeFromStock () {
    if (carPartsInStock.length > 0) {
        carPartsInStock.shift();
    }
}
takeFromStock();
