<%--
  Created by IntelliJ IDEA.
  User: Habtom W.Micahel
  Date: 5/8/20
  Time: 8:40 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="ct" uri="WEB-INF/lib/ct.tld" %>
<html>
<head>
    <title>Custom Tag</title>
    <link rel="stylesheet" href="css/myStyle.css">
</head>
<body>
<div class="container">
    <h1>Current Time On the Server <ct:currentDateTime color="white" size="12px"/></h1>
    <h3>  <ct:currentDateTime size="9px"/></h3>
    <h3> <ct:currentDateTime /></h3>

</div>
</body>
</html>
