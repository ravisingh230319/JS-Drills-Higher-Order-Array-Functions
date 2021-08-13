const items = [1, 2, 3, 4, 5, 5];
let cb = (a) => a; 
//cb = (a) => console.log(a);
require('../each');
each(items,cb);