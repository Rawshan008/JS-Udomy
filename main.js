// scope varable
// 1. Local Scope 
// 2. Global Scope

// let b; // global variable
// function myFun(){
//     let a = 50;  // local variable
//     b = 40;
//     console.log(a);
//     console.log(b);
// }
// myFun();

// function myFun1(){
//     b = 100;
//     console.log(b); //100
//     // console.log(a);  // a is not define
// }
// myFun1();
"use strict";
function myFun(){
    a = true;
    console.log(a); // true
}
myFun();


