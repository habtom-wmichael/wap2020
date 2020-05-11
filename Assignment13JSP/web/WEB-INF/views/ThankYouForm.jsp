<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page import="java.time.LocalDate, java.time.format.DateTimeFormatter" %>
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0', shrink-to-fit=no">
    <meta http-equiv='X-UA-Compatible' content='ie=edge'>
    <title>Customer Contact App - Thank you!</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/cosmo/bootstrap.min.css" integrity="sha384-uhut8PejFZO8994oEgm/ZfAv0mW1/b83nczZzSwElbeILxwkN491YQXsCFTE6+nx" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<%@include file="/WEB-INF/fragments/header.jsp"%>
<div class="container">



    <%-- Show current Date--%>
    <div class="container"><br/>
        <span style="float:right;" class="text-muted"> ${ LocalDate.now().format(DateTimeFormatter.ofPattern("EEEE, dd MMMM yyyy")) } </span>
    </div>

    <p>
        <br/>
        <div class="card">
            <div class="card-header">
                <h2>Thank you! Your message has been received as follows:</h2>
            </div>
            <div class="card-body">

                <h4 class="card-title"> Name:${param.customerName} </h4><br/>
                <h5 class="card-subtitle mb-2 text-muted">Gender: ${param.gender}</h5><br/>
                <h5 class="card-subtitle mb-2 text-muted">Categorry: ${param.category}</h5><br/>

        <p class="card-text">Message: ${ param.message}</p><br/><br/>
    <p>Please feel free to <a href="contact-form" class="card-link">Contact Us</a> again</p>
</div>
</div>
</p>

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
<c:set var="objTotalHitCount" value ="${totalHitCount}" ></c:set>
<c:set var="totalHitCount" value ="${objTotalHitCount}"></c:set>

<div class="container"><br/><br/>
    <span class="text-muted">Hit Count for this page: ${hitCounter} </span><span style="float:right;" class="text-muted">Total Hit Count for the entire WebApp:  ${applicationScope['TotalHitCount']}  </span>
</div>
</div>
<%@include file="/WEB-INF/fragments/footer.jsp"%>
</body>
</html>