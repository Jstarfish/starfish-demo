<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
         pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<html>
<body>

<h4>List Page</h4>

Welcome: <shiro:principal></shiro:principal>

<shiro:hasRole name="admin">
    <br><br>
    <a href="admin.jsp">Admin Page</a>
</shiro:hasRole>

<shiro:hasRole name="user">
    <br><br>
    <a href="user.jsp">User Page</a>
</shiro:hasRole>

<br><br>
<a href="shiro/testShiroAnnotation">Test ShiroAnnotation</a>

<br><br>
<a href="shiro/logout">Logout</a>
</body>
</html>
