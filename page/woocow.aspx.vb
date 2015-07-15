
Partial Class page_woocow
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(sender As Object, e As System.EventArgs) Handles Me.Load
        If Not Page.IsPostBack Then
            Page.DataBind()
            Dim iframe As String = "<iframe width=""853"" height=""480"" src=""http://www.youtube.com/embed/{0}"" frameborder=""0"" allowfullscreen></iframe>"
            txtVideoFrame.Text = String.Format(iframe, "0eGcyIiCf5o")  'YouTube Video ID

        End If
    End Sub

    Protected Sub btnV1_Click(sender As Object, e As System.EventArgs) Handles btnV1.Click


    End Sub

    Protected Sub btnV1_Command(sender As Object, e As System.Web.UI.WebControls.CommandEventArgs) Handles btnV1.Command, btnV2.Command
        Dim iframe As String = "<iframe width=""853"" height=""480"" src=""http://www.youtube.com/embed/{0}"" frameborder=""0"" allowfullscreen></iframe>"
        txtVideoFrame.Text = String.Format(iframe, e.CommandArgument)  'YouTube Video ID
    End Sub
End Class
