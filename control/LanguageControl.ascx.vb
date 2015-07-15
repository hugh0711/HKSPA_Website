Imports System.Threading
Imports System.Globalization
Imports System.IO

Partial Class control_LanguageControl
    Inherits System.Web.UI.UserControl

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        If Not Page.IsPostBack Then
            If Request("lang") IsNot Nothing Then
                Dim Locale As String = Session("MyCulture")
                Select Case System.Threading.Thread.CurrentThread.CurrentCulture.ToString
                    Case "en-us"
                        btnEN.CssClass = "language_btn_class"
                    Case "zh-hk"
                        btnTC.CssClass = "language_btn_class"
                    Case "zh-cn"

                End Select
                Thread.CurrentThread.CurrentUICulture = New CultureInfo(Session("MyCulture").ToString())
                Response.Redirect(Request.Path)
            End If

        Else

           
        End If

        Session("btnEN") = btnEN.ClientID
        Session("btnTC") = btnTC.ClientID

        'Thread.CurrentThread.CurrentUICulture = New CultureInfo(Session("MyCulture").ToString())

    End Sub


    'Protected Sub btnLanguage_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btnEN.Click, btnSC.Click, btnTC.Click
    Protected Sub btnLanguage_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btnEN.Click, btnTC.Click
        Dim button As LinkButton = CType(sender, LinkButton)
        Session("MyCulture") = button.CommandArgument
        Thread.CurrentThread.CurrentUICulture = New CultureInfo(button.CommandArgument)
        Dim Filename As String = Path.GetFileName(Request.Path)
        Dim url As String
        url = Request.RawUrl
        'If Filename.ToLower = "page.aspx" Then
        '    url = Request.UrlReferrer.AbsolutePath
        'Else
        '    url = Request.Url.AbsolutePath
        'End If
        Response.Redirect(url)
    End Sub



End Class
