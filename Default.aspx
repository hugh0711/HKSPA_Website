<%@ Page Language="VB" AutoEventWireup="false" CodeFile="Default.aspx.vb" Inherits="_Default"  MasterPageFile="~/master/MainMasterPage.master"  culture="auto" uiculture="auto"%>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContentPlaceHolder" Runat="Server">



    <asp:HiddenField runat="server" ID="hfd_lang" />
<%--    <script type="text/javascript" charset="utf-8">
        $(document).ready(function () {
            $("a[rel^='prettyPhoto']").prettyPhoto();
            $(".pp_close").click(function () {
                document.location.reload(true);
            });
        });
</script>--%>


     <!--******************** Portfolio Section ********************-->
    
    <!--******************** Portfolio Section ********************-->
    <section id="portfolio" class="single-page scrollblock" style="padding-bottom:25px;">
      <div class="container">
        <h1 id="folio-headline">
            
             <asp:Image runat="server" ImageUrl="~/images/hkspaimg/portfolio/pofo.png" meta:resourcekey="img_pofoResource1" ID="img_pofo" />
            <%--<img src="images/hkspaimg/portfolio/pofo.png">--%>


        </h1>
        


          <asp:SqlDataSource runat="server" ID="dsFeature" 
                ConnectionString="<%$ ConnectionStrings:MySqlConnection %>" 

               
              SelectCommand="SELECT Top 9 [CategoryName],[Url],[CategoryID],[FunctionID],[Lang] FROM [view_Category] WHERE ([Enabled] = @Enabled) and [FunctionID]=2 and [ParentID]=0 and [Lang]=@Lang ORDER BY [SortOrder]">
              
              <SelectParameters>
<%--SelectCommand="SELECT Top 9 [ProductID], [ProductName],[Author],[CameraModel],[Url],[CategoryID] FROM [view_ProductImage] WHERE ([Enabled] = @Enabled) and [FunctionID]=2 ORDER BY [ModifyDate] DESC">--%>
                   <%-- <asp:ControlParameter ControlID="hfdVideoFunctionID" Name="FunctionID" 
                        PropertyName="Value" Type="Int32" />--%>
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

                   
                        <div class="span4" style="padding-bottom:10px">
                            <div class="mask2"> 
                               

                                <%--<a href="<%# String.Format("product_image/product_original/{0}", Eval("Url"))%>"  rel="prettyPhoto">

                                    <img src="<%# String.Format("product_image/product/{0}", Eval("Url"))%>" alt=""></a>
                                </a>--%>


                                 <script type="text/javascript" charset="utf-8">
                                     $(document).ready(function () {
                                         $("area[rel^='prettyPhoto']").prettyPhoto();
                                     });
                                </script>

                                <script src="js/jquery.js" type="text/javascript" charset="utf-8"></script>
                                <link rel="stylesheet" href="css/hkspa/prettyPhoto.css" type="text/css" media="screen" charset="utf-8" />
                                <link rel="stylesheet" href="css/hkspa/style.css" type="text/css" media="screen" charset="utf-8" />
                                <script src="js/nav/jquery.prettyPhoto.js" type="text/javascript" charset="utf-8"></script>

                                 <%--<asp:Literal runat="server" ID="lit_imageitems" Text='<%# ImageItem(String.Format("product_image/product/{0}", Eval("Url")), Eval("ProductName"), Eval("CategoryID"))%>' />--%>



                                <a class="more-link" href='<%# String.Format("Portfolio.aspx?cID={0}#portfolio", Eval("CategoryID"))%>'>
                                    <img src='<%# String.Format("product_image/category/{0}", Eval("Url"))%>' alt="" width="90">

                                </a>
                               
                               &nbsp;&nbsp;&nbsp;&nbsp;<%--<a id="A1" href= '<%# String.Format("~/ShowProductImage.aspx?iframe=true&width=500&height=500&cID={0}", Eval("CategoryID"))%>' rel="prettyPhoto[iframes]" runat="server"><img src='<%# String.Format("product_image/product/{0}", Eval("Url"))%>' alt="" width="90">

                                   </a>--%></div>
                                <div class="inside" style="text-align: center;padding: 10px;">

                                    <hgroup>

                                        <h2 style="margin-top: 0;"><%# Eval("CategoryName")%></h2>
                                        <%--<h2>Boxing</h2>--%>

                                    </hgroup>

                                        <%--<div class="entry-content">

                                        <p>作 者 : <%# Eval("Author")%>  相 機 型 號 : <%# Eval("CameraModel")%></p>
                                        

                                        <a class="more-link" href="http://www.hkspa.org/showGallery.php?L=C&albumID=1028&s=1&Page=0&id=201989">view project</a> 

                                        </div>--%>
                                </div>
                        </div>
                     




                  

                </ItemTemplate>
            </asp:ListView>
              </div>





        <!-- /.row -->



      </div>
      <!-- /.container -->
    </section>
   
    <%--<div id="headerwrap2"></div>--%>
    
    
    
    <!--******************** Services Section ********************-->
    <!--******************** Testimonials Section ********************-->

    <section  id="feature">
    <section  id="services">
      <div class="container">
        <div class="row">
          <article2>
           
