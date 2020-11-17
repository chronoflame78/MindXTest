function findUnMatched(arr1, arr2){
    var matchedArr = [];
    for( a of arr1){
      for(b of arr2){
        if(a === b){
          arr1 = arr1.filter(x => x!== a);
          arr2 = arr2.filter(x => x!== a);
        }
      }
    }
    let result = arr1.concat(arr2);
    console.log(result);
  }
  
  let arr1 = [1,2,"a"];
  let arr2 = [1,3,"b"];
  
  findUnMatched(arr1, arr2);