

function Student(firstname){
    this.firstname=firstname;
    this.studentId=studentId;
    this.lastName=lastName;
    this.cgpa=cgpa;
    
    
    
}
let studen1= new Student("Anabelle");

studen1.studentId="000-61-0001";
studen1.lastName="smith";
studen1.cgpa=3.05;

let student2= new Student("Bob");

studen1.studentId="000-61-0002";
studen1.lastName="Jones";
studen1.cgpa=2.96;


Student.toCSVString=function(){
        console.log (`${this.studentId},  ${this.firstname},  ${this.lastName} ,  ${this.cgpa}`);
    
        };
        student2.toCSVString();


        var myCalculator=(function() {
           
           var num1;
           var num2;

            function doAddition(num1,num2) {
                return (num1 + num2);
               
            }
            function doMultiplication(num1,num2) {
                return (num1 *num2);
               
            }
           
            }
           
            return {
                add:doAddition,
                product: doMultiplication
                
            }
        })();   