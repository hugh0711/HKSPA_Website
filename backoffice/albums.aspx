﻿<%@ Page Title="" Language="VB" MasterPageFile="~/backoffice/master/Admin.master" AutoEventWireup="false" CodeFile="albums.aspx.vb" Inherits="backoffice_albums" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>

<%@ Register src="../control/CategoryPathControl.ascx" tagname="CategoryPathControl" tagprefix="uc2" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <asp:HiddenField runat="server" ID="hfdCategoryID" />
    <%--<asp:ToolkitScriptManager ID="ToolkitScriptManager1" runat="server">
    </asp:ToolkitScriptManager>--%>

    <asp:HiddenField runat="server" ID="hfd_defaultLanguage" />



     <asp:Label runat="server" ID="lblCategoryID" Visible="False" />

    <asp:PlaceHolder runat="server" ID="CategoryPlaceHolder">
                <asp:Button runat="server" ID="btnSelectCategory" Text="..." />
                <span class="category">
                <asp:Label runat="server" ID="lblAllCategory" Text=" 所有類別"></asp:Label>
                <uc2:CategoryPathControl ID="CategoryPathControl1" runat="server" />
                </span>
                <asp:Button runat="server" ID="btnDummy" Visible="false" />
                <asp:ModalPopupExtender ID="btnSelectCategory_ModalPopupExtender" runat="server" PopupControlID="pnlCategory" BackgroundCssClass="modalBackground"
                    TargetControlID="btnSelectCategory" CancelControlID="btnCategoryCancel" >
                </asp:ModalPopupExtender>
                <asp:Panel runat="server" ID="pnlCategory" CssClass="modalPopup" style="display:none;" >
                    <b>選擇類別:</b><br />
                    <br />
                    <asp:Label runat="server" ID="lblParentID" Visible="false"></asp:Label>
                    <div style="overflow: auto;">
                        <asp:TreeView ID="TreeView1" runat="server" ExpandDepth="0" Width="250" Height="250">
                            <Nodes>
                                <asp:TreeNode Text="主目錄" Value="0" PopulateOnDemand="true" SelectAction="Expand">
                                </asp:TreeNode>
                            </Nodes>
                        </asp:TreeView>
                    </div>
                    <p align="right">
                        <asp:Button runat="server" ID="btnAllCategory" Text="所有類別" />&nbsp;
                        <asp:Button runat="server" ID="btnCategoryCancel" Text="取消" />
                    </p>
                </asp:Panel>
            </asp:PlaceHolder>



    <asp:Panel runat="server" ID="pnlProductSearch" DefaultButton="btnSearch">
					Name:
					<asp:TextBox ID="txtAlbumName" runat="server" Width="300px"></asp:TextBox>
					<asp:Button ID="btnSearch" runat="server" Text="搜尋" Width="80px" />
					<asp:Button ID="btnReset" runat="server" Text="重設" Width="80px" />
            </asp:Panel>



    <h2>相簿管理</h2>

    <div>
        <asp:Button runat="server" ID="btnCreate" Text="新增相薄" />
    </div>

    <%--<asp:SqlDataSource runat="server" ID="dsAlbum" 
        ConnectionString="<%$ ConnectionStrings:MySqlConnection %>" 
        SelectCommand="SELECT [AlbumID], [AlbumName], [Enabled], [PhotoCount], [PreviewUrl] FROM [Album] ORDER BY [CreateDate]">
    </asp:SqlDataSource>--%>

   
    <asp:SqlDataSource runat="server" ID="dsAlbumAll" 
        ConnectionString="<%$ ConnectionStrings:MySqlConnection %>" 
        SelectCommand="SELECT [AlbumID], [AlbumName], [Enabled], [PhotoCount], [PreviewUrl] FROM [HKSPA_dev].[dbo].[view_AlbumCategory] where [Lang]=@Lang order by [AlbumDate] desc">
        <SelectParameters>

            <asp:ControlParameter Name="Lang" ControlID="hfd_defaultLanguage" DefaultValue="zh-hk"
                        PropertyName="Value" Type="String" />
                
        </SelectParameters>

    </asp:SqlDataSource>

    <asp:SqlDataSource runat="server" ID="dsAlbum" 
        ConnectionString="<%$ ConnectionStrings:MySqlConnection %>" 
        SelectCommand="SELECT [AlbumID], [AlbumName], [Enabled], [PhotoCount], [PreviewUrl] FROM [HKSPA_dev].[dbo].[view_AlbumCategory] where [CategoryID]=@CategoryID and [Lang]=@Lang order by [AlbumDate] desc">
        <SelectParameters>
                    <asp:ControlParameter Name="CategoryID" ControlID="hfdCategoryID" DefaultValue="0"
                        PropertyName="Value" Type="Int32" />

            <asp:ControlParameter Name="Lang" ControlID="hfd_defaultLanguage" DefaultValue="zh-hk"
                        PropertyName="Value" Type="String" />
                
        </SelectParameters>

    </asp:SqlDataSource>

    <div id="album">
    <asp:ListView runat="server" ID="lvAlbum" DataSourceID="dsAlbum" DataKeyNames="AlbumID">
        <LayoutTemplate>
            <ul>
                <asp:PlaceHolder runat="server" ID="ItemPlaceHolder"></asp:PlaceHolder>
                <asp:DataPager ID="DataPager1" runat="server" PagedControlID="lvAlbum" PageSize="10">
                    <Fields>
                        <asp:NextPreviousPagerField ButtonType="Link" ShowFirstPageButton="false" ShowPreviousPageButton="true"
                            ShowNextPageButton="false" />
                        <asp:NumericPagerField ButtonType="Link" />
                        <asp:NextPreviousPagerField ButtonType="Link" ShowNextPageButton="true" ShowLastPageButton="false" ShowPreviousPageButton = "false" />
                    </Fields>
                </asp:DataPager>
            </ul>
        </LayoutTemplate>
        <ItemTemplate>
            <li>
                <div class="photo">
                    <asp:HyperLink runat="server" ImageUrl='<%# IO.Path.Combine(Utility.GetAlbumPath(Eval("AlbumID"), ImageClass.ImageSize.Thumbnail), IIf(Eval("PreviewUrl") Is Nothing Or Eval("PreviewUrl").ToString().Length = 0, "", Eval("PreviewUrl")))%>' 
                        NavigateUrl='<%# String.Format("~/backoffice/album.aspx?album={0}", Eval("AlbumID")) %>'></asp:HyperLink>
                </div>
                <asp:Label runat="server" Text='<%# Eval("AlbumName") %>'></asp:Label><br />
                <asp:Label runat="server" Text="暫停" Visible='<%# Not Eval("Enabled") %>'></asp:Label>
                <asp:Button runat="server" ID="btnEdit" Text="編輯" CommandName="edit" CommandArgument='<%# Eval("AlbumID") %>' />
                <asp:Button runat="server" ID="btnDelete" Text="刪除" CommandName="delete1" CommandArgument='<%# Eval("AlbumID") %>' />
                <asp:ConfirmButtonExtender ID="ConfirmButtonExtender1" runat="server" TargetControlID="btnDelete" ConfirmText="是否確定刪除?" />
            </li>
        </ItemTemplate>

        <EmptyDataTemplate>所選的類別沒有相薄</EmptyDataTemplate>

    </asp:ListView>
    </div>

</asp:Content>

