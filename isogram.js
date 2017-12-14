/*

An isogram is a word that has no repeating letters, consecutive or non-consecutive. 

Write and test a function that determines whether a string is an isogram. 

Notes:
* Assume your input is only letters.
* Assume the empty string is an isogram. 
* Ignore case.
* Follow the pseudocode exactly!

*/

function isIsogram(text) {
  var letters = text.split('');
  letters = letters.map(function(l){
    return l.toUpperCase();
  })
  
  letters = new Set(letters);
  
  return text.length === letters.size;
}


/*
function isIsogram1(text) {
  var letters = text.split('');
  letters= letters.reduce(function(set1,char){
      return set1.add(char.toUpperCase());
   },new Set());
  

  return text.length === letters.size;
}


console.log(isIsogram1('mansi'));     */


function assetEquals(actual,expected,testName){
  if(actual === expected){
    console.log('passed');
  }
  else {
    console.log('FIALED' + testName);
  }
}


assetEquals(isIsogram(""),true,'Empty String should be Isogram');
assetEquals(isIsogram("cAC"),false,'Ignore Case');
assetEquals(isIsogram('mmm'),false,'non-isogram');
assetEquals(isIsogram('man'),true,'isogram');




