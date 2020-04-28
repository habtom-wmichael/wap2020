
"use strict" // used to handle errors and display errors
//comment  a sigle line comment
/* multline comment
 */

// variable declaration
var a;
// var intialization
a=1; //assignment statement
var b=2;
//ES6+ java script version.. TC39(group people professionals for PL srtd),
// ECMAScript, Brendan Eich-(js founder)

const c=3;
//c=8; //will has runatime error
let d =5;
console.log(d);
d=c+2;
console.log(d);
var i;
i=6;
console.log(i);
// data types 
//Number e.g 1,1.5
// boolean true , false
//Null , Undefined
let j=null;
let k;  // undefined
console.log(k);

// String 
const s= "Hello WAP";
console.log(s);

//Obeject  e.g obect literal
const student= {
    studentId=1003,
    name="Habtom";
}
// e.g Array , Function

function sum(n1,n2){
    return n1-n2;
// Function declaration
}
//function experession
const sum2= funtion(n1,n2){ //annonimous funtion
return (n1+n2);
}
//statement termination semi-colon (optional : but recommended)
 const sumOf1and2= sum2(1,4);

let studentId=1002;


// operators 
//Equality: == (type coesion),===( strict equality)
const n1="1";
const n2=1;
console.log(n1==n2);     //true
console.log(n1==n2);    //false
//operands
//Expressions
//operators precidence
//Truthy vs Falsy
//logical boolean operators /expressions 
//Linter show you errors if you break the rules of convention e.g 
//Arrays
const numbers= [1,2,3];
const people = [{id:1,name:"yummy"},{ id=:2, name: "dani"}];

if(2>1){
    console.log("hey");
}

for (let index = 0; index <= 10; index++) {
    console.log(index);
    
}
//ternary operation

const r=(1<2)?1:2;

