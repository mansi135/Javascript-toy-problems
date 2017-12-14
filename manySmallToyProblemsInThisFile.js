/*Flip every pair of characters in a string.


Example:
var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
*/


function flip(str){
  
  str = str.split('');
  var temp ='';
  
  for (var i=0; i<str.length-1; i = i+2){
    temp = str[i];  
    str[i] = str[i+1]; 
    str[i+1] = temp;
  }
  
  str = str.join('');
  return str;
}

console.log(flip('check out how interesting this problem is, it\'s insanely interesting!'));






////////////////////////////////////////////////////////////////////////////////////////////////
/*Flip every chunk of n characters in a string, where n is any positive integer greater than 1.

Note that this is intentionally very similar to the previous problem.

Please focus on getting a working solution with the tools you know well.

Practice the interactive/collaborative interview style that's described in the documentation.

Example:
var input = 'a short example'; 
var output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma

Breaking this example down piece by piece:
'a sho' -> 'ohs a'
'rt ex' -> 'xe tr'
'ample' -> 'elpma'

-> 'ohs axe trelpma'
*/

function flipEveryNChars(input, n){
 
  arr = input.split('');
  final = [];
  for (var i=0; i<arr.length-4; i=i+5){
    arr1 = arr.slice(i,n+i);
    arr1.reverse();
    final = final.concat(arr1);
  }
  
  final = final.concat(arr.slice(i,arr.length));  //concat the remainder as-is
  final = final.join('');
  
  return final;
}

var input = 'a short exampleijklx'; 
var output = flipEveryNChars(input, 5);


console.log(output);





////////////////////////////////////////////////////////////////////////////////
/*Given a string of even and odd numbers, find which is the sole even number or the sole odd number.
  
The return value should be 1-indexed, not 0-indexed.

Examples :
detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the numbers are odd
*/


function detectOutlierValue(str){

  function isOdd(numb){
    if (numb %2 !== 0) 
      return numb;
  }
  
  function isEven(numb){
    if (numb %2 === 0)
      return numb;
  }
  
  str = str.split(' ');
  str = str.map(function(inp){
    return parseInt(inp);
  });
  
  //var odd= str.filter(isOdd);
  //var odd = str.findIndex(isOdd);
  //var even =str.findIndex(isEven);
  var countOdd = 0; 
  var countEven = 0;
  var indexOdd = -1;
  var indexEven = -1;
  
  for (var i=0; i<str.length; i++){
    
    if(isOdd(str[i])){
      countOdd++;
      indexOdd = i+1;
    } else {
      countEven++;
      indexEven = i+1;
    }
    
  }
  
  if (countOdd === 1 && countEven > 1) 
    return indexOdd ;
  else if (countEven === 1 && countOdd > 1)
    return indexEven ;
  else 
    return -1 ;
  
}


console.log(detectOutlierValue("1 10 1 1"));




///////////////////////////// TRANSPOSE TWO STRINGS You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.
  /*
 3│ e.g. transposeTwoStrings(['Hello','World']);
 4│ 
 5│ should return
 6│ 
 7│ H W  
 8│ e o  
 9│ l r  
10│ l l  
11│ o d  */


function transpose1(arr){
  
  var max = arr.reduce(function(a,b){
    return a.length > b.length ? (a.length):(b.length) ;
  });

  for (var i=0 ; i<max; i++){
    
    string = "";
    
    for(var j=0; j<arr.length; j++){
      if (arr[j].charAt(i))
        string += arr[j].charAt(i) + " ";
      else 
        string += "  ";
    }
    console.log(string + "\n" );
    
  }
  
}


transpose1(['Hello','Worlduuu','max','minimumpoo']);



//////////////////////////////////////////////////////////////////////////////////////
/*Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

Example:

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
*/


function findPairForSum(arr,numb){
  var final =[];
  for (var i=0; i<arr.length; i++) {
    for (var j=i+1; j<arr.length; j++) {
      if (arr[i]+arr[j] === numb){
        final.push ([arr[i],arr[j]]);
      }
    }
  }
  
  return final;
}

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 7);
console.log(pair); 



///////////////////////////////////////////////////////////////////////////////////
/*Is one string a rotated version of another?

For example:
String 1: 'hello world'
String 2: 'orldhello w'
*/

function isRotated(str1, str2) {
  strc = str1+str1;
  if(strc.indexOf(str2) !== -1 && str2.length === str1.length ){
    return "Its a Rotated String!!"
  }
  else 
    return "not rotated";
}


console.log(isRotated('hello world',' worldhello'));


///////////////////////////////////////////////////////////////////////////////////
// Write your code here
// Least occuring character 

