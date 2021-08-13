require('../reduce');
const items = [1, 2, 3, 4, 5, 5];
cb = ( curVal, nextVal )=> curVal+=nextVal;
console.log(reduce(items, cb));//This reduce function combines all elements into a single value going from left to right