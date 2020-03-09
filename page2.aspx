<% @Page Language="C#" %>
<h1>PAGE 2</h1>
<%
    //System.Threading.Thread.Sleep(1000);
    Response.Write("Param 2: " + Request["param2"] + "<br>");
    Response.Write("Param 3: " + Request["param3"] + "<br>");
%>