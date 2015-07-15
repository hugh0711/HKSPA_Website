
Partial Class page_special
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(sender As Object, e As System.EventArgs) Handles Me.Load
        If Not Page.IsPostBack Then
            Dim UserAgent As String = Request.UserAgent.ToString().ToLower()
            If UserAgent.Contains("android") OrElse UserAgent.Contains("iphone") OrElse
                UserAgent.Contains("ipod") OrElse UserAgent.Contains("ipad") Then
                If Not String.IsNullOrWhiteSpace(Request.QueryString("url")) Then
                    Response.Redirect(String.Format("{0}/page/m/{1}.htm", Utility.GetDomain(), Request.QueryString("url")))
                End If
            End If
            If Not String.IsNullOrWhiteSpace(Request.QueryString("url")) Then
                hfdUrl.Value = Request.QueryString("url")
                LoadData()
            End If
        End If
    End Sub

    Protected Sub LoadData()
        Dim SpecialID As Integer = (New SpecialDataSetTableAdapters.SpecialTableAdapter()).GetSpecialID(hfdUrl.Value).GetValueOrDefault(0)

        If SpecialID = 0 Then
            Response.Redirect("~/")
        Else
            hfdSpecialID.Value = SpecialID

            Dim da As New SpecialDataSetTableAdapters.view_SpecialTableAdapter()
            Dim dt As SpecialDataSet.view_SpecialDataTable
            Dim dr As SpecialDataSet.view_SpecialRow

            dt = da.GetDataBySpecialID(SpecialID)
            If dt.Rows.Count > 0 Then
                dr = dt.Rows(0)

                lblContent.Text = dr.Content

                Dim da2 As New SpecialDataSetTableAdapters.SpecialVideoTableAdapter()
                Dim dt2 As SpecialDataSet.SpecialVideoDataTable
                Dim dr2 As SpecialDataSet.SpecialVideoRow
                dt2 = da2.GetDataBySpecialID(SpecialID)
                If dt2.Rows.Count > 0 Then
                    dr2 = dt2.Rows(0)
                    Dim iframe As String = "<iframe width=""853"" height=""480"" src=""http://www.youtube.com/embed/{0}"" frameborder=""0"" allowfullscreen></iframe>"
                    txtVideoFrame.Text = String.Format(iframe, VideoClass.GetVideoID(dr2.VideoUrl))  'YouTube Video ID
                End If
            End If
        End If
    End Sub

    Protected Sub btnV1_Command(sender As Object, e As EventArgs)
        Dim iframe As String = "<iframe width=""853"" height=""480"" src=""http://www.youtube.com/embed/{0}"" frameborder=""0"" allowfullscreen></iframe>"
        Dim btn As LinkButton = CType(sender, LinkButton)
        txtVideoFrame.Text = String.Format(iframe, btn.CommandArgument)  'YouTube Video ID
    End Sub
End Class
