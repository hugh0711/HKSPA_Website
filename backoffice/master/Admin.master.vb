
Partial Class master_Admin
    Inherits System.Web.UI.MasterPage

    Protected Sub btnLogout_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btnLogout.Click
        FormsAuthentication.SignOut()
        Response.Redirect(FormsAuthentication.LoginUrl)
    End Sub

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        If Not Page.IsPostBack Then
            AdminPlaceHolder.Visible = Roles.IsUserInRole(Page.User.Identity.Name, "Admin")
            'ProductManagerPlaceHolder.Visible = Roles.IsUserInRole(Page.User.Identity.Name, "Product Manager")
            'lnkSpecialCategory.NavigateUrl = String.Format("~/backoffice/categories.aspx?fn={0}", ConfigurationManager.AppSettings("SpecialFunctionID"))
            'lnkSpecialList.NavigateUrl = String.Format("~/backoffice/specials.aspx?fn={0}", ConfigurationManager.AppSettings("SpecialFunctionID"))
        End If
    End Sub

    Protected Function GetAllowUser(ByVal AllowRole As String) As Boolean
        Dim CurrentUsername As String = Membership.GetUser().UserName
        Dim Rs As String() = AllowRole.Split(",")
        Dim Allow As Boolean = False

        For Each r As String In Rs
            If Roles.IsUserInRole(CurrentUsername, r) Then
                Allow = True
                Exit For
            End If
        Next

        Return Allow
    End Function
End Class

