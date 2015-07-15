<%@ Page Title="" Language="VB" MasterPageFile="~/master/MasterPageMobile.master" AutoEventWireup="false" CodeFile="woocow-m.aspx.vb" Inherits="page_woocow_m" %>

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
            $("#video-container").width(w0).height(h0);
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

<div id="video-panel">
    <div class="video">
        <asp:Literal runat="server" ID="txtVideoFrame"></asp:Literal>
    </div>
    <div class="preview">
        <div class="preview-wrapper">
            <asp:LinkButton runat="server" ID="btnV1" CssClass="tb" CommandArgument="0eGcyIiCf5o"><asp:Image ID="Image1" runat="server" ImageUrl='<%# VideoClass.GetPreview("0eGcyIiCf5o") %>' /></asp:LinkButton>
            <asp:LinkButton runat="server" ID="btnV2" CssClass="tb" CommandArgument="h0pv7JL593Q"><asp:Image ID="Image2" runat="server" ImageUrl='<%# VideoClass.GetPreview("h0pv7JL593Q") %>' /></asp:LinkButton>
        </div>
    </div>
</div>

<div class="sub-section theme1">

            <h2>餐廳資料</h2>
            <img src="images/00001/m/Door.jpg" class="align-right" />
            <p>牛薈馳名手切肥牛，一直深受識食的牛迷愛戴。老闆本身亦是火鍋迷，深知吃火鍋少不得靚肥牛，所以選料絕不馬虎，他選用全只牛最靚的頸脊部位做肥牛鍋料，由於此部位活動量大，油花雖少但分佈均勻，鬆軟得來不失嚼勁，肉味濃郁，與招牌禾牛薈鍋同屬絕配。禾牛薈鍋湯底以大量牛骨熬湯，再加入金錢肚、牛膀、牛筋等做湯料，所以將肥牛放進湯內略灼，吃下已感覺強勁牛味。禾牛薈的湯底現有十多款，今冬最新推出一款淮山杞子豬肚海中寶，內有花膠、魚唇、螺頭、翅骨等，用料豐富，滋陰暖胃，特別受女士歡迎。</p>
 
            <img src="images/00001/m/Inside 01.jpg" class="align-left" />
            <p>此店的自創火鍋料相當出名，由大廚漢哥負責設計，據聞他曾任職多家火鍋店，更當過中菜廚師，所以不時將中菜元素融入火鍋料中，像冬菇釀墨滑，一看便令人聯想起魚肉釀豆蔔、瓜甫釀蝦膠這些中菜。墨滑是師傅自家手打的，鮮味十足，釀進厚身冬菇內，彈牙又軟滑，口感特別。還有老友鬼鬼，即將蝦滑釀入油炸鬼內，油炸鬼索滿湯汁，非常美味，蝦滑亦爽口有嚼勁。其餘龍眼肉釀蝦滑、朱古力餡墨魚丸，同屬和牛薈的人氣鍋料，比一般肉丸、魚滑、餃子有新鮮感得多。</p>

            <img src="images/00001/m/Map.jpg"  />
            <p>地址 :	 	尖沙咀金馬倫道48號中國保險大廈1樓及2樓<br />
                電話 : 3997 3369<br />
                類別 :	 	港式、酒吧、火鍋<br />
                消費 : $151-$300</p>

            <p>
                營業時間　：星期一至日:17:30-02:30<br />
                座位數目　：300<br />
                付款方式　：現金<br />
                加一服務費：有<br />
                電視播放　：有<br />
                球賽直播　：有<br />
                外賣服務　：有<br />
            </p>


</div>

<div class="sub-section">

      <h2>本地招牌手切肥牛</h2>
        <img src="images/00001/m/01.jpg" alt="本地招牌手切肥牛" />

        <h2>老友鬼鬼</h2>
        <img src="images/00001/m/02.jpg" alt="老友鬼鬼" />

        <h2>魚翅大冬瓜</h2>
        <img src="images/00001/m/03.jpg" alt="魚翅大冬瓜" />

        <h2>現金劵</h2>
        <img src="images/00001/m/coupon.gif" alt="現金劵" />
</div>

</asp:Content>

