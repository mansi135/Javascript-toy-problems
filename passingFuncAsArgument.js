
var isEven = function(num){
  if(num%2===0) return true;
  else return false;
}



function filter(funcName,arr){
  new_array=[];
  for (var i=0; i<arr.length; i++){
    if(funcName(arr[i])) 
      new_array.push(arr[i]);
  }
  
  return new_array;
}

console.log(filter(isEven,[1,2,3,4,5]));  //Method1


console.log(filter(function ispositive(num){
  if (num>0) return true;
  else return false;
},[-1,2,3,4,5]));