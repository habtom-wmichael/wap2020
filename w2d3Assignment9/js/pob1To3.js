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
    }
};
const john= Object.create(person);
john.setName("John");//
john.dateOfBirth=("1998-12-10");
console.log(`The person's name is  ${john.getName()}`);
console.log(`${john.getName()} "was born " ${john.dateOfBirth}`);

// 2 employee



let employee={
    salary:0.0,
    hireDate: new Date(),
     doJob: function(jobTitle){
     return (`${this.getName} is a ${jobTitle} who earns ${this.salary}`);

    }
   
}
// employee.doJob=function(){
//     console.log (`${this.getName} is a ${jobTitle} who earns ${this.salary}`);

//     };
    
employee=Object.create(person);
employee.setName("Anna");
employee.dateOfBirth="1990-05-08";
employee.salary=249995.50;




//3 using Constructor

function Person2(name,dateOfBirth){
    this.name=name;
    this.dateOfBirth =dateOfBirth;

}

Person2.prototype.toString=  
function toStrinf(){
    return (`name: ${this.name} DateOfBirth: ${this.dateOfBirth}` );
}

let peter = new Person2("Peter");
peter.dateOfBirth=("1985-10-10");
console.log(peter.toString());

