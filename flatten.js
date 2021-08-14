flatten=function flatten(elements) {
    let flatArray = [];
  
    function remove( elem) {
      if(Array.isArray( elem )) 
        isElements(elem);
      else 
        flatArray.push(elem);
    }
    function isElements(array) {
      for (let i=0 ; i<array.length; i++){
         remove(array[i]);
      }
    }
    isElements(elements);
    return flatArray;
  }
  module.exports={ flatten };