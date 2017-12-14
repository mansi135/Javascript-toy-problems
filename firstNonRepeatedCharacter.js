/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here

  var arr = string.split('');
  var uniq = [];


  for(var i = 0; i < arr.length; i++) {
  	if (arr.slice(0,i).indexOf(arr[i]) === -1) { 		//slice will make a copy
  		uniq.push(arr[i]);
  	} else {
                // check if we have not already sliced the array
  		index = uniq.indexOf(arr[i]);					// splice will modify original array
      if (index > -1) {
        uniq.splice(index,1);
      }
  		
  	}
  	
  }

  return uniq[0] || null;

};


//AABCABD
//AABCAC
//ABCA
//AAAACX

