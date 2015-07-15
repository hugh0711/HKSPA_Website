
Partial Class page_woocow_m
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(sender As Object, e As System.EventArgs) Handles Me.Load
        If Not Page.IsPostBack Then
            Page.DataBind()
            SetVideo("0eGcyIiCf5o")
        End If
    End Sub

    Protected Sub btnV1_Command(sender As Object, e As System.Web.UI.WebControls.CommandEventArgs) Handles btnV1.Command, btnV2.Command
        SetVideo(e.CommandArgument)
    End Sub

    Protected Sub SetVideo(VideoID As String)
        'Dim iframe As String = "<iframe width=""560"" height=""315"" src=""http://www.youtube.com/embed/{0}"" frameborder=""0"" allowfullscreen></iframe>"
        Dim iframe As String = "<div id='video-container'><iframe width='100%' height='100%' src='http://www.youtube.com/embed/{0}?rel=0' frameborder='0' allowfullscreen></iframe></div>"
        txtVideoFrame.Text = String.Format(iframe, VideoID)  'YouTube Video ID
    End Sub

End Class
