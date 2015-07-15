<%@ Page Title="" Language="VB" MasterPageFile="~/master/MasterPageInner.master" AutoEventWireup="false" CodeFile="specials.aspx.vb" Inherits="page_specials" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">

</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <div class="section-title">
        <asp:Literal runat="server" ID="txtChannel" Text="專頁"></asp:Literal> 
    </div>
    <asp:HiddenField runat="server" ID="hfdFunctionID" />
    <asp:HiddenField runat="server" ID="hfdParentID" />

    <asp:SqlDataSource ID="dsCategory" runat="server" 
        ConnectionString="<%$ ConnectionStrings:MySqlConnection %>" 
                    
    SelectCommand="SELECT [CategoryID], [CategoryName], [Description] FROM [view_Category] WHERE (([Enabled] = @Enabled) AND ([ParentID] = @ParentID) AND FunctionID = @FunctionID AND ([Lang] = @Lang)) ORDER BY [SortOrder]">
    <SelectParameters>
        <asp:ControlParameter ControlID="hfdParentID" Name="ParentID" 
            PropertyName="Value" Type="Int32" />
        <asp:ControlParameter ControlID="hfdFunctionID" Name="FunctionID" 
            PropertyName="Value" Type="Int32" />
        <asp:Parameter DefaultValue="true" Name="Enabled" Type="Boolean" />
        <asp:SessionParameter Name="Lang" SessionField="MyCulture" Type="String" />
    </SelectParameters>
    </asp:SqlDataSource>

    <div id="content-list">
    <asp:Repeater ID="Repeater1" runat="server" DataSourceID="dsCategory">
        <ItemTemplate>
            <div class="item">
                <asp:HyperLink ID="lnkImage" runat="server" NavigateUrl='<%# String.Format("~/page/specials.aspx?id={0}", Eval("CategoryID")) %>' ImageUrl='<%# GetImage(Eval("CategoryID")) %>' ></asp:HyperLink>
                <asp:HyperLink ID="HyperLink2" runat="server" CssClass="title" NavigateUrl='<%# String.Format("~/page/specials.aspx?id={0}", Eval("CategoryID")) %>' Text='<%# Eval("CategoryName") %>'></asp:HyperLink>
            </div>
        </ItemTemplate>
    </asp:Repeater>
    </div>

    <asp:SqlDataSource ID="dsSpecial" runat="server" 
        ConnectionString="<%$ ConnectionStrings:MySqlConnection %>" 
                    
    SelectCommand="SELECT [SpecialID], [Name], [Url] FROM [view_Special] WHERE (([Enabled] = @Enabled) AND ([CategoryID] = @CategoryID)) AND (StartDate <= GetDate() AND GetDate() <= EndDate) ORDER BY [SortOrder]">
    <SelectParameters>
        <asp:ControlParameter ControlID="hfdParentID" Name="CategoryID" 
            PropertyName="Value" Type="Int32" />
        <asp:Parameter DefaultValue="true" Name="Enabled" Type="Boolean" />
    </SelectParameters>
    </asp:SqlDataSource>

    <asp:Repeater ID="Repeater2" runat="server" DataSourceID="dsSpecial">
        <HeaderTemplate>
            <ul>
        </HeaderTemplate>
        <ItemTemplate>
            <div class="item">
                <asp:HyperLink ID="HyperLink2" runat="server" CssClass="title" NavigateUrl='<%# String.Format("~/page/{0}.htm", Eval("Url")) %>' Text='<%# Eval("Name") %>'></asp:HyperLink>
            </div>
        </ItemTemplate>
        <FooterTemplate>
            </ul>
        </FooterTemplate>
    </asp:Repeater>

</asp:Content>

