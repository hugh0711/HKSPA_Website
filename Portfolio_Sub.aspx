<%@ Page Language="VB" AutoEventWireup="false" CodeFile="Portfolio_Sub.aspx.vb" Inherits="Portfolio_Sub" MasterPageFile="~/master/MainMasterPage.master"%>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContentPlaceHolder" Runat="Server">

    <asp:HiddenField runat="server" ID="hfdCatID" />
    <asp:HiddenField runat="server" ID="hfd_firstLevel" />


   <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;" name="viewport" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<link href="css/photo_swipe/styles.css" type="text/css" rel="stylesheet" />
	
	<link href="css/photo_swipe/photoswipe.css" type="text/css" rel="stylesheet" />
	
	<script type="text/javascript" src="js/photo_swipe/klass.min.js"></script>
	<script type="text/javascript" src="js/photo_swipe/code.photoswipe-3.0.5.min.js"></script>

    <script type="text/javascript">

        (function (window, PhotoSwipe) {

            document.addEventListener('DOMContentLoaded', function () {

                var
					options = {},
					instance = PhotoSwipe.attach(window.document.querySelectorAll('#Gallery a'), options);

            }, false);


        }(window, window.Code.PhotoSwipe));


        window.onload = function () {
            var anchorValue = "";
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
    <section id="portfolio" class="single-page scrollblock">
      <div class="container">
        <h1 id="folio-headline">
            <%--<img src="images/hkspaimg/portfolio/pofo.png">--%>
            <asp:Image runat="server" ImageUrl="~/images/hkspaimg/portfolio/pofo.png" meta:resourcekey="img_pofoResource1" ID="img_pofo" />

        </h1>

          <asp:Button runat="server" ID="btn_back_rootLevel" meta:resourcekey="btn_back_rootLevelResource1" />
          <asp:Label runat="server" Text=" > "></asp:Label>
          <asp:Button runat="server" ID="btn_back_firstLevel"  />
          <asp:Label ID="lbl_currentLevel" runat="server" Text=""></asp:Label>

          <asp:SqlDataSource runat="server" ID="dsFeature" 
                ConnectionString="<%$ ConnectionStrings:MySqlConnection %>" 
                
                
                SelectCommand="SELECT [PreviewUrl],[CategoryID],[AlbumID],[AlbumName],[Lang],[AlbumDate] FROM [view_AlbumCategory] WHERE ([Enabled] = @Enabled) and [CategoryID]= @CategoryID and [Lang]=@Lang Order By [AlbumDate] DESC ">
                
              <SelectParameters>
                   <asp:ControlParameter ControlID="hfdCatID" Name="CategoryID" 
                        PropertyName="Value"/>
                    <asp:Parameter DefaultValue="true" Name="Enabled" Type="Boolean" />
                  <asp:SessionParameter Name="Lang" SessionField="MyCulture"
      DefaultValue="zh-hk" />
                </SelectParameters>
            </asp:SqlDataSource>


        
          <div class="row">
        
             

                <asp:ListView runat="server" ID="lvwFeature" DataSourceID="dsFeature">
                <LayoutTemplate>
                    <asp:PlaceHolder runat="server" ID="ItemPlaceHolder"></asp:PlaceHolder>
                </LayoutTemplate>
                <ItemTemplate>

                   
                        <div class="span4">
                            <div class="mask2"> 

                               

                                <%--<script type="text/javascript" charset="utf-8">
                                    $(document).ready(function () {
                                        $("area[rel^='prettyPhoto']").prettyPhoto();
                                    });
                                </script>

                                <script src="js/jquery.js" type="text/javascript" charset="utf-8"></script>
                                <link rel="stylesheet" href="css/hkspa/prettyPhoto.css" type="text/css" media="screen" charset="utf-8" />
                                <script src="js/nav/jquery.prettyPhoto.js" type="text/javascript" charset="utf-8"></script>--%>


                                

                                <%--<asp:LinkButton runat="server" ID="btn_IamgeGalley" CommandArgument='<%#Eval("CategoryID")%>' OnClick="btn_IamgeGalley_Click1" ImageUrl='<%# String.Format("product_image/album/{0}/{1}", Eval("AlbumID"), Eval("PreviewUrl"))%>' data-toggle="modal" data-target="#myModal"
                                     
                                    >
                                    <img src='<%# String.Format("product_image/album/{0}/{1}", Eval("AlbumID"), Eval("PreviewUrl"))%>' alt="" width="90">
                                    </asp:LinkButton>--%>
                              

                                  
                                <a id="A2"  href="<%# String.Format("Portfolio_Group.aspx?aID={0}#portfolio", Eval("AlbumID"))%>" >
                                    <img src='<%# String.Format("product_image/album/{0}/{1}", Eval("AlbumID"), Eval("PreviewUrl"))%>' alt="" width="90">

                                   </a>



                               




                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<%--  <!-- /****************Modal***************/ -->
<%-- <a id="A2" data-toggle="modal" data-target='<%#String.Format("#myModal{0}", Eval("AlbumID"))%>' runat="server">
                                    <img src='<%# String.Format("product_image/album/{0}/{1}", Eval("AlbumID"), Eval("PreviewUrl"))%>' alt="" width="90">

                                   </a>--%><%-- <div class="modal hide fade" id='<%#String.Format("myModal{0}", Eval("AlbumID"))%>' tabindex="-1" role="dialog" aria-labelledby="myModalLabel"  style="display: none" aria-hidden="true" >
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 class="modal-title" id="myModalLabel"><%#Eval("AlbumName")%></h4>
      </div>
      <div class="modal-body">
       



         

           <div id="MainContent">

	
	
	<ul id="Gallery" class="gallery">
		

        <asp:Literal ID="lit_imageGallery" runat="server" Text='<%#ImageItem(Eval("AlbumID"))%>'  />

		
	</ul>
	
</div>	




      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal" >Close</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->--%><%--   <a id="A1" href='<%# String.Format("ShowProductImage.aspx?aID={0}&iframe=true&width=1200&height=900", Eval("AlbumID"))%>' rel="prettyPhoto[iframes]" runat="server" onclick="ImageGallery_Click">
                                    <img src='<%# String.Format("product_image/album/{0}/{1}", Eval("AlbumID"), Eval("PreviewUrl"))%>' alt="" width="90">

                                   </a>--%><%--<asp:Literal runat="server" ID="lit_imageitems" Text='<%# ImageItem(Eval("Url"), Eval("ProductName"), Eval("ProductID"))%>' />--%></div>
                                <div class="inside">

                                    <hgroup>
                                       
                                        <!--<h2><%# Eval("AlbumName")%></h2><br />-->
                                        <h2><%# String.Format("{0}", CharFormat(Eval("AlbumName")))%></h2>
                                        <%--<h2>Boxing</h2>--%>

                                    </hgroup>

                                        <div class="entry-content">

                                        <%--<p>作 者 : <%# Eval("Author")%>  相 機 型 號 : <%# Eval("CameraModel")%></p>--%>
                                        <%--<p>作 者 : Henry Mak  相 機 型 號 : Canon EOS-1D X</p>--%>

                                        <%--<a class="more-link" href="http://www.hkspa.org/showGallery.php?L=C&albumID=1028&s=1&Page=0&id=201989">view project</a> --%>
                                            <%--<a class="more-link" href="<%# String.Format("Portfolio_Group.aspx?aID={0}", Eval("AlbumID"))%>">view project</a>--%>
                                        </div>
                                </div>
                        </div>
                     




                  

                </ItemTemplate>

              <EmptyDataTemplate>

                <asp:Label runat="server" ID="lbl_nodata">No photo on this category</asp:Label>
                 <br />
                  
                  <asp:Image ID="Image1" runat="server" ImageUrl="~/product_image/no_image.png" />
                 

              </EmptyDataTemplate>


            </asp:ListView>
              </div>


          <div align="center" style="margin:30px;">
          <asp:DataPager ID="DataPager1" runat="server" PagedControlID="lvwFeature" PageSize="15">  
                                <Fields>  
                                    <asp:NextPreviousPagerField   
                                        ButtonType="Link"   
                                        ShowFirstPageButton="true"  
                                        ShowNextPageButton="false"  
                                        ShowPreviousPageButton="true" 
                                        FirstPageText="<img src='assets/images/first.png' style='width:20px;height:20px' alt='first' border='0'>" 
                                        PreviousPageText="<img src='assets/images/prev.png' style='width:20px;height:20px' alt='next' border='0'>"
                                        ButtonCssClass="h2"  
                                        />  
                                    <asp:NumericPagerField   
                                        NumericButtonCssClass="h8"  
                                        CurrentPageLabelCssClass="h8"  
                                        NextPreviousButtonCssClass="h8"  
                                    />  
                                    <asp:NextPreviousPagerField   
                                        ButtonType="Link"  
                                        ShowLastPageButton="true"  
                                        ShowNextPageButton="true"
                                        ShowPreviousPageButton="false"  
                                        NextPageText="<img src='assets/images/next.png' style='width:20px;height:20px' alt='first' border='0'>"   
                                        LastPageText="<img src='assets/images/last.png' style='width:20px;height:20px' alt='last' border='0'>" 
                                        
                                        ButtonCssClass="h2"  
                                        />  
                                </Fields>  
                            </asp:DataPager> 
            </div>


           <!-- /.row -->



      </div>
      <!-- /.container -->
    </section>


    </asp:Content>