<p align="center">&nbsp;</p>
<p align="center">&nbsp;</p>
<p align="center">
    
    <a title="services" href="#services">

        <asp:Image runat="server" ImageUrl="~/images/hkspaimg/portfolio/about.png" meta:resourcekey="img_aboutResource1" ID="img_about" />
    <%--<img src="images/hkspaimg/portfolio/about.png" alt="" >--%>

     </a>

</p>

<p align="center">&nbsp;</p>

            <asp:Label runat="server" ID="lbl_services" meta:resourcekey="lbl_servicesResource1">
                <p align="justify" style="width:85%;margin:auto;">
                    為更有效地推廣運動攝影，一群熱心的運動攝影愛好者經過多個月來的努力，以「運動攝影回饋社會」為宗旨的【香港運動攝影協會】於二零零四年正式成立。

                </p>
            </asp:Label>

          </article2>
          <!-- /.blockquote-wrapper -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </section>
    </section>
   
    <!--******************** News Section ********************-->
    <section id="news" class="single-page scrollblock">
      <div class="container">
        <h1>
            
            <asp:Image runat="server" ImageUrl="~/images/hkspaimg/portfolio/news.png" meta:resourcekey="img_newsResource1" ID="img_news" />
            <%--<img src="images/hkspaimg/portfolio/news.png" alt="">--%>


        </h1>


        <!-- Three columns -->
        <div class="row">


            



             <asp:SqlDataSource runat="server" ID="SqlNews" 
                ConnectionString="<%$ ConnectionStrings:MySqlConnection %>" 

               
              SelectCommand="SELECT Top 6 [ProductID],[Enabled],[SortOrder],[ProductName],[SellingStartDate],[Url],[FunctionID],[Description] FROM [view_ProductImage] WHERE ([Enabled] = @Enabled) and ([FunctionID]=3) and ([Lang]=@lang) ORDER BY [SortOrder]">
              
              <SelectParameters>
<%--SelectCommand="SELECT Top 9 [ProductID], [ProductName],[Author],[CameraModel],[Url],[CategoryID] FROM [view_ProductImage] WHERE ([Enabled] = @Enabled) and [FunctionID]=2 ORDER BY [ModifyDate] DESC">--%>
                    <asp:ControlParameter ControlID="hfd_lang" Name="lang" 
                        PropertyName="Value" Type="String" />
                    <asp:Parameter DefaultValue="true" Name="Enabled" Type="Boolean" />
                </SelectParameters>
            </asp:SqlDataSource>




              <asp:ListView runat="server" ID="ListView1" DataSourceID="SqlNews">
                <LayoutTemplate>
                    <asp:PlaceHolder runat="server" ID="ItemPlaceHolder"></asp:PlaceHolder>
                </LayoutTemplate>
                <ItemTemplate>




                     <article class="span4 post" style="height:485px;max-height:485px;"> 

                         <%--<img class="img-news" src='<%# String.Format("product_image/product/{0}", Eval("Url"))%>' alt="">--%>

                         <a href='<%# String.Format("product_image/product_original/{0}", Eval("Url"))%>' rel="prettyPhoto[pp_gal]" title='<%# Eval("ProductName")%>'><img alt='<%# Eval("ProductName")%>'  src='<%# String.Format("product_image/product/{0}", Eval("Url"))%>' class="img-news" /></a>


            <div class="inside">
              <p class="post-date"><i class="icon-calendar"></i><%# String.Format("{0:d}", Eval("SellingStartDate"))%></p>
              <h2><%# Eval("ProductName")%></h2>
              <div class="entry-content" >

                  <asp:Button runat="server" class="more-link"  meta:resourcekey="btn_ReadMoreResource1"   ID="btn_ReadMore" data-toggle="modal" data-target='<%# String.Format(("#myModal{0}"), Eval("ProductID"))%>' Visible='<%#IIf(Eval("Description").ToString.Length > 0 And Eval("Description") IsNot Nothing, True, False)%>' />

              </div>
            </div>

            <!-- /.inside -->
          </article>
          <!-- /.span4 -->





  <div class="modal hide fade" id='<%# String.Format(("myModal{0}"), Eval("ProductID"))%>' tabindex="-1" role="dialog" aria-labelledby="myModalLabel"  style="display: none" aria-hidden="true" >
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 class="modal-title" id="myModalLabel">
            
            <%#Eval("ProductName")%>
          

        </h4>
      </div>
      <div class="modal-body">
          <div id="MainContent">
	<ul id="Gallery" class="gallery">
         <%#Eval("Description")%>
      
	</ul>
</div>	
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal" >Close</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->







                    </ItemTemplate>
            </asp:ListView>




        </div>
        <!-- /.row -->
          <br />


          <asp:HyperLink ID="readmore_hlink"  runat="server" rel="prettyPhoto[iframes]" meta:resourcekey="readmore_hlinkResource1"  NavigateUrl="~/AllNews.aspx?iframe=true&width=100%&height=100%">更多 >></asp:HyperLink>

          <%--<a id="A1" href="~/AllNews.aspx?iframe=true&width=100%&height=100%" rel="prettyPhoto[iframes]" runat="server">Read More >></a>--%>


      </div>
      <!-- /.container -->









      










    </section>






</asp:Content>
