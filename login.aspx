﻿<%@ Page Language="VB" AutoEventWireup="false" CodeFile="login.aspx.vb" Inherits="login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title></title>
    <link href="~/css/hkspa/style.css" rel="stylesheet" type="text/css" />
    <link href="~/css/style.css" rel="stylesheet" type="text/css" />
    <style type="text/css">
        .auto-style1 {
            width: 141px;
            height: 60px;
        }
        .auto-style2 {
            width: 26px;
            height: 23px;
        }
    </style>
<%--<script type="text/javascript" charset="utf-8">
    $(document).ready(function () {
        $("a[rel^='prettyPhoto']").prettyPhoto();
        $(".pp_close").click(function () {
            document.location.reload(true);
        });
    });
</script>--%>
</head>
<body>
    <form id="form1" runat="server">
    <asp:Panel ID="Panel1" runat="server" DefaultButton="Login1$LoginButton">
                    <asp:Login ID="Login1" runat="server" Width="273px" Align="Center">
                        <LayoutTemplate>
          <div class="login">
    <h1>
        <img alt="" class="auto-style1" runat="server" src="~/images/hkspalogo.png" style="padding-top:10px;"/>
              </h1>
    <form method="post" action="">
      <p>    
          &nbsp;<asp:Label ID="UserNameLabel" runat="server" AssociatedControlID="UserName">          <img id="Img1" alt="" runat="server" width="25"   src="~/images/username.png" style="padding-left:5px;" /></asp:Label>
           </p>
      <p><asp:TextBox ID="UserName" runat="server" placeholder="Username" style="max-width: 300px;"></asp:TextBox>
                                                    <asp:RequiredFieldValidator ID="UserNameRequired" runat="server" 
                                                        ControlToValidate="UserName" ErrorMessage="請輸入帳戶" 
                                                        ToolTip="必須輸入帳戶" ValidationGroup="Login1">*</asp:RequiredFieldValidator></p>
      <p> <asp:Label ID="PasswordLabel" runat="server" AssociatedControlID="Password">  <img id="Img2" alt="" runat="server" src="~/images/pwd.png"  width="25"  style="padding-left:5px;"  /></asp:Label>
                                                </p>
                                                <p>
                                                    <asp:TextBox ID="Password" runat="server" TextMode="Password" Placeholder="Password" style="max-width: 300px;"></asp:TextBox>
                                                    <asp:RequiredFieldValidator ID="PasswordRequired" runat="server" 
                                                        ControlToValidate="Password" ErrorMessage="請輸入密碼" 
                                                        ToolTip="必須輸入密碼." ValidationGroup="Login1">*</asp:RequiredFieldValidator>
                                                </p>
      <p class="remember_me">
        <label>
          <input type="checkbox" name="remember_me" id="remember_me">
          Remember me on this computer
        </label>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
      <p class="submit"><asp:Button ID="LoginButton" runat="server" CommandName="Login" 
                                                        onclick="LoginButton_Click" Text="登入" ValidationGroup="Login1" /></p>
       
    </form>
  </div>
                     </LayoutTemplate>
                    </asp:Login>
    </asp:Panel>
    </form>
</body>
</html>
