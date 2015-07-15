<%@ Control Language="VB" AutoEventWireup="false" CodeFile="LanguageControl.ascx.vb" Inherits="control_LanguageControl" %>

    
    <li>
        <asp:LinkButton runat="server" id="btnEN" CommandArgument="en-us" >ENGLISH</asp:LinkButton>

    </li>

    <li>
        <asp:LinkButton runat="server" id="btnTC" CommandArgument="zh-hk">繁體中文</asp:LinkButton>

    </li>
    <%--<asp:LinkButton runat="server" id="btnSC" CommandArgument="zh-cn" Visible="false">简体中文</asp:LinkButton> --%>
