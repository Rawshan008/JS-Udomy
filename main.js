// Javascript Loop
// For loop

for(var i=1; i<=10; i++){
    console.log(i); // 1 2 3 4 5 6 7 8 10
}
console.log("----------");
// define a array
const myObjext = ["Rawshan", "ali", 25, true];
for(var i=0; i<myObjext.length; i++){
    console.log(myObjext[i]);
}
console.log("----While Loop----");
var i = 0;
while(i<5){
    console.log(i);
    i++;
}
console.log("----------");
// print array by while loop
var i = 0;
while(i<myObjext.length){
    console.log(myObjext[i]);
    i++;
}

// Do while loop
console.log("--Do While loop--");
// print array by do while loop
var i = 0;
do{
    console.log(myObjext[i]);
    i++;
}while(i<myObjext.length);

