/**eLibrary.js
*@author habtom W.michael
 */



(function(){
    "use strict"
    getAllBooks();

    function getAllBooks(){
        fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list")
        .then((response)=>{
            if(response.ok){
                return response.json();
            }else{
                return Promise.reject({status:response.status,statusText: response.statusText});
            }
        })
        .then(books=>{
            let content="";
            if(books.length>0){
                books.forEach(function(book, i){
                    content+=`
                    <tr>
                        <th scope="row">${i+1}.</th>
                <td>${book.isbn}</td>
                <td>${book.title}</td>
                <td>${new Intl.NumberFormat("en-US",{style:"currency", currency:"USD",minimumFractionDigits:2}).format(book.overdueFee) }</td>
                <td>${book.publisher}</td>
                <td>${book.datePublished}</td>
                    </tr>
                    `;
                });
            }else{
                content+=`
                <tr>
                <td style="text-align:center;" colspan="6" >We are sorry, currently no Books Available</td>
                </tr>
                `;
            };
            $("#addNewBookForm").hide();
            document.querySelector("#tableBodyBookList").innerHTML=content;

        })
        .catch(errs=>{
            const tableBodyErrorMsg= `
            <tr>
            <td style="text-align:center;" colspan="6">
            <p style='color:#cc0000'>we are sorry. Service is unavailable. Please try again later.</p>
            </td>
            </tr>
            `;
            $("#addNewBookForm").hide();
            document.getElementById("#tableBodyBookList").innerHTML=tableBodyErrorMsg;
           
            console.log("Error message",errs);
        });
    }
//************ */

    $("#buttonNewBook").click(function(event){
        event.preventDefault();
      
        $("#addNewBookForm").show();
        $("#bookDatTable").hide();
        const formstate = $("#buttonNewBook").attr("data-formstate");
        if(formstate=="off"){
            $("#buttonNewBook").text("Close");
            $("#listOfBooks").text("New Book Registration Form");
            $("#divNewBookForm").show("slow");
            $("#isbn").focus();
            $("#buttonNewBook").attr("data-formstate","on");
        }else{
            $("#buttonNewBook").text("Register A New Book");
            $("#listOfBooks").text("List Of All Books");
            $("#divNewBookForm").show("slow");
            $("#isbn").focus();
            $("#buttonNewBook").attr("data-formstate","off");
        }

    });
// on submitting the form
function savingNewBook(){
    const bookRegistrationForm=document.getElementById("addNewBookForm");
    const txtIsbn= $("#isbn");
   
   
    const txtTitle=$("#bookTitle");
    
    const txtOverdueFee= $("#overdueFee");
    const txtPublisher=$("#publisher");
    const txtPublishedDate=$("#publishedDate");
    bookRegistrationForm.addEventListener("submit",function(e){
        e.preventDefault();
        const isbn = txtIsbn.val();
        const title=txtTitle.val();
        const overdueFee= parseFloat(txtOverdueFee.val());
        const publisher=txtPublisher.val();
        const publishedDate= txtPublishedDate.val();
       
        const newBookData={
            "isbn":isbn,
            "title":title,
            "overdueFee":overdueFee,
            "publisher":publisher,
            "publishedDate":publishedDate
        };
        console.log(newBookData);
        fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/add",{
            method:"post",
            body:JSON.stringify(newBookData),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(function(response){
            return{"status":"ok"};
        }).then(function(jsonResponseData){
           // console.log(jsonResponseData);
            getAllBooks();

            txtIsbn.Value="";
            txtTitle.Value="";
            txtOverdueFee.Value="0.0";
            txtPublisher.Value="";
            txtPublishedDate.Value="";
            txtIsbn.focus();
            $("#addNewBookForm").hide();
            $("#bookDatTable").hide();

        }).catch(function(error){
            console.error(error);
            $("#addNewBookForm").hide();
        })
       
    });

   
}
savingNewBook();
})();





