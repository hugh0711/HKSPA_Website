<%@ Page Title="" Language="VB" MasterPageFile="~/backoffice/master/Admin.master" AutoEventWireup="false" CodeFile="PaymentMethod.aspx.vb" Inherits="backoffice_PaymentMethod" %>
<%@ Register Assembly="FredCK.FCKeditorV2" Namespace="FredCK.FCKeditorV2" TagPrefix="FCKeditorV2" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
	<center><h3>付款方式</h3></center>
    <asp:HiddenField ID="hfdPaymentMethodId" runat="server" />
    <asp:HiddenField ID="txtFormMode" runat="server" />
    
    
	<asp:TextBox ID="txtPaymentPage" runat="server" Visible="False"></asp:TextBox>
	<asp:TextBox ID="txtImageUrl" runat="server" Visible="False"></asp:TextBox>
	<table width="800px">
		<tr>
			<th></th>
			<td colspan="2">
    <asp:TabContainer ID="TabLang" runat="server">
        <asp:TabPanel ID="tabEn" runat="server" HeaderText="English">
            <HeaderTemplate>
                <center><asp:Label ID="Label1" runat="server" Text="English"></asp:Label></center>
            </HeaderTemplate>
            <ContentTemplate>
                <table width="800px">
                    <tr>
                        <th width="60px">
                            Payment Method Name *
                        </th>
                        <td>
                            <asp:TextBox ID="txtPaymentMethodNameEn" runat="server" Width="300px"></asp:TextBox>
                        </td>
                        <td>
                            <asp:RequiredFieldValidator ID="reqtxtPaymentMethodNameEn" runat="server" ErrorMessage="Payment Method Name require" Display="Dynamic" ControlToValidate="txtPaymentMethodNameEn"></asp:RequiredFieldValidator>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Description
                        </th>
                        <td>
							<FCKeditorV2:FCKeditor ID="txtPaymentMethodDescriptionEn" runat="server" BasePath="~/fckeditor/" 
								Height="300px" Width="700px" ToolbarSet="MyToolbar">
							</FCKeditorV2:FCKeditor>
                        </td>
                        <td>
                        </td>
                    </tr>
                </table>
            </ContentTemplate>
        </asp:TabPanel>

        <asp:TabPanel ID="TabHk" runat="server" HeaderText="中 文">
            <HeaderTemplate>
                <center><asp:Label ID="Label2" runat="server" Text="中 文"></asp:Label></center>
            </HeaderTemplate>
            <ContentTemplate>
                <table width="800px">
                    <tr>
                        <th width="60px">
                            付款方式<br />名稱 *
                        </th>
                        <td>
                            <asp:TextBox ID="txtPaymentMethodNameHk" runat="server" Width="300px"></asp:TextBox>
                        </td>
                        <td>
                            <asp:RequiredFieldValidator ID="reqtxtPaymentMethodNameHk" runat="server" ErrorMessage="付款方式名稱必須填寫" Display="Dynamic" ControlToValidate="txtPaymentMethodNameHk"></asp:RequiredFieldValidator>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            內容
                        </th>
                        <td>
							<FCKeditorV2:FCKeditor ID="txtPaymentMethodDescriptionHk" runat="server" BasePath="~/fckeditor/" 
								Height="300px" Width="700px" ToolbarSet="MyToolbar">
							</FCKeditorV2:FCKeditor>
                        </td>
                        <td>
                        </td>
                    </tr>
                </table>
            </ContentTemplate>
        </asp:TabPanel>
    </asp:TabContainer>
			</td>
		</tr>
		<tr>
			<th>
				排序
			</th>
			<td>
				<asp:TextBox ID="txtSortOrder" runat="server" Text=""></asp:TextBox>
			</td>
			<td>
				<asp:CompareValidator ID="CompareValidator1" runat="server" 
					ErrorMessage="請輸入整數" ControlToValidate="txtSortOrder" Operator="GreaterThanEqual" 
					Type="Integer" ValueToCompare="0"></asp:CompareValidator>
			</td>
		</tr>
	</table>

    <table width="720px">
    <tr>
        <td></td>
		<td colspan="2">
			<asp:Button ID="btnSave" runat="server" Text="確  認" BackColor="#FF6600" 
				BorderColor="#FF9933" BorderStyle="Outset" BorderWidth="2px" 
				ForeColor="White" Width="80px" />
			&nbsp;&nbsp;&nbsp;&nbsp;
			<asp:Button ID="btnBack" runat="server" Text="返  回" BackColor="#CCCCCC" 
				BorderColor="Gray" BorderStyle="Outset" BorderWidth="2px" 
				ForeColor="#333333" Width="80px" CausesValidation="False" />
		</td>
	</tr>
	<tr>
		<td colspan="3" align="right">
			<asp:Label ID="lblDeleteError" runat="server" Text="請先刪除有關產品" ForeColor="#FF3300" Visible="False"></asp:Label>
			<asp:Button ID="btnDelete" runat="server" Text="刪  除" BackColor="Red" 
				BorderColor="#CC0000" BorderStyle="Outset" BorderWidth="2px" 
				ForeColor="White" Width="80px" CausesValidation="False" />
			<asp:ConfirmButtonExtender ID="btnDelete_ConfirmButtonExtender" runat="server" 
				ConfirmText="確  認  刪  除  ?" Enabled="True" TargetControlID="btnDelete">
			</asp:ConfirmButtonExtender>
		</td>
	</tr>
</table>
</asp:Content>



