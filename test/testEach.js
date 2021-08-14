const items = [1, 2, 3, 4, 5, 5];
let cb = (a,i) => a; 
//cb = (a,i) => console.log(i);
require('../each');
each(items,cb);