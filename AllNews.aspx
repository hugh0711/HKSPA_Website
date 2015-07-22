<%@ Page Language="VB" AutoEventWireup="false" CodeFile="Default.aspx.vb" Inherits="_Default"  MasterPageFile="~/master/Empty_MasterPage.master"  culture="auto" uiculture="auto"%>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <asp:HiddenField runat="server" ID="hfd_lang" />
    <script src="gamma/modernizr.custom.70736.js"></script>
    <link rel="stylesheet" type="text/css" href="gamma/style.css"/>
	<noscript><link rel="stylesheet" type="text/css" href="gamma/noJS.css"/></noscript>
    <section id="portfolio" class="single-page scrollblock">


        <div class="container">
            
		    <div class="main">
			    <header class="clearfix">
				
				    <div class="support-note">
                        <h1>HKSPA<span style="color:#333;">Latest News from Hong Kong Sports Photography Association</span></h1>
					    <span class="note-ie">Sorry, only modern browsers.</span>
				    </div>
					
			    </header>
				
			    <div class="gamma-container gamma-loading" id="gamma-container">
                    <asp:SqlDataSource runat="server" ID="SqlNews"
                            ConnectionString="<%$ ConnectionStrings:MySqlConnection %>"
                            SelectCommand="SELECT [ProductID],[Enabled],[SortOrder],[ProductName],[SellingStartDate],[Url],[FunctionID],[Description] FROM [view_ProductImage] WHERE ([Enabled] = @Enabled) and [FunctionID]=3  and ([Lang]=@lang) ORDER BY [SortOrder]">

                            <SelectParameters>
                                <asp:ControlParameter ControlID="hfd_lang" Name="lang"
                                    PropertyName="Value" Type="String" />
                                <asp:Parameter DefaultValue="true" Name="Enabled" Type="Boolean" />
                            </SelectParameters>
                        </asp:SqlDataSource>
				    <ul class="gamma-gallery">
                        <asp:SqlDataSource runat="server" ID="SqlDataSource1"
                            ConnectionString="<%$ ConnectionStrings:MySqlConnection %>"
                            SelectCommand="SELECT [ProductID],[Enabled],[SortOrder],[ProductName],[SellingStartDate],[Url],[FunctionID],[Description] FROM [view_ProductImage] WHERE ([Enabled] = @Enabled) and [FunctionID]=3  and ([Lang]=@lang) ORDER BY [SortOrder]">

                            <SelectParameters>
                                <asp:ControlParameter ControlID="hfd_lang" Name="lang"
                                    PropertyName="Value" Type="String" />
                                <asp:Parameter DefaultValue="true" Name="Enabled" Type="Boolean" />
                            </SelectParameters>
                        </asp:SqlDataSource>

                        <asp:ListView runat="server" ID="ListView2" DataSourceID="SqlNews">
                            <LayoutTemplate>
                                <asp:PlaceHolder runat="server" ID="ItemPlaceHolder"></asp:PlaceHolder>
                            </LayoutTemplate>
                            <ItemTemplate>
						    <li>
							    <div data-alt="img03" data-description="<h3><%#Eval("ProductName")%></h3>" data-name="<%#Eval("Description")%>" data-max-width="1800" data-max-height="1350">
								    <div data-src="<%# String.Format("product_image/product_original/{0}", Eval("Url"))%>" data-min-width="1300"></div>
								    <%--<div data-src="images/xxlarge/3.jpg" data-min-width="1000"></div>
								    <div data-src="images/xlarge/3.jpg" data-min-width="700"></div>
								    <div data-src="images/large/3.jpg" data-min-width="300"></div>
								    <div data-src="images/medium/3.jpg" data-min-width="200"></div>
								    <div data-src="images/small/3.jpg" data-min-width="140"></div>--%>
								    <div data-src="<%# String.Format("product_image/product_original/{0}", Eval("Url"))%>"></div>
								    <noscript>
									    <img src="<%# String.Format("product_image/product_original/{0}", Eval("Url"))%>" alt="img03"/>
								    </noscript>
							    </div>
						    </li>
						
					        </ItemTemplate>
                        </asp:ListView>

                    </ul>

				    <div class="gamma-overlay"></div>

				    <%--<div id="loadmore" class="loadmore">Example for loading more items...</div>--%>

			    </div>

		    </div>
	    </div>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
	    <script src="gamma/jquery.masonry.min.js"></script>
	    <script src="gamma/jquery.history.js"></script>
	    <script src="gamma/js-url.min.js"></script>
	    <script src="gamma/jquerypp.custom.js"></script>
	    <script src="gamma/gamma.js"></script>
	    <script type="text/javascript">
		    $(function () {

		        var GammaSettings = {
		            // order is important!
		            viewport: [{
		                width: 1200,
		                columns: 5
		            }, {
		                width: 900,
		                columns: 4
		            }, {
		                width: 500,
		                columns: 3
		            }, {
		                width: 320,
		                columns: 2
		            }, {
		                width: 0,
		                columns: 2
		            }]
		        };

		        Gamma.init(GammaSettings, fncallback);


		        // Example how to add more items (just a dummy):

		        var page = 0,
				    items = ['<li><div data-alt="img03" data-description="<h3>Sky high</h3>" data-max-width="1800" data-max-height="1350"><div data-src="images/xxxlarge/3.jpg" data-min-width="1300"></div><div data-src="images/xxlarge/3.jpg" data-min-width="1000"></div><div data-src="images/xlarge/3.jpg" data-min-width="700"></div><div data-src="images/large/3.jpg" data-min-width="300"></div><div data-src="images/medium/3.jpg" data-min-width="200"></div><div data-src="images/small/3.jpg" data-min-width="140"></div><div data-src="images/xsmall/3.jpg"></div><noscript><img src="images/xsmall/3.jpg" alt="img03"/></noscript></div></li><li><div data-alt="img03" data-description="<h3>Sky high</h3>" data-max-width="1800" data-max-height="1350"><div data-src="images/xxxlarge/3.jpg" data-min-width="1300"></div><div data-src="images/xxlarge/3.jpg" data-min-width="1000"></div><div data-src="images/xlarge/3.jpg" data-min-width="700"></div><div data-src="images/large/3.jpg" data-min-width="300"></div><div data-src="images/medium/3.jpg" data-min-width="200"></div><div data-src="images/small/3.jpg" data-min-width="140"></div><div data-src="images/xsmall/3.jpg"></div><noscript><img src="images/xsmall/3.jpg" alt="img03"/></noscript></div></li><li><div data-alt="img03" data-description="<h3>Sky high</h3>" data-max-width="1800" data-max-height="1350"><div data-src="images/xxxlarge/3.jpg" data-min-width="1300"></div><div data-src="images/xxlarge/3.jpg" data-min-width="1000"></div><div data-src="images/xlarge/3.jpg" data-min-width="700"></div><div data-src="images/large/3.jpg" data-min-width="300"></div><div data-src="images/medium/3.jpg" data-min-width="200"></div><div data-src="images/small/3.jpg" data-min-width="140"></div><div data-src="images/xsmall/3.jpg"></div><noscript><img src="images/xsmall/3.jpg" alt="img03"/></noscript></div></li><li><div data-alt="img03" data-description="<h3>Sky high</h3>" data-max-width="1800" data-max-height="1350"><div data-src="images/xxxlarge/3.jpg" data-min-width="1300"></div><div data-src="images/xxlarge/3.jpg" data-min-width="1000"></div><div data-src="images/xlarge/3.jpg" data-min-width="700"></div><div data-src="images/large/3.jpg" data-min-width="300"></div><div data-src="images/medium/3.jpg" data-min-width="200"></div><div data-src="images/small/3.jpg" data-min-width="140"></div><div data-src="images/xsmall/3.jpg"></div><noscript><img src="images/xsmall/3.jpg" alt="img03"/></noscript></div></li><li><div data-alt="img03" data-description="<h3>Sky high</h3>" data-max-width="1800" data-max-height="1350"><div data-src="images/xxxlarge/3.jpg" data-min-width="1300"></div><div data-src="images/xxlarge/3.jpg" data-min-width="1000"></div><div data-src="images/xlarge/3.jpg" data-min-width="700"></div><div data-src="images/large/3.jpg" data-min-width="300"></div><div data-src="images/medium/3.jpg" data-min-width="200"></div><div data-src="images/small/3.jpg" data-min-width="140"></div><div data-src="images/xsmall/3.jpg"></div><noscript><img src="images/xsmall/3.jpg" alt="img03"/></noscript></div></li>']

		        function fncallback() {

		            $('#loadmore').show().on('click', function () {

		                ++page;
		                var newitems = items[page - 1]
		                if (page <= 1) {

		                    Gamma.add($(newitems));

		                }
		                if (page === 1) {

		                    $(this).remove();

		                }

		            });

		        }

		    });
	    </script>	

        <div id="paging" align="center" style="position: fixed; bottom: 10px; align-content: center; width: 100%">
            <asp:DataPager ID="DataPager1" runat="server" PagedControlID="ListView2" PageSize="20">
                <Fields>
                    <asp:NextPreviousPagerField
                        ButtonType="Button"
                        ShowFirstPageButton="true"
                        ShowNextPageButton="true"
                        ShowPreviousPageButton="false"
                        ButtonCssClass="ButtonCSS" />
                    <asp:NumericPagerField
                        NumericButtonCssClass="NumericButtonCSS"
                        CurrentPageLabelCssClass="CurrentPageLabelCSS"
                        NextPreviousButtonCssClass="NextPreviousButtonCSS" />
                    <asp:NextPreviousPagerField
                        ButtonType="Button"
                        ShowLastPageButton="true"
                        ShowNextPageButton="false"
                        ButtonCssClass="ButtonCSS" />
                </Fields>
            </asp:DataPager>
        </div>

    </section>

</asp:Content>
