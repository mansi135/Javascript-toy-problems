// `filterFamilyMembers` accepts two arguments, a family tree object, and a truth test. `filterFamilyMembers` 
// returns an array, in any order, of the full names of family members who pass the passed in truth test.
// You will need to use recursion in your solution in order to handle nested family trees.
//
// A family member looks like this:
//
// {
//   firstName: 'Fred'
//   lastName: 'Zirdung'
//   location: 'San Francsico'
//   children: [/* ... */]
// }
//
// EXAMPLE:
//
var familyTree = {
  'firstName': 'Beth',
  'lastName': 'Johnson',
  'location': 'San Francisco',
  'children': [
    {
      'firstName': 'Beth Jr.',
      'lastName': 'Johnson',
      'location': 'Berkeley',
      'children': [
        {
          'firstName': 'Smitty',
          'lastName': 'Won',
          'location': 'Beijing',
          'children': []
        }
      ]
    },
    {
      'firstName': 'Joshie',
      'lastName': 'Wyattson',
      'location': 'Berkeley',
      'children': []
    }
  ]
};

var livesInBerkeley = function (familyMember) {
  return familyMember.location === 'Berkeley';
}


// returns ['Beth Jr. Johnson', 'Joshie Wyattson'];



var filterFamilyMembers = function (familyTree, truthTest) {
  // All your code in this function body

    var node = familyTree;
    var arr = [];

    var check = function(node,truthTest) {
      if (truthTest(node)) {
         arr.push(node.firstName + " " + node.lastName);
       }
       if (node.children.length > 0 ) {
        for(var i = 0; i < node.children.length; i++) {
          check(node.children[i], truthTest);
        }
      }
    }

    check(node,truthTest);
    return arr;

    
};

console.log(filterFamilyMembers(familyTree, livesInBerkeley));
