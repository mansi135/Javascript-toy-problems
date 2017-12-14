/*
Find the longest single-word palindrome within a phrase.
The phrase will only contain letters (no symbols, punctuation, or numbers).
Your palindrome detection should be case-insensitive.
If there are multiple longest palindromes of equal length, return the last one.
*/ 
function findLongestPalindrome(sentence) {
  // split sentence into words
  var words = sentence.split(' ');
  
  // iterate words and collect the palindromes
  var palindromes = words.filter(isPalindrome);
 /* words.forEach(function(word){
    if(isPalindrome(word)){
      palindromes.push(word);
    }
  }) */
  
  
  
  // sort the list of palindromes by word length
  palindromes.sort(sortAscendingByLength);
  

  // return the largest item in the sorted list
  //return palindromes[palindromes.length-1];
  return palindromes.pop();
}


function reverseString(string) {
  return string.split('').reverse().join('');
}

function isPalindrome(word) {
  // hint: you can detect palindromes by comparing a string to its reverse
  word = word.toLowerCase();
  return word === reverseString(word);

}

function sortAscendingByLength(a, b) {
   return a.length - b.length ;
}


console.log(findLongestPalindrome("malayalam madam ana grarg"));

