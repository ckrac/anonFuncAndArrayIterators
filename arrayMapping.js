/*
create a var to store result
access x and y values for each obj
sqrt (x power of 2 + y power of 2)
return to new var
*/


var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];


var result = input.map(function(obj) {

  var z = Math.sqrt(Math.pow(obj.x, 2) + Math.pow(obj.y, 2));
  return z

});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);

// console.log(result[0]);
// console.log(result[1]);
// console.log(result[2]);

