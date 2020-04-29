// "use strict"


 




function displayHello(){
 alert("Hello, world!"); 
    var txtArea = document.getElementById("txtarea1");
    txtArea.style.fontSize = "4em";
    console.log(document.getElementById("txtarea1").style.fontSize);
    // txtArea.style.fontSize =parseInt(txtArea.style.fontSize)+ 2 + "px";
    // call to the timer
    document.getElementById("clock").onclick=startTimer;
    }
    function popMsg(){
        // the bling checkbox checked
        alert("Bling, checkbox checked!");
        var txtArea = document.getElementById("txtarea1");
        if (document.getElementById("bling").checked) {
        txtArea.style.fontWeight= "bold";
        txtArea.style.color="green";
        txtArea.style.textDecoration="underline";
    } else {
        txtArea.style.fontWeight= "normal";
       // txtArea.style.color="black";
    }
    }
    function startTimer(){
      setInterval(function(){
        var txtArea = document.getElementById("txtarea1");
       // txtArea.style.fontSize =parseInt(txtArea.style.fontSize)+ 2 + "px";
        let today= new Date();
        document.getElementById("clock").innerHTML=today.toString();
    },500);
      
  
  }






    // function reverString(str){
    //     if(str==="") return "";
    //     else return reverString(str.substr(1))+ str.charAt(0);
        
    // }
    // reverString("abc");



  // x=1;
  // var a=5;
  // var b=10;
  // var c= function(a,b,c){
  //  document.write(x);
//   console.log(a);
//   console.log(x);
//    // document.write(a);
//     var f = function(a,b,c){
//       b=a;
//       // document.write(b);
//       console.log(b);
//       b=c;
    
//       var x=5;
//     }
//     f(a,b,c);
//     // document.write(b);
//     console.log(b);
//     var x=10;
//   }
//   c(8,9,10);
//   // document.write(b);
//   console.log(b);
//  // document.write(x);
//   console.log(x);


var foo ='1';
function bar(){
  if(!foo){
    var foo='10';
  }
  alert(foo);
}
bar();