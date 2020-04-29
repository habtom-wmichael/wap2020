var count=(function(){
    var counter=0;
    return{
        add:function(){ return counter+=1},
        reset: function(){return counter=0},
        counter:counter
    }
})();
function make_adder(inc){
    var counter=0;
    return function(){
        return counter+=inc;
    }
}
var add5=make_adder(5);
console.log(add5())
console.log(add5())
console.log(add5())
console.log(add5())


var add7 = make_adder(7);
add7();
add7();
add7();
