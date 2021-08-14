const items = [1, 2, 3, 4, 5, 5];
require('../find');
cb = (b) => b==="Compare values"? true : false;
console.log(find(items, cb));