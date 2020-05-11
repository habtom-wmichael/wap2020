<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
       <html lang='en'>
       <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' >
        <meta http-equiv='X-UA-Compatible' content='ie=edge'>
         <title>Customer Contact App</title>
       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/cosmo/bootstrap.min.css" integrity="sha384-uhut8PejFZO8994oEgm/ZfAv0mW1/b83nczZzSwElbeILxwkN491YQXsCFTE6+nx" crossorigin="anonymous">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
        <link rel="stylesheet" href='css/style.css'>
       </head>
       <body>
       <%@include file="/WEB-INF/fragments/header.jsp"%>

       <div class="container">
       <form id="formCustomerContact" method="post" action="/Assignment13JSP/process-contact-form">
       <fieldset>
       <legend>Customer Contact Form</legend>
       

  
       <c:set var="objErrMsgs"  value="${errMsgs}"></c:set>
      
        <c:if test="${objErrMsgs != null}" >
            <c:set var="errorMsgs" value ="${objErrMsgs}"></c:set>
            <div><p>${errorMsgs}</p></div>
       </c:if>


       <div class="form-group">
       <label for="customerName">*Name:</label>
       

                <input type="text" class="form-control" id="customerName" name="customerName" aria-describedby="customerNameHelp" placeholder="Enter your full name" >

        
       <small id="customerNameHelp" class="form-text text-muted">Enter your full name.</small>
       </div>

       <label>*Gender:</label><br/>
       <label class="custom-control custom-radio">
  

           <input id='genderMale' name='gender' type='radio' class='custom-control-input' value='male'>

        
         <span class="custom-control-indicator"></span>
         <span class="custom-control-description">Male</span>
       </label>
       <label class="custom-control custom-radio">   

                       <input id='genderFemale' name='gender' type='radio' class='custom-control-input' value='female'>

         <span class="custom-control-indicator"></span>
         <span class="custom-control-description">Female</span>
       </label>

         <div class="form-group">
           <label for="category">*Category:</label>
           <select class="form-control" id="category" name="category">

                 <option value="null">Select...</option>
                 <option value="Feedback">Feedback</option>
                 <option value="Inquiry">Inquiry</option>
                 <option value="Complaint">Complaint</option>


          </select>
         </div>

       <div class="form-group">
       <label for="message">*Message:</label>

       				<textarea class="form-control" id="message" name="message" rows="3" ></textarea>

       </div>

       <button id="btnSubmit" type="submit" class="btn btn-primary btn-block">Submit</button>
       </fieldset>
       </form>
       </div>

		
	   <%
		   Integer hitsCount = (Integer) session.getAttribute("hitCounter");
	       if( hitsCount ==null || hitsCount == 0 ) {
	         /* First visit */
	  
	          hitsCount = 1;
	       } else {
	          /* return visit */
	        
	          hitsCount += 1;
	       }
	       session.setAttribute("hitCounter", hitsCount);
	   %>
        <%-- Display Hit Counts--%>
       
       <div class="container"><br/><br/>
       <span class="text-muted">Hit Count for this page: ${hitCounter} </span><span style="float:right;" class="text-muted">Total Hit Count for the entire WebApp:  ${applicationScope['TotalHitCount']}  </span>
       </div>

       <%@include file="/WEB-INF/fragments/footer.jsp"%>
       </body>
       </html>