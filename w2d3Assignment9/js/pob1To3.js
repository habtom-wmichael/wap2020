/**
 * person literal .java
 * prob 1
 * @Habtom
 */

    "use strict"

const person ={
    name: "",
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
console.log("The person's name is " +john.getName());
console.log(john.getName() +"was born " + john.dateOfBirth);

// 2 employee



let employee={
    salary:0,
    hireDate: null,
    doJob: function(jobTitle){
log.console(this.getName +"is a"+ jobTitle + "who earns " +this.salary);

    }
}

employee=Object.create(person);


let anna = Object.create(employee);
anna.setName("Anna");
anna.dateOfBirth="1990-05-08";
anna.salary=249995.50;
//anna.doJob("Programmer");

//3 using Constructor

function Person2(name,dateOfBirth){
    this.name=name;
    this.dateOfBirth =dateOfBirth;

}

Person2.prototype.toString=  
function toStrinf(){
    return ("name:" +this.name+"," +" DateOfBirth:"+this.dateOfBirth );
}

let peter = new Person2("Peter");
peter.dateOfBirth=("1985-10-10");
console.log(peter.toString());

