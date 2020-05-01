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
//anna.dateOfBirth="1990-05-08";
anna.salary=249995.50;
anna.doJob("Programmer")



//3 using Constructor

function Person2(name,dateOfBirth){
    this.name=name;
    this.dateOfBirth =dateOfBirth;
   
}

Person2.prototype.toString=  
function toStrinf(){
    return (`name: ${this.name} DateOfBirth: ${this.dateOfBirth}` );
   // return `{"Name":"${this.name} "DateOfBirth":"${new Intel.DateTimeFormat().format(this.dateOfBirth) }"}`
}

let peter = new Person2("Peter","1985-10-10");
//peter.dateOfBirth=("1985-10-10");
console.log(peter.toString());

