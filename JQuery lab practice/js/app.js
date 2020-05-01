/**
 * @habtom 
 * app.js
 */

 "use strict"
 $(document).ready(function(){
    
     $("p").find("span").css("border","dotted");
     $("div").children().css("color","blue");
     $("#h3WelcomeText").text("Welcome to JQuery Demo").css("color","green");
     $("div p").last().replaceWith("<h2> Replaced successfully</h2>");
     $elm=$("#h3WelcomeText");
     $elm.addClass('special');
   
 })