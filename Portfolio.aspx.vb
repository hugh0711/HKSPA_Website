﻿Imports System.Linq
Imports Newtonsoft.Json.Linq
Imports System.Threading
Imports System.Globalization

Partial Class Portfolio
    Inherits System.Web.UI.Page

    Dim SQLData As JArray

    Protected Overrides Sub InitializeCulture()
        Thread.CurrentThread.CurrentUICulture = New CultureInfo(Session("MyCulture").ToString())
        MyBase.InitializeCulture()
    End Sub

    Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
        If Not Page.IsPostBack Then
            hfdCatID.Value = Request.QueryString("cID")
            If Not hfdCatID.Value = "" Then
                LoadSQLdata()

                Dim db As New CategoryDataClassesDataContext()
                Dim sub_category = From c In db.view_Categories
                                   Where c.CategoryID = hfdCatID.Value And c.Lang = Session("MyCulture").ToString()
                                   Select c

                If sub_category IsNot Nothing Then

                    lbl_currentLevel.Text = String.Format("> {0}", sub_category.FirstOrDefault.CategoryName)

                End If


            End If


        End If
    End Sub

    Protected Sub LoadSQLdata()
        Dim db As New CategoryDataClassesDataContext
        'SELECT [CategoryID], [Category],[Url] FROM [view_Category] WHERE ([Enabled] = @Enabled) and [ParentID]= @ParentID
        SQLData = New JArray(From u In db.view_ProductImages _
                                          Where u.CategoryID = hfdCatID.Value And u.Enabled = True And u.FunctionID = 2 _
                                                           Select New JObject( _
                                                           New JProperty("ProductID", u.ProductID), _
                                                           New JProperty("ProductName", u.ProductName), _
                                                           New JProperty("Author", u.Author), _
                                                           New JProperty("CameraModel", u.CameraModel), _
                                                           New JProperty("Url", u.Url)))
    End Sub

    Protected Function ImageItem(ByVal imageUrl As String, ByVal ProductName As String, ByVal ProductID As String) As String




        If SQLData.Count > 0 Then



            Dim image As String = ""

            image &= String.Format("<a href='product_image/product_original/{0}' rel='prettyPhoto[pp_gal]' title='{1}'><img src='product_image/product/{2}' width='60' height='60' alt='Red round shape' /></a>", imageUrl, ProductName, imageUrl)


            Return image
        Else
            Return ""
        End If

    End Function


    Protected Sub lvwFeature_DataBinding(sender As Object, e As EventArgs) Handles lvwFeature.DataBinding

    End Sub

    Protected Sub lvwFeature_DataBound(sender As Object, e As EventArgs) Handles lvwFeature.DataBound




    End Sub

    

    Protected Sub btn_back_rootLevel_Click(sender As Object, e As EventArgs) Handles btn_back_rootLevel.Click
        Response.Redirect("~/Default.aspx#portfolio")
    End Sub
End Class
