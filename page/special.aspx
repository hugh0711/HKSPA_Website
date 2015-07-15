<%@ Page Title="" Language="VB" MasterPageFile="~/master/MasterPage.master" AutoEventWireup="false" CodeFile="special.aspx.vb" Inherits="page_special" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <style type="text/css">
        #video-panel { }
        #video-panel .video { height:510px; width:100%; background-color:#7f7f7f; text-align:center; }
        #video-panel .video iframe { padding:12px; }
        #video-panel .preview { height:90px; width:100%; text-align:center; border-bottom:1px solid #bbb; }
        #video-panel .preview .preview-wrapper { padding:9px; }
        #video-panel .preview a.tb { margin: 3px 4px; display:inline-block; width:120px; height:66px; position:relative; overflow:hidden; box-shadow:3px 3px 3px #666; }
        #video-panel .preview a.tb img { width:120px; top:-11px; position:absolute; display:block; left:0; }
        
        .sub-section { clear:both; padding:20px 20px; }
        
        .sub-section .sub-section-2-3 { width:600px; float:left; }
        .sub-section .sub-section-1-3 { width:300px; float:left; }
        .sub-section .sub-section-1-4 { width:215px; float:left; }
        .sub-section .separator { margin-left:20px; }
        .sub-section .sub-section-article { padding:20px; }
        .sub-section .sub-section-article img { max-width:100%; }
        .sub-section .sub-section-article:after { clear:both; content:''; display:none; }
        
        .theme1 h2 { color:#8A4F03; }
        .theme1 { background-color:#B7A783; border-radius: 5px; }
        img.align-left { float:left; padding-right:8px; display:block; }
        img.align-right { float:right; padding-left:8px; display:block; }
        
    </style>
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">

    <asp:HiddenField runat="server" ID="hfdUrl" />
<asp:HiddenField runat="server" ID="hfdSpecialID" />

<asp:UpdatePanel runat="server" ID="UpdatePanel1">
    <ContentTemplate>

<div id="video-panel">
    <div class="video">
        <asp:Literal runat="server" ID="txtVideoFrame"></asp:Literal>
    </div>
    <div class="preview">
        <div class="preview-wrapper">
            

            <asp:SqlDataSource ID="dsVideo" runat="server" 
                ConnectionString="<%$ ConnectionStrings:MySqlConnection %>" 
                
                SelectCommand="SELECT [Title], [VideoUrl] FROM [SpecialVideo] WHERE ([SpecialID] = @SpecialID) ORDER BY [SortOrder]">
                <SelectParameters>
                    <asp:ControlParameter ControlID="hfdSpecialID" Name="SpecialID" PropertyName="Value" 
                        Type="Int32" />
                </SelectParameters>
            </asp:SqlDataSource>

            <asp:Repeater runat="server" DataSourceID="dsVideo">
                <ItemTemplate>
                    <asp:LinkButton runat="server" ID="btnV1" CssClass="tb" CommandArgument='<%# VideoClass.GetVideoID(Eval("VideoUrl")) %>' OnClick="btnV1_Command">
                        <asp:Image ID="Image1" runat="server" ImageUrl='<%# VideoClass.GetPreview(VideoClass.GetVideoID(Eval("VideoUrl"))) %>' />
                    </asp:LinkButton>
                </ItemTemplate>
            </asp:Repeater>
        </div>
    </div>
</div>

    </ContentTemplate>
</asp:UpdatePanel>


<div class="sub-section">
    <div class="sub-section-1-3">
    
    </div>

</div>

<div class="sub-section">
    <div class="sub-section-2-3 theme1">
        <div class="sub-section-article">
            
            <asp:Literal runat="server" ID="lblContent"></asp:Literal>

        </div>

    </div>

    <div class="sub-section-1-3 separator">

        <asp:SqlDataSource ID="dsImage" runat="server" 
            ConnectionString="<%$ ConnectionStrings:MySqlConnection %>" 
                
            SelectCommand="SELECT [Title], [ImageUrl] FROM [SpecialImage] WHERE ([SpecialID] = @SpecialID) ORDER BY [SortOrder]">
            <SelectParameters>
                <asp:ControlParameter ControlID="hfdSpecialID" Name="SpecialID" PropertyName="Value" 
                    Type="Int32" />
            </SelectParameters>
        </asp:SqlDataSource>

        <asp:Repeater runat="server" DataSourceID="dsImage">
            <ItemTemplate>
                <h2><asp:Literal runat="server" Text='<%# Eval("Title") %>'></asp:Literal></h2>
                <asp:Image runat="server" ImageUrl='<%# IO.Path.Combine(ConfigurationManager.AppSettings("SpecialMobileImagePath"), Eval("ImageUrl")) %>' AlternateText='<%# Eval("Title") %>' />
            </ItemTemplate>
        </asp:Repeater>

    </div>
</div>

</asp:Content>



