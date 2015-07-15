﻿
Partial Class backoffice_page_name
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        If Not Page.IsPostBack Then
            If Request("id") IsNot Nothing Then
                hfdCategoryID.Value = Request("id")
                Bind()
            End If
        End If
    End Sub

    Protected Sub Bind()
        GridView1.DataBind()
    End Sub

    Protected Sub btnBack_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btnBack.Click
        Response.Redirect("~/backoffice/category.aspx?id=" & hfdCategoryID.Value)
    End Sub

    Protected Sub btnTranslate_Click(ByVal sender As Object, ByVal e As System.EventArgs)
        Try
            Dim CategoryAdapter As New CategoryDataSetTableAdapters.CategoryTableAdapter()
            Dim CategoryNameAdapter As New CategoryDataSetTableAdapters.CategoryNameTableAdapter()
            Dim LanguageSupport() As String = ConfigurationManager.AppSettings("LanguageSupport").ToString().Split(",")
            Dim CategoryName As String
            Dim Translate As New GoogleTranslateClass

            Dim container As Control = CType(sender, Button).Parent()
            Dim hfdCategoryNameID As HiddenField = CType(container.FindControl("hfdCategoryNameID"), HiddenField)
            Dim hfdCategoryName As HiddenField = CType(container.FindControl("hfdCategoryName"), HiddenField)
            Dim hfdLang As HiddenField = CType(container.FindControl("hfdLang"), HiddenField)

            Dim Category As String = hfdCategoryName.Value
            Dim Language As String = hfdLang.Value
            Dim CategoryID As Integer = CInt(hfdCategoryID.Value)

            For Each ToLang In LanguageSupport
                CategoryName = Translate.Translate(Category, Language, ToLang)
                If CategoryNameAdapter.UpdateQuery(CategoryName, "", CategoryID, ToLang) = 0 Then
                    CategoryNameAdapter.Insert(CategoryID, ToLang, CategoryName, "")
                End If

                If ToLang = ConfigurationManager.AppSettings("DefaultLanguage") Then
                    CategoryAdapter.UpdateCategory(CategoryName, CategoryID)
                End If
            Next
            Bind()
            lblMessage.Text = "類別名稱已翻譯完成"
            lblMessage.ForeColor = Drawing.Color.Black
        Catch ex As Exception
            lblMessage.Text = ex.Message
            lblMessage.ForeColor = Drawing.Color.Red
        End Try
    End Sub

End Class
