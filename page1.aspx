<% @Page Language="C#" %>
<h1>PAGE 1</h1>
<%
    Response.Write("Param 1: " + Request["param1"] + "<br>");
    Response.Write("Param 2: " + Request["param2"] + "<br>");
%>