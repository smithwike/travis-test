var add =(a, b)=>a+b;
var subtract = (a,b)=>a-b;
var square = (a)=>a*a;

console.log(add(1,3));
console.log(subtract(1,3));
console.log(square(5));

module.exports = {add, subtract, square};