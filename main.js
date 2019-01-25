let a, b;
a = 3;
b = 2;
console.log(a + b);// 5
console.log(a - b); // 1
console.log(a * b); // 6
console.log(a / b); // 1.5

// if  a = 'abs' is then 
a = 'abc';
b = 10;
console.log(a + b); //abc10
console.log(a - b); // NaN
console.log(a * b); // NaN
console.log(a / b); // NaN

a = "Hello";
b = "World";
console.log(a + " " + b); // Hello World

// Unary Plus
a = "1";
console.log(a); //  Output 1 is string
console.log(+a); //  Output 1 is Nubmer

a = undefined;
console.log(a);  //undefined
console.log(+a);  //NaN

// Unary Minus
a = 4;
console.log(-a);  // -4 (Number)
a = undefined;
console.log(-a);  // NaN

// ++
a = 10;
console.log(++a); // 11
a = 10;
console.log(a++); //10

console.log('------');

// Comparison Operator
a = 5;
b = 7;
c = 7;
console.log(a > b); // false
console.log(a < b); // true
console.log(b>=c); // true
console.log(b<=c); // true

console.log('------');

// Equrlity Operator

let myString = '0';
let myNumber = 0;
let myBoolean = false;
console.log(myString == myNumber); // true
console.log(myString === myNumber); // false 
console.log(myString == myBoolean); // true 
console.log(myNumber == myBoolean); // true 

console.log('------');
// Logical Operator (||,&&)
console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); //false
// logical &&
console.log(true && true); // true
console.log(false && true); // true
console.log(true && false); // true
console.log(false && false); // true


