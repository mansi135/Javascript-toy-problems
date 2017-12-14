var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
      
    ]
  }
];



/////////////////////////////////////////////////// PROBLEM 1 //////////////////////////////////

function renderShoeList(designerName,shoes){
 return shoes.map(function(shoe){
    return [designerName,shoe.name,shoe.price].join(', ');
  })
}

function eachLine(obj){
  return renderShoeList(obj.name,obj.shoes).join('\n');
}

function renderAll(invName){
  var mapped_array = invName.map(function(inv){
    return eachLine(inv);
  });
  
  return mapped_array.join('\n');
}

//console.log(renderAll(currentInventory));

/////////////////////////////////////////////////// PROBLEM 2 //////////////////////////////////


function avgCostPerDesigner(shoes){
   return (shoes.reduce(function(total,item){
     return total += item.price ;
   },0))/shoes.length ;
}

function eachObject(obj){
  obj.averagePrice = avgCostPerDesigner(obj.shoes);
  delete obj.shoes;
  return obj;
}

// console.log(avgCostPerDesigner(currentInventory[0].shoes));

//console.log(eachObject(currentInventory[0]));

function overall(invName){
  var m = invName.map(function(inv){
    return eachObject(inv);
  });
   var newObj ={};
   newObj.designers = m;
   return newObj;
}

//console.log(overall(currentInventory));


/////////////////////////////////////////////////// PROBLEM 3 //////////////////////////////////

function renderBlackShoeList(designerName,shoes){
  var filtered = shoes.filter(function(shoe){
    return shoe.name.indexOf('black')>=0 ;
  });
  
 return filtered.map(function(shoe){
    return [designerName,shoe.name,shoe.price].join(', ');
  })
}

function eachLine1(obj){
  return renderBlackShoeList(obj.name,obj.shoes).join('\n');
}

function renderAll1(invName){
  var mapped_array = invName.map(function(inv){
    return eachLine1(inv);
  });
  
  return mapped_array.join('\n');
}

//console.log(renderAll1(currentInventory));


/////////////////////////////////////////////////// PROBLEM 4 //////////////////////////////////

function isLaced(string){
  return string.indexOf('lace') >=0;
}

function renderLace(shoes){
  var lacedShoes= shoes.filter(function(shoe){
    return isLaced(shoe.name);
  });
 
 //console.log(lacedShoes);
 
 var k = lacedShoes.map(function(item){
    item.nameWords = item.name.split(' ') ;
    item.targetWordIndex  = item.nameWords.findIndex(isLaced);
    delete item.name;
    delete item.price;
  return item;
  });
  
  return k;
}

function renderArray(currentInventory){
  var finalArray =[];
  currentInventory.forEach(function(obj){
    finalArray = finalArray.concat(renderLace(obj.shoes));
  });
    
  return finalArray;
}

console.log(renderArray(currentInventory));


/////////////////////////////////////////////////// ALTERNATE //////////////////////////////////



var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

var mainString = '';
var brand = '';

currentInventory.forEach(function(inv){
  
  brand = inv.name + ', ' ;
  var internalShoe = '';
  
  inv.shoes.forEach(function(shoe){
    internalShoe += brand + shoe.name + ', ' + shoe.price + '\n' ;
  })

  mainString += internalShoe ;
});

console.log(mainString);

