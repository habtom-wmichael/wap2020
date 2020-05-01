/**
 * @habtom
 * problem6.js
 */


//  var counter=0;
// var count={
    
//      var add=function() {
//         return counter+=1;
//     },
//     var reset=function() {
//         return counter=0;
//     }
// }

//or

var count=(function(){
    var counter=0;
    return{
        add:function(){ return counter+=1},
        reset: function(){return counter=0}
    }
})();
console.log(count.add());

console.log(count.add());

console.log(count.reset());

// or 