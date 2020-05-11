/**
 * @habtom
 * problem10.js
 */
var employee=(function() {
    var privateName="Default";
    var privateAge=0;
    var privateSalary=0.0;
    
    function publicSetAge(newAge) {
        privateAge=newAge;
    }
    function publicSetSalary(newSalary) {
        privateSalary=newSalary;
    }
    function publicSetName(newName) {
        privateName=newName;
    }
    function privateGetAge() {
        return privateAge;
    }
    function privateGetSalary(){
        return privateSalary;
    }
    function privateGetName(){
        return getName;
    }
    function publicIncreaseSalary(percentage){
        return getSalary + percentage * getSalary;
    }
    function publicIncrementAge(){
        return getAge +1;
    }
   
    return {
        setAge: publicSetAge,
        setSalary:publicSetSalary,
        setName:publicSetName,
        increaseSalary:publicIncreaseSalary,
        incrementAge:publicIncrementAge
    }
})();