function smallest(str){
  var newobj = {};
  
  for(var i=0; i<str.length; i++)
  { if (str.charAt(i) in newobj) 
    {
    newobj[str[i]] += 1;
    } else {
      newobj[str[i]] = 1;
    }
  } 
  
  console.log(newobj);
  
 /* var smallest1 = 2;
  var k ='';
  
  for(var key in newobj)
  { if (newobj[key]<smallest1) {
      smallest1 = newobj[key];
      k = key; 
    }
  }
  */
  
  var k ='';
  var smallest = Object.keys(newobj).reduce(function(sm,elem){
    if (newobj[elem] < sm){
      sm = newobj[elem];
      k = elem;
    }
    return sm;
  },+Infinity);
  
console.log(k);
return smallest ; 
  
}

console.log(smallest("abbc"));


////////////////////////////////////////////////////////////////////// 
//Write a JavaScript function to find longest substring in a given a string without repeating characters.
function longestSub(str){
  
  var substr = "";
  var lngsubstr = 0;
  var lng ="" ;
  
  for (var i=0; i<str.length; i++){
    
    substr = str.substring(i,i+1);
    
    var j = i+1;
    
    while( substr.indexOf(str[j]) === -1 && j<str.length ){
      substr = str.substring(i,j+1);
      j++;
    }
   
    if(lngsubstr < substr.length){
      lngsubstr = substr.length;
      lng = substr;
    } 
    
  }
  
//  console.log(lng);
//  console.log(lngsubstr);
}

//longestSub("mansi is magical monster");


///////////////////////////////////////////////////////////////////////////////////////////////ODD-EVEN COUNT 

var numbers = [5, 3, 8, 6, 9, 1, 0, 2, 2];

var oddEvenCounts = numbers.reduce(function(counts, number) {
   if (number%2 === 0) {
     counts["even"]++;
   } else {
     counts["odd"]++;
   }
   return counts;   // dont forget to return object
 }, {even : 0, odd : 0});  //dont forget to initialize 

//console.log(oddEvenCounts);


///////////////////////////// TRANSPOSE TWO STRINGS You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.
  /*
 3│ e.g. transposeTwoStrings(['Hello','World']);
 4│ 
 5│ should return
 6│ 
 7│ H W  
 8│ e o  
 9│ l r  
10│ l l  
11│ o d  */


function transpose1(arr){
  
  var max = arr.reduce(function(a,b){
    return a.length > b.length ? (a.length):(b.length) ;
  });

//  console.log(max);
  
  for (var i=0 ; i<max; i++){
    
    string = "";
    arr.forEach(function(elem){
      if (elem[i])
        string += elem[i] + " ";
      else 
        string += "  ";
    });
    console.log(string + "\n" );
    
  }
  
}


transpose1(['Hello','Worlduuu','max','minimumpoo']);


//////////////////////////////////////////////////////////////////////////////////////////////////////

var makeStopwatch = function() {
  var elapsed  = 0;
  var stopwatch = function() { return elapsed ;};
  var increase = function() { elapsed++; };
  setInterval (increase, 1000);
  return stopwatch;
}

var stopwatch1 = makeStopwatch();
var stopwatch2 = makeStopwatch();
stopwatch1();
stopwatch2();


//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////SMALLEST DIVISIBLE NUMBER//////////////////////////////

function smallestDivisibleNumber(n){

      smallestNumb = n+1;
      flag = true;

      while (true) {
        
        for (var i=1; i<=n; i++){
          if (smallestNumb%i !== 0){
            flag = false;
            break;
          }
        } 
        
        if(flag){
          return smallestNumb;
        }
        else {
          smallestNumb += 1 ;
          flag = true;
        }
      
      }
      
    }

smallestDivisibleNumber(20);



//////////////////////////////////////////////////////////////////////////////////////////////////////

var githubStickers = [
  {
    name: "Octocat",
    qty: 12
  }, 
  {
    name: "Luchadortocat",
    qty: 2
  }, 
  {
    name: "Gracehoppertocat",
    qty: 5
  }
]


var res12 = _.reduce(githubStickers,function(arr,obj) {
   if (obj["qty"] <= 5) {
    arr.push(obj);
   }
   return arr;
},[]);


//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////BINARY SEARCH//////////////////////////////


function binary_search(l,a){
  var result ='';  

    if (l.length === 1){
        if (a === l[0])
            result="Found" ;
        else
            result="Not Found";
    }
    else{
        var mid_elem=l[parseInt(l.length/2)];
        if (a==mid_elem)
            result="Found";
        else if (a < mid_elem)
            result=binary_search(l.slice(0,parseInt(l.length/2)),a);
        else if (a > mid_elem)
            result=binary_search(l.slice(parseInt(l.length/2)),a);
        else
            result="Not Found";
    }
    return result;
    
}

console.log(binary_search([1,2,3,4,5,6,7,8,14],10));
