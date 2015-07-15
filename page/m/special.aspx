<%@ Page Title="" Language="VB" MasterPageFile="~/master/MasterPageMobile.master" AutoEventWireup="false" CodeFile="special.aspx.vb" Inherits="page_m_special" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <style type="text/css">
        #content { }    
        
       #video-panel { }
        #video-panel .video { width:100%; background-color:#7f7f7f; text-align:center; }
        #video-panel .video iframe { padding:0px; }
        #video-panel .preview { height:90px; width:100%; text-align:center; border-bottom:1px solid #bbb; }
        #video-panel .preview .preview-wrapper { padding:9px; }
        #video-panel .preview a.tb { margin: 3px 4px; display:inline-block; width:120px; height:66px; position:relative; overflow:hidden; box-shadow:3px 3px 3px #666; }
        #video-panel .preview a.tb img { width:120px; top:-11px; position:absolute; display:block; left:0; }

        #video-panel iframe { margin:0; padding:0; }
        #video-container { margin:0; padding:0; }
        
        .sub-section { clear:both; padding:20px 20px; }
        .sub-section img { height:auto; }
        .theme1 h2 { color:#8A4F03; }
        .theme1 { background-color:#B7A783; /* border-radius: 5px; */ }
    </style>

    <script type="text/javascript">
        $(document).ready(function () {
            //border = $("#banner-left").width() + $("#banner-right").width();
            var con = $("#content");
            var w0 = con.width() - parseInt(con.css("paddingLeft")) - parseInt(con.css("paddingRight"));
            //img.css({ "width": "100%", "maxWidth": imageWidth0 + "px" });
            //img = $("#image-wrapper img:first").width(w0);
            //$("#video-container").fitVids();

            var h0 = w0 * 9 / 16 + 30;
            //            alert("w0:" + w0 + " h0:" + h0);
            $("#video-container").width(w0).height(h0);
            $("div p img").css('max-width', '100%');
        });

        $(document).load(function () {
            var con = $(".sub-section:first");
            var w0 = con.width() - parseInt(con.css("paddingLeft")) - parseInt(con.css("paddingRight"));
            $("img").each(function (index) {
                if ($(this).width() > w0) $(this).width(w0);
            });
        });
    </script>
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">

<asp:HiddenField runat="server" ID="hfdUrl" />
<asp:HiddenField runat="server" ID="hfdSpecialID" />


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

            <asp:Repeater ID="Repeater1" runat="server" DataSourceID="dsVideo">
                <ItemTemplate>
                    <asp:LinkButton runat="server" ID="btnV1" CssClass="tb" CommandArgument='<%# VideoClass.GetVideoID(Eval("VideoUrl")) %>' OnClick="btnV1_Command">
                        <asp:Image ID="Image1" runat="server" ImageUrl='<%# VideoClass.GetPreview(VideoClass.GetVideoID(Eval("VideoUrl"))) %>' />
                    </asp:LinkButton>
                </ItemTemplate>
            </asp:Repeater>
        </div>
    </div>
</div>

<div class="sub-section theme1">

    <asp:Literal runat="server" ID="lblContent"></asp:Literal>

</div>

<div class="sub-section">

        <asp:SqlDataSource ID="dsImage" runat="server" 
            ConnectionString="<%$ ConnectionStrings:MySqlConnection %>" 
                
            SelectCommand="SELECT [Title], [ImageUrl] FROM [SpecialImage] WHERE ([SpecialID] = @SpecialID) ORDER BY [SortOrder]">
            <SelectParameters>
                <asp:ControlParameter ControlID="hfdSpecialID" Name="SpecialID" PropertyName="Value" 
                    Type="Int32" />
            </SelectParameters>
        </asp:SqlDataSource>

        <asp:Repeater ID="Repeater2" runat="server" DataSourceID="dsImage">
            <ItemTemplate>
                <h2><asp:Literal ID="Literal1" runat="server" Text='<%# Eval("Title") %>'></asp:Literal></h2>
                <asp:Image ID="Image2" runat="server" ImageUrl='<%# IO.Path.Combine(ConfigurationManager.AppSettings("SpecialMobileImagePath"), Eval("ImageUrl")) %>' AlternateText='<%# Eval("Title") %>' />
            </ItemTemplate>
        </asp:Repeater>

</div>


</asp:Content>

