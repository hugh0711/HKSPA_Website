﻿Imports System.Linq
Imports Newtonsoft.Json.Linq
Imports System.Threading

Partial Class AllNews
    Inherits System.Web.UI.MasterPage







    Protected Sub btnLogout_Click(ByVal sender As Object, ByVal e As System.EventArgs)
        FormsAuthentication.SignOut()
        Response.Redirect("~/")
    End Sub

    Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
        If Not Page.IsPostBack Then

            'Submenu()
            Background()


            hfd_lang.Value = Thread.CurrentThread.CurrentUICulture.ToString().ToLower
        End If
    End Sub

    Dim db As New CategoryDataClassesDataContext
    Protected Sub Submenu()

        Dim mainCat As JArray
        mainCat = New JArray(From u In db.view_Categories _
                             Where u.ParentID = 0 And u.Enabled = True And u.FunctionID = 2 _
                                              Select New JObject( _
                                              New JProperty("CategoryID", u.CategoryID), _
                                              New JProperty("FunctionID", u.FunctionID), _
                                              New JProperty("Category", u.Category), _
                                              New JProperty("ParentID", u.ParentID), _
                                              New JProperty("SortOrder", u.SortOrder), _
                                              New JProperty("Enabled", u.Enabled), _
                                              New JProperty("Url", u.Url), _
                                              New JProperty("CategoryName", u.CategoryName), _
                                              New JProperty("Description", u.Description)))



        '<li><a href="home-version-2.html">HOME VERSION 2</a>


        '                            <ul class="sub-menu">
        '                                <li><a href="home-version-3.html">HOME VERSION 3</a></li>
        '                        <li><a href="home-version-4.html">HOME VERSION 4</a></li>
        '                        <li><a href="home-version-5.html">HOME VERSION 5</a></li>
        '                        <li><a href="home-version-6.html">HOME VERSION 6</a></li>
        '                                </ul>

        '                        </li>



        '                        <li><a href="home-version-3.html">HOME VERSION 3</a></li>
        '                        <li><a href="home-version-4.html">HOME VERSION 4</a></li>
        '                        <li><a href="home-version-5.html">HOME VERSION 5</a></li>
        '                        <li><a href="home-version-6.html">HOME VERSION 6</a></li>

        Dim submenu As String = ""

        For Each row In mainCat




            'MsgBox(String.Format("Main: catID={0} catName={1}", row.Item("CategoryID").ToString, row.Item("Category").ToString))




            Dim temp = New JArray(From u In db.view_Categories _
                             Where u.ParentID = row.Item("CategoryID").ToString And u.Enabled = True And u.FunctionID = 2 _
                                              Select New JObject( _
                                              New JProperty("CategoryID", u.CategoryID), _
                                              New JProperty("FunctionID", u.FunctionID), _
                                              New JProperty("Category", u.Category), _
                                              New JProperty("ParentID", u.ParentID), _
                                              New JProperty("SortOrder", u.SortOrder), _
                                              New JProperty("Enabled", u.Enabled), _
                                              New JProperty("Url", u.Url), _
                                              New JProperty("CategoryName", u.CategoryName), _
                                              New JProperty("Description", u.Description)))

            If temp.Count > 0 Then
                'main menu
                submenu &= String.Format("<li><a href='Portfolio.aspx?pID={0}&cID={1}'>{2}</a>", row.Item("ParentID").ToString, row.Item("CategoryID").ToString, row.Item("Category").ToString)

                submenu &= "<ul class='sub-menu'>"

                For Each item In temp
                    'MsgBox(String.Format("Child: MaincatID={0} catName={1}", item.Item("CategoryID").ToString, item.Item("Category").ToString))

                    'submenu
                    submenu &= String.Format("<li><a href='Portfolio_Sub.aspx?pID={0}&cID={1}'>{2}</a></li>", item.Item("ParentID").ToString, item.Item("CategoryID").ToString, item.Item("Category").ToString)


                    'Dim third_menu = New JArray(From u In db.view_Categories _
                    '         Where u.ParentID = item.Item("CategoryID").ToString And u.Enabled = True And u.FunctionID = 2 _
                    '                          Select New JObject( _
                    '                          New JProperty("CategoryID", u.CategoryID), _
                    '                          New JProperty("FunctionID", u.FunctionID), _
                    '                          New JProperty("Category", u.Category), _
                    '                          New JProperty("ParentID", u.ParentID), _
                    '                          New JProperty("SortOrder", u.SortOrder), _
                    '                          New JProperty("Enabled", u.Enabled), _
                    '                          New JProperty("Url", u.Url), _
                    '                          New JProperty("CategoryName", u.CategoryName), _
                    '                          New JProperty("Description", u.Description)))
                    'If third_menu.Count > 0 Then
                    '    submenu &= "<ul class='sub-menu'>"
                    '    For Each third In third_menu




                    '        submenu &= String.Format("<li><a href='Portfolio.aspx?pID={0}&cID={1}'>{2}</a></li>", third.Item("ParentID").ToString, third.Item("CategoryID").ToString, third.Item("Category").ToString)



                    '    Next
                    '    submenu &= "</ul>"
                    'Else

                    'End If





                Next

                submenu &= "</ul></li>"
            Else
                'main menu
                submenu &= String.Format("<li><a href='Portfolio.aspx?pID={0}&cID={1}'>{2}</a></li>", row.Item("ParentID").ToString, row.Item("CategoryID").ToString, row.Item("Category").ToString)
            End If

        Next

        'MsgBox(submenu)
        'lit_submenu.Text = submenu
    End Sub


    Protected Sub Background()
        '        <style type="text/css" >

        '    #headerwrap {
        '	width: 100%; 
        '	background: url(images/hkspaimg/hkpower6.jpg) #0b333f no-repeat center center fixed;
        '	-webkit-background-size: cover;
        '	-moz-background-size: cover;
        '	-o-background-size: cover;
        '	background-size: cover;
        '	;
        '	min-height: 600px;
        '	margin-top: -60px;
        '	padding-top:160px;
        '	text-align:center;
        '}
        '#headerwrap2 {
        '	width: 100%; 
        '	background: url(images/hkspaimg/hkpower8.jpg) #0b333f no-repeat center center fixed;
        '	-webkit-background-size: cover;
        '	-moz-background-size: cover;
        '	-o-background-size: cover;
        '	background-size: cover;
        '	;
        '	min-height: 300px;
        '	margin-top: -60px;
        '	padding-top:160px;
        '	text-align:center;
        '}
        '</style>

        Dim backgroundUrl = New JArray(From u In db.view_Promos _
                             Where u.PromoSettingID = 1 And u.Enabled = True _
                                              Select New JObject( _
                                              New JProperty("PromoSingleImageUrl", u.PromoSingleImageUrl)))



        Dim rn As New Random
        Dim n = rn.Next(0, backgroundUrl.Count - 1)
        Dim n2 As Integer

        Do
            n2 = rn.Next(0, backgroundUrl.Count - 1)

        Loop Until Not (n = n2)




        Dim BG As String = ""

        BG &= "<style type='text/css' >"
        BG &= "#headerwrap"

        BG &= BG_String(backgroundUrl(n).Item("PromoSingleImageUrl").ToString)

        BG &= "#headerwrap2"

        BG &= BG_String(backgroundUrl(n2).Item("PromoSingleImageUrl").ToString)

        BG &= "</style>"


        'lit_background.Text = BG

    End Sub

    Protected Function BG_String(ByVal file As String) As String
        Dim temp As String = ""
        temp &= "{"
        temp &= "width: 100%; "
        temp &= String.Format("background: url(product_image/banner/{0}) #0b333f no-repeat center center fixed;", file)
        temp &= "-webkit-background-size: cover;"
        temp &= "-moz-background-size: cover;"
        temp &= "-o-background-size: cover;"
        temp &= "background-size: cover;"
        temp &= ";"
        temp &= "min-height: 600px;"
        temp &= "margin-top:-20px;"
        temp &= "padding-top:160px;"
        temp &= "text-align:center;"
        temp &= "}"
        Return temp
    End Function

End Class


