find=function find(elements, cb) {
  
  let findElement = undefined;
  for ( let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) 
    { findElement = elements[i];
      break; 
    }
  }
  return findElement;
}
module.exports={ find };
