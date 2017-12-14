//Example-1
var arr = [1,2,3,4];

var sum = arr.reduce(function(total,elem){
  return total+elem;
},0);

console.log(sum);



//Example-2
var data = [
  {a: 'happy', b: 'robin', c: ['blue','green']}, 
  {a: 'tired', b: 'panther', c: ['green','black','orange','blue']}, 
  {a: 'sad', b: 'goldfish', c: ['green','red']}
];

var colors = data.reduce(function(allColors,obj){
  obj.c.forEach(function(elem){
    if(allColors.indexOf(elem) === -1)
      allColors.push(elem);
  });
  return allColors;
},[])

console.log(colors);