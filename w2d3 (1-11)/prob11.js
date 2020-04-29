var employee=(function() {
    var privateName;
    var privateAge;
    var privateSalary;
    var publicAddress;
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
        return percentage * getSalary;
    }
    function publicIncrementAge(){
        return getAge +1;
    }
    function publicSetAddress(newAddress){
        publicSetAddress=newAddress;
    }
    function publicGetAddress(){
        return newAddress;
    }
    return {
        address:publicAddress,
        setAge: publicSetAge,
        setSalary:publicSetSalary,
        setName:publicSetName,
        increaseSalary:publicIncreaseSalary,
        incrementAge:publicIncrementAge,
        getAddress:publicGetAddress,
        setAddress:publicSetAddress
    }
})();