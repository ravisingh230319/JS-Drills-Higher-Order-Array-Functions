map=function map(elements, cb) {
  let newArray = [];
  for ( let i of elements ){
    newArray.push(cb(i));
  }
  return newArray;
}
module.exports = {map};
