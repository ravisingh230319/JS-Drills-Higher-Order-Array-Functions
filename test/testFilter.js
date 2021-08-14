require('../filter');
const items = [1, 2, 3, 4, 5, 5];
cb = ( x ) => x>2 ? true : false;
console.log(filter(items, cb));