
var classList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
"Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
"Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function decorateClassListWithAges(classList) {
  // your code 
  
  var classListWithAges = classList.map(function(elem){
                      var new_obj = {};
                      new_obj['name'] = elem;
                      new_obj['age'] = getRandomIntInclusive(10,11);
                      return new_obj;
                      });    
                      
     
  return classListWithAges;
  }

function assertEqual(actual,expected,testName){
  if (actual === expected){
    console.log('passed');
  } else{
    console.log('FAILED [' + testname + '] Expected ' + expected + ', but got ' + actual);
  }
}
 
 
function assertWithinRange(min,max,actual,testName){
  if (actual >= min && actual <= max){
    console.log ('within range');
  } else {
    console.log ('Failed [' + testName + ']');
  }
}

// console.log(decorateClassListWithAges(classList));
var output = decorateClassListWithAges(classList);

assertEqual(Array.isArray(output),true,'should be an array');

output.forEach(function(obj){
  assertWithinRange(10,11,obj.age,'test age within limit');
})


