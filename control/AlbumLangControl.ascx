<%@ Control Language="VB" AutoEventWireup="false" CodeFile="AlbumLangControl.ascx.vb" Inherits="control_AlbumLangControl" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>

<%@ Register assembly="FredCK.FCKeditorV2" namespace="FredCK.FCKeditorV2" tagprefix="FCKeditorV2" %>

<asp:HiddenField runat="server" ID="hfdLang" />




<table border="0" width="100%">

                                
                <tr>
                    <td>
                        <asp:Label runat="server" ID="lblName">Name</asp:Label>
                    </td>
                    <td>
                        <asp:TextBox ID="txtName" runat="server" Columns="80" TextMode="MultiLine" Rows="4"></asp:TextBox>
                        <asp:PlaceHolder runat="server" ID="phdLangButton" Visible="false">
                        <asp:Button ID="btnNameLanguage" runat="server" Text="More Language" Visible="False" />
                        </asp:PlaceHolder>
                    </td>
                    <td>
                        <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ErrorMessage="Please input name"
                            ControlToValidate="txtName" ValidationGroup="gp1" CssClass="errorText" 
                            ForeColor=""></asp:RequiredFieldValidator>
                    </td>
                </tr>


                <asp:PlaceHolder runat="server" ID="DescriptionPlaceHolder" Visible="false">
                <tr>
                    <td>
                        Description
                    </td>
                    <td>
                        <asp:TextBox ID="txtDescription" runat="server" Columns="80" TextMode="MultiLine" Rows="8"></asp:TextBox>
                    </td>
                    <td>
                        <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" ErrorMessage="Please input description"
                            ControlToValidate="txtDescription" ValidationGroup="gp1" CssClass="errorText" 
                            ForeColor=""></asp:RequiredFieldValidator>
                    </td>
                </tr>

                </asp:PlaceHolder>
                <asp:PlaceHolder runat="server" ID="HTMLDescriptionPlaceHolder" Visible="true">
                <tr>
                    <td>
                        Description
                    </td>
                    <td colspan="2">
                        <FCKeditorV2:FCKeditor ID="htmlDescription" runat="server" ToolbarSet="MyToolbar" BasePath="~/fckeditor/" Height="300"  >
                        </FCKeditorV2:FCKeditor>
                    </td>
                </tr>

                </asp:PlaceHolder>

                            

                
              
               
                
                



            </table>