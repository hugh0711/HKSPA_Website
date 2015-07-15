<%@ Page Title="" Language="VB" MasterPageFile="~/master/MasterPageInner.master" AutoEventWireup="false" CodeFile="category.aspx.vb" Inherits="page_category" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">

    <style type="text/css">
        
        #content-list .item { background-color:#fff; border-bottom:1px dotted #ddd; margin:4px 0 0; width:100%; padding:0px 0 12px; display:block; width:196px; float:left;  }
        #content-list .item.separator { margin-left:7px; }
        #content-list .item a.tb { margin: 0; display:inline-block; width:300px; height:150px; position:relative; overflow:hidden;  }
        #content-list .item a.tb img { width:300px; top:-37px; position:absolute; display:block; left:0; }
        #content-list .item a.title { font-size:1.25em; font-weight:bold; padding:4px 12px 2px; color:#000; text-overflow:ellipsis; }
        #content-list .item p, #content .episode a { margin:0; padding:0px 12px 2px; display:block; text-overflow:ellipsis; }
        #content-list .item .channel { color:#f4333e; font-weight:bold; padding:4px 12px 4px; }
        #content-list .item:after { content:''; display:block; clear:both; }
        #content-list .item .clip { display:block;  }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <div class="section-title">
        專頁
        <span class="section-title-quot">&raquo;</span>
    </div>

    <div id="content-list">
        <div class="item">
            <asp:HyperLink ID="lnkImage" runat="server" NavigateUrl="~/page/woocow.aspx" ImageUrl="images/category/japan.jpeg" ></asp:HyperLink>
            <asp:HyperLink ID="HyperLink1" runat="server" CssClass="title" Text="日本菜"></asp:HyperLink>
        </div>
        <div class="item separator">
            <asp:HyperLink ID="HyperLink2" runat="server" NavigateUrl="~/page/woocow.aspx" ImageUrl="images/category/chinese.jpeg" ></asp:HyperLink>
            <asp:HyperLink ID="HyperLink3" runat="server" CssClass="title" Text="中菜"></asp:HyperLink>
        </div>
        <div class="item separator">
            <asp:HyperLink ID="HyperLink4" runat="server" NavigateUrl="~/page/woocow.aspx" ImageUrl="images/category/france.jpeg" ></asp:HyperLink>
            <asp:HyperLink ID="HyperLink5" runat="server" CssClass="title" Text="法國菜"></asp:HyperLink>
        </div>

        <div class="item">
            <asp:HyperLink ID="HyperLink6" runat="server" NavigateUrl="~/page/woocow.aspx" ImageUrl="images/category/india.jpeg" ></asp:HyperLink>
            <asp:HyperLink ID="HyperLink7" runat="server" CssClass="title" Text="印度菜"></asp:HyperLink>
        </div>
        <div class="item separator">
            <asp:HyperLink ID="HyperLink8" runat="server" NavigateUrl="~/page/woocow.aspx" ImageUrl="images/category/italy.jpeg" ></asp:HyperLink>
            <asp:HyperLink ID="HyperLink9" runat="server" CssClass="title" Text="意大利菜"></asp:HyperLink>
        </div>
        <div class="item separator">
            <asp:HyperLink ID="HyperLink10" runat="server" NavigateUrl="~/page/woocow.aspx" ImageUrl="images/category/mexico.jpeg" ></asp:HyperLink>
            <asp:HyperLink ID="HyperLink11" runat="server" CssClass="title" Text="墨西哥菜"></asp:HyperLink>
        </div>

        <div class="item">
            <asp:HyperLink ID="HyperLink12" runat="server" NavigateUrl="~/page/woocow.aspx" ImageUrl="images/category/mid-east.jpeg" ></asp:HyperLink>
            <asp:HyperLink ID="HyperLink13" runat="server" CssClass="title" Text="中東菜"></asp:HyperLink>
        </div>
        <div class="item separator">
            <asp:HyperLink ID="HyperLink14" runat="server" NavigateUrl="~/page/woocow.aspx" ImageUrl="images/category/sea.jpeg" ></asp:HyperLink>
            <asp:HyperLink ID="HyperLink15" runat="server" CssClass="title" Text="東南亞菜"></asp:HyperLink>
        </div>
        <div class="item separator">
            <asp:HyperLink ID="HyperLink16" runat="server" NavigateUrl="~/page/woocow.aspx" ImageUrl="images/category/thai.jpeg" ></asp:HyperLink>
            <asp:HyperLink ID="HyperLink17" runat="server" CssClass="title" Text="泰國菜"></asp:HyperLink>
        </div>

        <div class="item">
            <asp:HyperLink ID="HyperLink18" runat="server" NavigateUrl="~/page/woocow.aspx" ImageUrl="images/category/western.jpeg" ></asp:HyperLink>
            <asp:HyperLink ID="HyperLink19" runat="server" CssClass="title" Text="西餐"></asp:HyperLink>
        </div>
    </div>
</asp:Content>

