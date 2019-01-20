/*
* Javascript Object By Dot notation
*/
// object decleration 
 const a = {
     name: "Rawshan",
     age: 25,
 }
 console.log(a);  //{name: "Rawshan", age: 25}
 
 // specefic property k console log kora
console.log(a.name);  //Rawshan
console.log(a.age);  //25

// change the value of object property
a.name = "Rawshan Arshalan";
console.log(a); //{name: "Rawshan Arshalan", age: 25}
console.log(a.name);  //Rawshan Arshalan

// add new property in the object
a.depertment = "EEE";
a.year = 2020;
console.log(a); //{name: "Rawshan Arshalan", age: 25, depertment: "EEE", year: 2020}
console.log(a.year);  //2020

// delete the property of the object
delete a.name;
console.log(a); //{age: 25, depertment: "EEE", year: 2020}

/*
* Object Operation by Bracket Notation
*/
const myCity = {
    name: "Narail",
    country: "Bangladesh"
}
console.log(myCity["name"]); // Narail

// Change the property value of 
myCity["name"] = "Khulna";
console.log(myCity); //{name: "Khulna", country: "Bangladesh"}

// add new property in the Object
myCity["thana"] = "Narail Too";
console.log(myCity); //{name: "Narail", country: "Bangladesh", thana: "Narail Too"}

// Delete Property
delete myCity["name"];
console.log(myCity); //{country: "Bangladesh", thana: "Narail Too"}

// Nested Object
// nested object is and same process

const myPost = {
    name: "My Post",
    count : 4,
    info: {
        prop: "No Prop",
        num: 8
    }
}
console.log(myPost); //{name: "My Post", count: 4, info: {…}}
console.log(myPost.info.num); // 8
console.log(myPost.info["num"]); // 8