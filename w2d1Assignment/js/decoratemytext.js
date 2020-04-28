"use strict"


 




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
        txtArea.style.fontSize =parseInt(txtArea.style.fontSize)+ 2 + "px";
        let today= new Date();
        document.getElementById("clock").innerHTML=today.toString();
    },500);
      // var txtArea = document.getElementById("txtarea1");
      // let today= new Date();
      // let currentTime= today.toString();
      // txtArea.style.fontSize =parseInt(txtArea.style.fontSize)+ 2 + "px";
      // //let t = `${n.getFullYear()}-${n.getMonth()}-${n.getDate()} ${n.getHours()}:${n.getMinutes}:${n.getSeconds}`;
      // document.getElementById('clock').innerHTML=t;
      // setTimeout(readTime,500);
  
  }






    // function reverString(str){
    //     if(str==="") return "";
    //     else return reverString(str.substr(1))+ str.charAt(0);
        
    // }
    // reverString("abc");

    