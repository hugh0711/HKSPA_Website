Imports System.Linq
Imports Newtonsoft.Json.Linq
Imports System.Threading
Imports System.Globalization

Partial Class Portfolio_Group
    Inherits System.Web.UI.Page


    Dim SQLData As JArray

    Protected Overrides Sub InitializeCulture()
        Thread.CurrentThread.CurrentUICulture = New CultureInfo(Session("MyCulture").ToString())
        MyBase.InitializeCulture()
    End Sub

    Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
        If Not Page.IsPostBack Then
            hfdAlbumID.Value = Request.QueryString("aID")
            'LoadAllSQLdata()


            If Not hfdAlbumID.Value = "" Then

                Dim aID = Request.QueryString("aID")

                Dim db As New CategoryDataClassesDataContext()

                Dim cms_db As New CMSDataContext()

                Dim album_category = From c In cms_db.AlbumCategories
                                 Where c.AlbumID.ToString() = aID
                                 Select c.CategoryID

                If album_category IsNot Nothing Then

                    Dim sub_category = From c In db.view_Categories
                                       Where c.CategoryID = album_category.FirstOrDefault() And c.Lang = Session("MyCulture").ToString()
                                       Select c

                    If sub_category IsNot Nothing Then

                        Dim album_name = (From a In cms_db.view_AlbumPhotoInfos
                                       Where a.AlbumID.ToString() = aID And a.Lang = Session("MyCulture").ToString()
                                       Select a.AlbumName).FirstOrDefault()

                        lbl_currentLevel.Text = String.Format("> {0}", album_name)

                        hfd_secondLevel.Value = sub_category.FirstOrDefault.CategoryID

                        btn_back_secondLevel.Text = sub_category.FirstOrDefault.CategoryName

                        Dim upper_category_ID = sub_category.FirstOrDefault.ParentID

                        hfd_firstLevel.Value = upper_category_ID

                        Dim sub_category_name = (From c In db.view_Categories
                                       Where c.CategoryID = upper_category_ID And c.Lang = Session("MyCulture").ToString()
                                       Select c.CategoryName).FirstOrDefault()



                        btn_back_firstLevel.Text = sub_category_name

                    End If

                End If

            End If



        End If
    End Sub

    Protected Sub LoadSQLdata(ByVal cID As Integer)
        Dim db As New CategoryDataClassesDataContext

        'SELECT [ProductID], [ProductName],[Author],[CameraModel],[Url] FROM [view_ProductImage] WHERE ([Enabled] = @Enabled) and [CategoryID]= @CategoryID ORDER BY [ModifyDate] DESC
        SQLData = New JArray(From u In db.view_ProductImages _
                                          Where u.CategoryID = cID And u.Enabled = True And u.FunctionID = 2 _
                                                           Select New JObject( _
                                                           New JProperty("ProductID", u.ProductID), _
                                                           New JProperty("ProductName", u.ProductName), _
                                                           New JProperty("Author", u.Author), _
                                                           New JProperty("CameraModel", u.CameraModel), _
                                                           New JProperty("CategoryID", u.CategoryID), _
                                                           New JProperty("Url", u.Url)))
    End Sub

    Dim AllSQLData As JArray
    Protected Sub LoadAllSQLdata()
        Dim db As New CategoryDataClassesDataContext

        'SELECT [ProductID], [ProductName],[Author],[CameraModel],[Url] FROM [view_ProductImage] WHERE ([Enabled] = @Enabled) and [CategoryID]= @CategoryID ORDER BY [ModifyDate] DESC
        AllSQLData = New JArray(From u In db.view_ProductImages _
                                          Where u.Enabled = True And u.FunctionID = 2 _
                                                           Select New JObject( _
                                                           New JProperty("ProductID", u.ProductID), _
                                                           New JProperty("ProductName", u.ProductName), _
                                                           New JProperty("Author", u.Author), _
                                                           New JProperty("CameraModel", u.CameraModel), _
                                                           New JProperty("CategoryID", u.CategoryID), _
                                                           New JProperty("Url", u.Url)))
    End Sub

    Protected Function ImageItem(ByVal imageUrl As String, ByVal cID As Integer, ByVal category As String) As String


        Dim image As String = ""
        LoadSQLdata(cID)

        If SQLData.Count > 0 Then






            image &= String.Format("<img src='{0}' width='387' height='85' usemap='#image_map' border='0'>", imageUrl)

            image &= " <map name='image_map'>"

            

            For Each row In SQLData

                'If row.Item("CategoryID").ToString = cID Then
                image &= String.Format("<area rel='prettyPhoto[image_map]' shape='rect' coords='6,11,720,730' href='product_image/product/{0}' title='{1}'>", row.Item("Url"), row.Item("ProductName"))
                'End If


            Next

            'AllSQLData.Except(SQLData)
            'For Each other In AllSQLData
            '    Dim exclude_item As String = String.Format("<area rel='prettyPhoto[image_map]' shape='rect' coords='6,11,720,730' href='product_image/product/{0}' title='{1}'>", other.Item("Url"), other.Item("ProductName"))

            '    image.Replace(exclude_item, "")
            'Next

            image &= "</map>"

            Return image
        Else
            Return ""
        End If

    End Function


    
   



    Protected Sub btn_back_rootLevel_Click(sender As Object, e As EventArgs) Handles btn_back_rootLevel.Click
        Response.Redirect("~/Default.aspx#portfolio")
    End Sub

    Protected Sub btn_back_secondLevel_Click(sender As Object, e As EventArgs) Handles btn_back_secondLevel.Click
        Response.Redirect(String.Format("~/Portfolio_sub.aspx?cID={0}#portfolio", hfd_secondLevel.Value))
    End Sub

    Protected Sub btn_back_firstLevel_Click(sender As Object, e As EventArgs) Handles btn_back_firstLevel.Click
        Response.Redirect(String.Format("~/Portfolio.aspx?cID={0}#portfolio", hfd_firstLevel.Value))
    End Sub
End Class
