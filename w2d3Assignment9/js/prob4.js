/**
 * @habtom 
 * prob4 for webform1 and webform2
 */

$(document).ready(function(){

    $("#form").submit(function(e){
        e.preventDefault();
    });
    $("#submitButtonForm1").on('click',printToConsole);
    $("#poductbtn").on('click',displayInDiv);
});

function printToConsole(){ 
    const emailAddress1 = document.getElementById('email1').value ;
//const emailAddress =$("#email1").[0];
const userPassword=document.getElementById('pwd').value ;
const url =document.getElementById('url').value ;
console.log(emailAddress1);
console.log(userPassword);
console.log(url);
}
function displayInDiv(){
    const productNum = document.getElementById('proNum').value; 
    const quantty = document.getElementById('inputquantiyInStock4').value; 
    const name = document.getElementById('namef2').value; 
    const supplier = document.getElementById('supplier').value; 
    const unitPrice = document.getElementById('inputUnitPrice4').value; 
    const suppDate = document.getElementById('inputDate4').value; 
   $("#proNo").text(productNum);
   $("#quantity").text(quantty);
   $("#namef2").text(name);
   $("#supp").text(supplier);
   $("#price").text(unitPrice);
   $("#dateSup").text(suppDate);

}