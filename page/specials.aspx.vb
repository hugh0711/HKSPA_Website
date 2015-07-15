
Partial Class page_specials
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(sender As Object, e As System.EventArgs) Handles Me.Load
        If Not Page.IsPostBack Then
            If String.IsNullOrWhiteSpace(Request("id")) Then
                hfdParentID.Value = "0"
            Else
                hfdParentID.Value = Request("id")
            End If
            hfdFunctionID.Value = ConfigurationManager.AppSettings("SpecialFunctionID")

        End If
    End Sub

    Protected Function GetImage(CategoryID As Integer) As String
        Return IO.Path.Combine(ConfigurationManager.AppSettings("CategoryImagePath"), CategoryID & ".jpg")
    End Function

End Class
