// // Simple functions
// function myFunction(){}
// console.log(myFunction); // myFunction(){}
// console.log(myFunction()); // Undefine
// myFunction(); // Nothing to Show
// const resultFunction = myFunction();
// console.log(resultFunction); // Undefine
// console.log(myFunction(10)); // Undefine

// Paremeter of a Functions
// function myFunction(a,b){
//     console.log(a);
//     console.log(b);
// }
// myFunction();  // undefine undefine // theere are no elenemt in the functions
// myFunction(10,30);  // 10  30
// console.log(myFunction(10,10)); // 10 10 undefined because no return keyword in the function
// console.log(a) // Uncaught ReferenceError: a is not defined

// function myFunction(a, b){
//     console.log(a);
//     return a+b;
//     console.log(b); // no function is excution becaue after return no code are run.
// }
// // myFunction(10, 30); // not show because it there are no console function
// console.log(myFunction(10, 30)); // 40

// outerFunction and innerFunction process
// function outerFunction(a, b){
//     function innerFunction(sum){
//         return sum*sum;
//     }
//     const sum = a+b;
//     const squere_root = innerFunction(sum);
//     console.log(squere_root);
// }
// outerFunction(2, 2);


// function k variable ar modde assign kora
const myFunction = function(a, b){
    return a+b;
}
console.log(myFunction(50,20));