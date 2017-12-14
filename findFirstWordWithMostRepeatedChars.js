function findMaxRepeatCountInWord(word) {
  // Break up individual words into individual letters.
  // Count the instances of each letter
  // Iterate all the counts and find the highest
  // Return this word's max repeat count
  var letters = word.split('');
  var new_obj = {};
  letters.forEach(function(l){
    if(l in new_obj){
      new_obj[l] += 1;
    }
    else {
      new_obj[l] =1;
    }
  })
  var keys = Object.keys(new_obj);
  var max = keys.reduce(function(keymx,elem){
     keymx = (new_obj[keymx] > new_obj[elem]) ? keymx : elem ;
     return keymx;
  })
  
  return new_obj[max]; 
}

function findFirstWordWithMostRepeatedChars(text) {
  var maxRepeatCountOverall = 0;
  var wordWithMaxRepeatCount = '';

  // Break up input text into words (space-delimited).
  var words = text.split(' ');
  // For each word...
  //  If that max repeat count is higher than the overall max repeat count, then
      //    update maxRepeatCountOverall
      //    update wordWithMaxRepeatCount
  words.forEach(function(word){
   var repeatCountForWord = findMaxRepeatCountInWord(word);
   if (repeatCountForWord > maxRepeatCountOverall){
     wordWithMaxRepeatCount = word;
     maxRepeatCountOverall = repeatCountForWord;
   }
  })
      
      
  return wordWithMaxRepeatCount;
}

console.log(findFirstWordWithMostRepeatedChars("Mansi is greatest girl"));


