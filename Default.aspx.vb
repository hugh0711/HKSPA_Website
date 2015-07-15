Imports System.Linq
Imports Newtonsoft.Json.Linq
Imports System.Threading
Imports System.Globalization

Partial Class _Default
    Inherits System.Web.UI.Page

    Dim SQLData As JArray

    Protected Overrides Sub InitializeCulture()
        Thread.CurrentThread.CurrentUICulture = New CultureInfo(Session("MyCulture").ToString())
        MyBase.InitializeCulture()
    End Sub

    Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
        If Not Page.IsPostBack Then

            hfd_lang.Value = Thread.CurrentThread.CurrentUICulture.ToString().ToLower

        End If
    End Sub

    Protected Sub LoadSQLdata(ByVal cID As Integer)
        Dim db As New CategoryDataClassesDataContext
        '"SELECT [CategoryID], [Category],[Url] FROM [view_Category] WHERE ([Enabled] = @Enabled) and [ParentID]= @ParentID
        SQLData = New JArray(From u In db.view_Categories _
                                          Where u.ParentID = cID And u.Enabled = True And u.FunctionID = 2 _
                                                           Select New JObject( _
                                                           New JProperty("CategoryID", u.CategoryID), _
                                                           New JProperty("Category", u.Category), _
                                                           New JProperty("Url", u.Url)))
    End Sub

    Protected Function ImageItem(ByVal imageUrl As String, ByVal ProductName As String, ByVal cID As Integer) As String

        LoadSQLdata(cID)

        Dim image As String = ""


        image &= String.Format("<img src='{0}' width='387' height='85' usemap='#image_map' border='0'>", imageUrl)

        image &= " <map name='image_map'>"
        image &= String.Format("<area rel='prettyPhoto[image_map]' shape='rect' coords='6,11,720,730' href='{0}' title='{1}'>", imageUrl, ProductName)

        For Each row In SQLData
            image &= String.Format("<area rel='prettyPhoto[image_map]' shape='rect' coords='6,11,720,730' href='product_image/product/{0}' title='{1}'>", row.Item("Url"), row.Item("Category"))
        Next

        image &= "</map>"

        Return image

    End Function

   
   
   

    'Protected Sub btn_More_Click(sender As Object, e As EventArgs) Handles btn_More.Click

    '    Response.Redirect("~/Portfolio.aspx")
    'End Sub
End Class
