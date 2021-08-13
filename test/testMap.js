require('../map');
const items = [1, 2, 3, 4, 5, 5];
let cb = (a) => a+1; 
console.log(map(items, cb));