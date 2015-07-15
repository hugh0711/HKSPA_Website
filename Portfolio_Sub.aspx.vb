Imports System.Linq
Imports Newtonsoft.Json.Linq
Imports System.Threading
Imports System.Globalization

Partial Class Portfolio_Sub
    Inherits System.Web.UI.Page

    Protected Overrides Sub InitializeCulture()
        Thread.CurrentThread.CurrentUICulture = New CultureInfo(Session("MyCulture").ToString())
        MyBase.InitializeCulture()
    End Sub

    Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
        If Not Page.IsPostBack Then
            hfdCatID.Value = Request.QueryString("cID")

            If Not hfdCatID.Value = "" Then




                Dim cID = Request.QueryString("cID")

                Dim db As New CategoryDataClassesDataContext()
                Dim sub_category = From c In db.view_Categories
                                   Where c.CategoryID = cID And c.Lang = Session("MyCulture").ToString()
                                   Select c

                If sub_category IsNot Nothing Then

                    lbl_currentLevel.Text = String.Format("> {0}", sub_category.FirstOrDefault.CategoryName)

                    Dim upper_category_ID = sub_category.FirstOrDefault.ParentID

                    hfd_firstLevel.Value = upper_category_ID

                    Dim sub_category_name = (From c In db.view_Categories
                                   Where c.CategoryID = upper_category_ID And c.Lang = Session("MyCulture").ToString()
                                   Select c.CategoryName).FirstOrDefault()

                    btn_back_firstLevel.Text = sub_category_name

                End If



            End If


        End If
    End Sub

 


    Protected Function ImageItem(CatID As Guid) As String

        Dim result As String = ""


        LoadSQLdata(CatID)

        If SQLData.Count > 0 Then

            For Each row In SQLData
                Dim url As String = row.Item("Url")
                Dim big_image As String = String.Format("product_image/album/{0}/{1}", CatID, url)
                Dim small_image As String = String.Format("product_image/album/{0}/tb/{1}", CatID, url)
                Dim author As String = ""
                If row.Item("Author") IsNot Nothing And row.Item("Author").ToString.Length > 0 Then
                    author = row.Item("Author")
                End If

                result &= String.Format("<li><a href='{0}'><img src='{1}' alt='Photo By {2}'/></a></li>", big_image, small_image, author)
            Next

        End If




        Return result

    End Function



    Dim SQLData As JArray
    Protected Sub LoadSQLdata(ByVal aID As Guid)
        Dim db As New CMSDataContext

        'SELECT [ProductID], [ProductName],[Author],[CameraModel],[Url] FROM [view_ProductImage] WHERE ([Enabled] = @Enabled) and [CategoryID]= @CategoryID ORDER BY [ModifyDate] DESC
        SQLData = New JArray(From u In db.view_AlbumPhotoInfos _
                                          Where u.AlbumID = aID And u.Enabled = True _
                                                           Select New JObject( _
                                                           New JProperty("ProductID", u.PhotoID), _
                                                           New JProperty("Author", u.Author), _
                                                           New JProperty("CameraModel", u.camera_model), _
                                                           New JProperty("Url", u.PhotoName)))
    End Sub


    Protected Sub btn_back_firstLevel_Click(sender As Object, e As EventArgs) Handles btn_back_firstLevel.Click
        Response.Redirect(String.Format("~/Portfolio.aspx?cID={0}#portfolio", hfd_firstLevel.Value))
    End Sub

    Protected Sub btn_back_rootLevel_Click(sender As Object, e As EventArgs) Handles btn_back_rootLevel.Click
        Response.Redirect("~/Default.aspx#portfolio")
    End Sub
End Class
