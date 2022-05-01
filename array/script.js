let fruits = ["apple","orange","banana"];
console.log(fruits);
console.log(fruits[2]);
fruits[0]="cocount";
console.log(fruits);
fruits.push("greaps"); //add element at last
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.unshift("mango");
console.log(fruits);

let lesth = fruits.length;

console.log(lesth);

let index = fruits.indexOf("mango");
console.log(index);