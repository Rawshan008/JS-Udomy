// function decleration
function fn(a, b){
    return a + b;
}
console.log(fn(20,52));

// anononmous function decleration
var fn1 = function (a, b){
    return a + b;
} 
console.log(fn1(34, 5));

//IIFE function excution
(function(){
    console.log("I am IIFT excution");
})();

// setTimeout function
setTimeout(function(){
    console.log("I am IIFT excution");
}, 3000);