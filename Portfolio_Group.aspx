<%@ Page Language="VB" AutoEventWireup="false" CodeFile="Portfolio_Group.aspx.vb" Inherits="Portfolio_Group"  MasterPageFile="~/master/MainMasterPage.master"%>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContentPlaceHolder" Runat="Server">

    <asp:HiddenField runat="server" ID="hfdAlbumID" />
    <asp:HiddenField runat="server" ID="hfd_firstLevel" />
    <asp:HiddenField runat="server" ID="hfd_secondLevel" />



<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;" name="viewport" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<link href="css/photo_swipe/styles.css" type="text/css" rel="stylesheet" />
	
	<link href="css/photo_swipe/photoswipe.css" type="text/css" rel="stylesheet" />
	
	<script type="text/javascript" src="js/photo_swipe/klass.min.js"></script>
	<script type="text/javascript" src="js/photo_swipe/code.photoswipe-3.0.5.js"></script>

    <script type="text/javascript">

        (function (window, PhotoSwipe) {

            document.addEventListener('DOMContentLoaded', function () {

                var
					options = {},
					instance = PhotoSwipe.attach(window.document.querySelectorAll('#Gallery a'), options);

            }, false);


        }(window, window.Code.PhotoSwipe));


        window.onload = function () {
            var anchorValue="";
            var url = document.location;
            var strippedUrl = url.toString().split("#");
            if (strippedUrl.length > 1) {
                anchorValue = strippedUrl[1];
            }

            if (anchorValue != "portfolio" || anchorValue == "") {
                var new_url = url + "#portfolio";
                window.location = new_url;
            }

        };


	</script>




     <!--******************** Portfolio Section ********************-->
    
    <!--******************** Portfolio Section ********************-->
    <section id="portfolio" class="single-page scrollblock" >
      <div class="container">
        <h1 id="folio-headline">
            <%--<img src="images/hkspaimg/portfolio/pofo.png">--%>
            <asp:Image runat="server" ImageUrl="~/images/hkspaimg/portfolio/pofo.png" meta:resourcekey="img_pofoResource1" ID="img_pofo" />

        </h1>


          <asp:Button runat="server" ID="btn_back_rootLevel" meta:resourcekey="btn_back_rootLevelResource1" />
          <asp:Label ID="Label1" runat="server" Text=" > "></asp:Label>
          <asp:Button runat="server" ID="btn_back_firstLevel"  />
          <asp:Label ID="Label2" runat="server" Text=" > "></asp:Label>
          <asp:Button runat="server" ID="btn_back_secondLevel"  />
          <asp:Label ID="lbl_currentLevel" runat="server" Text=""></asp:Label>

          <asp:SqlDataSource runat="server" ID="dsFeature" 
                ConnectionString="<%$ ConnectionStrings:MySqlConnection %>" 
                
                
                SelectCommand="SELECT [PhotoName],[AlbumName],[Author],[camera_model],[iso_speed],[max_aperture],[Lang],[shutter] FROM [view_AlbumPhotoInfo] WHERE ([Enabled] = @Enabled) and [AlbumID]= @AlbumID and [Lang]=@Lang  Order by SortOrder">
                <SelectParameters>
                   <asp:ControlParameter ControlID="hfdAlbumID" Name="AlbumID" 
                        PropertyName="Value"/>
                    <asp:Parameter DefaultValue="true" Name="Enabled" Type="Boolean" />
                     <asp:SessionParameter Name="Lang" SessionField="MyCulture"
      DefaultValue="zh-hk" />
                </SelectParameters>
            </asp:SqlDataSource>



          <div class="row">
          <asp:ListView runat="server" ID="lvwFeature" DataSourceID="dsFeature"  >
                <LayoutTemplate>
                    <asp:PlaceHolder runat="server" ID="ItemPlaceHolder"></asp:PlaceHolder>
                </LayoutTemplate>
                <ItemTemplate>

                   
                        <div class="span4">
                            <div class="mask2"> 

                               

                               <%-- <a href="<%# String.Format("product_image/product_original/{0}", Eval("Url"))%>"  rel="prettyPhoto">

                                    <img src="<%# String.Format("product_image/product/{0}", Eval("Url"))%>" alt=""></a>
                                </a>--%>

                                <%--<script type="text/javascript" charset="utf-8">
                                    $(document).ready(function () {
                                        $("area[rel^='prettyPhoto']").prettyPhoto();
                                    });
                                </script>

                                <script src="js/jquery.js" type="text/javascript" charset="utf-8"></script>
                                <link rel="stylesheet" href="css/hkspa/prettyPhoto.css" type="text/css" media="screen" charset="utf-8" />
                                <script src="js/nav/jquery.prettyPhoto.js" type="text/javascript" charset="utf-8"></script>--%>

       <ul id="Gallery" class="gallery">

                                <li style="width:80%;">

                                    <a href='<%# String.Format("product_image/album/{0}/{1}", hfdAlbumID.Value, Eval("PhotoName"))%>'>
                                    <img  src='<%#String.Format("product_image/album/{0}/tb/{1}", hfdAlbumID.Value, Eval("PhotoName"))%>'  alt='<%#String.Format("Photo By {0}", Eval("Author"))%>'/>

                                    </a>

                                </li>

                                </ul>


                               <%-- <a href='<%# String.Format("product_image/album/{0}/{1}", hfdAlbumID.Value, Eval("PhotoName"))%>' rel="prettyPhoto[pp_gal]" title='<%# Eval("AlbumName")%>'><img src='<%# String.Format("product_image/album/{0}/{1}", hfdAlbumID.Value, Eval("PhotoName"))%>'  width="60" height="60" alt='<%# Eval("AlbumName")%>' /></a>--%>

                                <%--<asp:Literal runat="server" ID="lit_imageitems" Text='<%# ImageItem(String.Format("product_image/product/{0}", Eval("Url")), Eval("CategoryID"), Eval("ProductName"))%>' />--%>

                               


                            </div>
                                <div class="inside">

                                    <hgroup>

                                        <%--<h2><%# Eval("ProductName")%></h2>--%>
                                        <%--<h2>Boxing</h2>--%>
                                        <h2>
                                            <asp:Label runat="server" ID="lbl_author" meta:resourcekey="lbl_authorResource1">攝影者: </asp:Label> <%# Eval("Author")%>
                                            <%--<br />
                                            <asp:Label runat="server" ID="lbl_camera" meta:resourcekey="lbl_cameraResource1">相機型號 : </asp:Label> <%# Eval("camera_model")%>
                                            <br />
                                            <asp:Label runat="server" ID="lbl_ISO" meta:resourcekey="lbl_ISOResource1">ISO : </asp:Label> <%# Eval("iso_speed")%>
                                            <br />
                                            <asp:Label runat="server" ID="lbl_aperture" meta:resourcekey="lbl_apertureResource1">光圈 : </asp:Label> <%# Eval("max_aperture")%>
                                            <br />
                                            <asp:Label runat="server" ID="lbl_shutter" meta:resourcekey="lbl_shutterResource1">快門 : </asp:Label> <%# Eval("shutter")%>--%>

                                        </h2>

                                    </hgroup>

                                        <div class="entry-content">

                                        <p></p>
                                        <%--<p>作 者 : Henry Mak  相 機 型 號 : Canon EOS-1D X</p>--%>

                                        <%--<a class="more-link" href="<%# String.Format("portfolio.aspx?cID={0}", Eval("CategoryID"))%>">view project</a>--%> 

                                        </div>
                                </div>
                        </div>
                     




                  

                </ItemTemplate>

               <EmptyDataTemplate>


                   <asp:Label runat="server" ID="Label3">No photo on this category</asp:Label>
                    <br />
                   <asp:Image runat="server" ImageUrl="~/product_image/no_image.png" />
                   

              </EmptyDataTemplate>

            </asp:ListView>
              </div>





 <%--
          <div align="center" id="div_pageer" runat="server" visible="false">
          <asp:DataPager ID="DataPager1" runat="server" PagedControlID="lvwFeature" PageSize="3"  >  
                                <Fields>  

                                    <asp:NextPreviousPagerField   
                                        ButtonType="Button"   
                                        ShowFirstPageButton="true"  
                                        ShowNextPageButton="true"  
                                        ShowPreviousPageButton="false"  
                                        ButtonCssClass="ButtonCSS"  
                                        />  
                                    <asp:NumericPagerField   
                                        NumericButtonCssClass="NumericButtonCSS"  
                                        CurrentPageLabelCssClass="CurrentPageLabelCSS"  
                                        NextPreviousButtonCssClass="NextPreviousButtonCSS"  
                                        />  
                                    <asp:NextPreviousPagerField   
                                        ButtonType="Button"  
                                        ShowLastPageButton="true"  
                                        ShowNextPageButton="false"  
                                        ButtonCssClass="ButtonCSS"  
                                        />  
                                </Fields>  
                            </asp:DataPager> 
            </div>
--%>
           <!-- /.row -->



      </div>
      <!-- /.container -->
    </section>


    </asp:Content>
