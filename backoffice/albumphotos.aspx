<%@ Page Title="" Language="VB" MasterPageFile="~/backoffice/master/Admin.master" AutoEventWireup="false" CodeFile="albumphotos.aspx.vb" Inherits="backoffice_albumphotos" %>

<%@ Register assembly="AjaxControlToolkit" namespace="AjaxControlToolkit" tagprefix="asp" %>


<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">

</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <%-- <asp:ToolkitScriptManager ID="ToolkitScriptManager2" runat="server">
    </asp:ToolkitScriptManager>--%>
    
    <asp:HiddenField runat="server" ID="hfdAlbumID" />

    <h2>上傳相片</h2>
    
    <asp:CheckBox runat="server" ID="chk_waterMark" Text="Water Mark" Checked="true" />

    <asp:AjaxFileUpload ID="AjaxFileUpload1" runat="server" OnUploadComplete="AjaxFileUpload1_UploadComplete"
        AllowedFileTypes="jpeg,jpg,gif,png"  />

	<asp:UpdatePanel runat="server" id="UpdatePanel" updatemode="Conditional">
    <ContentTemplate>
        <asp:Label runat="server" ID="lbl_error" />
    </ContentTemplate>
    </asp:UpdatePanel>

    <div>
        <asp:Button runat="server" ID="btnBack" Text="返回" />
    </div>

</asp:Content>

