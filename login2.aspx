﻿<%@ Page Language="VB" AutoEventWireup="false" CodeFile="login2.aspx.vb" Inherits="login2" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title></title>
    <link href="~/css/hkspa/style.css" rel="stylesheet" type="text/css" />
    <link href="~/css/style.css" rel="stylesheet" type="text/css" />
<%--    <script type="text/javascript" charset="utf-8">
        $(document).ready(function () {
            $("a[rel^='prettyPhoto']").prettyPhoto();
            $(".pp_close").click(function () {
                document.location.reload(true);
            });
        });
</script>--%>
<%--<script type="text/javascript" charset="utf-8">
    $(document).ready(function () {
        $("a[rel^='prettyPhoto']").prettyPhoto();
        $(".pp_close").click(function () {
            document.location.reload(true);
        });
    });
</script>--%>
    <script type="text/javascript">
        function CloseWindow() {
            window.top.location = window.parent.location;
        }
</script>


</head>
<body onload="javascript: return CloseWindow();">
    <form id="form1" runat="server">

          <div class="login">
    <h1>
        <img alt="" runat="server" src="~/images/hkspalogo.png" style="padding-top:10px;"/>
              </h1>
   
              <p align="center">
                  &nbsp;</p>
              <p align="center">
        <img alt="" runat="server" src="~/images/loggedin.png" style="width:95%;"/><br /><br />
             
        <a href="#" onclick="window.top.location = window.parent.location;"><img id="Img1" alt="" runat="server" src="~/images/back2.png" style="width:80px;"/></a>
 </p>
  </div>

    </form>
</body>
</html>
