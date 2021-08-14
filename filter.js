filter=function filter(elements, cb) {
  let newArray =[];
  for (let i = 0; i < elements.length; i++){
    if(cb(elements[i]))
     newArray.push(elements[i]);
    else
     null;
  }
  return newArray;
}
module.exports={filter};