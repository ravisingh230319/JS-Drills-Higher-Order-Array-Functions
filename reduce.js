reduce=function reduce(elements, cb, startingValue) {
  let ind = startingValue || 0;
  const x = elements[ind];
  let  updated= x;
  for (let i = ind+1; i < elements.length; i++) {
    updated = cb(updated, elements[i])
  }
  return updated;
}
module.exports={reduce};
