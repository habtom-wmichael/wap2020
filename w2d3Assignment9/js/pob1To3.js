/**
 * person literal .java
 * prob 1
 * @Habtom
 */

    "use strict"

const person ={
    name:"",
    dateOfBirth:"",
    getName: function(){
        return this.name;
        
    },
    setName: function(newName){
        this.name=newName;
    },
    toString: function(){
        return `{"Name":"${this.name} "DateOfBirth":"${this.dateOfBirth}"}`
    }
};
const john= Object.create(person);
john.setName("John");//
john.dateOfBirth=("1998-12-10");
console.log(`The person's name is  ${john.getName()}`);
console.log(`${john.getName()} "was born on " ${john.dateOfBirth}`);

// 2 employee



const employee=Object.create(person)
employee.salary=0.0,
employee.hireDate= new Date(),
employee.doJob= function(jobTitle){
     console.log (`${this.name} is a ${jobTitle} who earns ${this.salary}`);

    }
   


    
const anna=Object.create(employee);
anna.setName("Anna");
anna.dateOfBirth="1990-05-08";
anna.salary=249995.50;
anna.doJob("Programmer")



//3 using Constructor

function Person2(name,dateOfBirth){
    this.name=name;
    this.dateOfBirth =dateOfBirth;
   
}

Person2.prototype.toString=  
function toStrinf(){
    //return (`name: ${this.name} DateOfBirth: ${this.dateOfBirth}` );
    return `{"Name":"${this.name} "DateOfBirth":"${new Intl.DateTimeFormat().format(this.dateOfBirth)}"}`
}

let peter = new Person2("Peter");
peter.dateOfBirth=new Date("1985-10-10");
console.log(peter.toString());



//***********++++++++++++==================************************************ */
function b() {
    console.log(x);
    function a() {
      console.log(x); //20
    }
    a();
  }
  var x = 20;
  b();
  






  class User {
    constructor(name = "Anonymous") {
    this.name = name; }
    sayHi() {
    console.log(`Hello, ${this.name}!`);
    }}
   const fred = new User(); 
    console.log(fred); 
    console.log(fred.__proto__); 
    console.log(User.prototype);
     fred.sayHi();
  const  bob = new User("Bob"); 
    console.log(bob);
     bob.sayHi();
