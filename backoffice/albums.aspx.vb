﻿
Partial Class backoffice_albums
    Inherits System.Web.UI.Page

   


    Protected Sub Page_Load(sender As Object, e As System.EventArgs) Handles Me.Load

        hfd_defaultLanguage.Value = ConfigurationManager.AppSettings("UIDefaultLanguage")

        If Not Page.IsPostBack Then
            hfdCategoryID.Value = Request("category")

            If hfdCategoryID.Value = "" Or hfdCategoryID.Value = "0" Then
                'dsAlbum.SelectCommand = String.Format("SELECT AlbumID, AlbumName, Enabled, PhotoCount, PreviewUrl FROM view_AlbumCategory where Lang='{0}' ORDER BY CreateDate", hfd_defaultLanguage.Value)
                'dsAlbum.DataBind()
                lvAlbum.DataSourceID = "dsAlbumAll"
                dsAlbumAll.DataBind()
            Else

                LoadCategoryTree()

            End If

        End If
    End Sub

    Protected Sub btnCreate_Click(sender As Object, e As System.EventArgs) Handles btnCreate.Click
        Response.Redirect("~/backoffice/album.aspx")
    End Sub

    Protected Sub btnEdit_Click(sender As Object, e As System.EventArgs)

    End Sub

    Protected Sub btnDelete_Click(sender As Object, e As System.EventArgs)

    End Sub

    Protected Sub lvAlbum_ItemCommand(sender As Object, e As System.Web.UI.WebControls.ListViewCommandEventArgs) Handles lvAlbum.ItemCommand
        Select Case e.CommandName
            Case "edit"
                Response.Redirect(String.Format("~/backoffice/album.aspx?album={0}", e.CommandArgument))
            Case "delete1"
                Dim db As New CMSDataContext
                Dim AlbumID As New Guid(e.CommandArgument.ToString())
                
                Dim q = (From p In db.AlbumPhotos Where p.AlbumID = AlbumID Select p)
                db.AlbumPhotos.DeleteAllOnSubmit(q)

                Dim q2 = (From a In db.Albums Where a.AlbumID = AlbumID Select a).Single()
                db.Albums.DeleteOnSubmit(q2)

                db.SubmitChanges()


                Dim album_database As New CategoryDataClassesDataContext()
                Dim all_albumName = (From a In album_database.AlbumNames Where a.AlbumID = AlbumID Select a)
                'delete album name from AlbumNames table
                If all_albumName.Count = 1 Then
                    'delete once if only one record
                    album_database.AlbumNames.DeleteOnSubmit(all_albumName)
                    album_database.SubmitChanges()
                ElseIf all_albumName.Count > 1 Then
                    'delete all records from AlbumNames table if more than one records
                    For Each AlbumName In all_albumName
                        album_database.AlbumNames.DeleteOnSubmit(AlbumName)
                        album_database.SubmitChanges()
                    Next

                End If


                Dim AlbumPath As String = MapPath(Utility.GetAlbumPath(AlbumID, ImageClass.ImageSize.Normal))
                If IO.Directory.Exists(AlbumPath) Then
                    Utility.DeleteFilesAndFolders(AlbumPath)
                    IO.Directory.Delete(AlbumPath, False)
                End If

                lvAlbum.DataBind()
        End Select
    End Sub





#Region "Tree View"

    Protected Sub TreeView1_SelectedNodeChanged(ByVal sender As Object, ByVal e As System.EventArgs) Handles TreeView1.SelectedNodeChanged
        If TreeView1.SelectedNode Is Nothing Then
            lblParentID.Text = "0"
            lblParentID.Visible = False
            hfdCategoryID.Value = 0
        Else
            Dim CategoryID As Integer = Convert.ToInt32(TreeView1.SelectedNode.Value)
            LoadCategory(CategoryID)
            ViewState("ByCategory") = True
            lblCategoryID.Text = CategoryID
            BindList()
            'ReorderList1.DataBind()
            btnSelectCategory_ModalPopupExtender.Hide()
            lblParentID.Visible = False
            hfdCategoryID.Value = Convert.ToInt32(TreeView1.SelectedNode.Value)
        End If
        'lblCategory.Text = TreeView1.SelectedNode.Text
        'ReorderList1.DataBind()
    End Sub

    Protected Sub TreeView1_TreeNodePopulate(ByVal sender As Object, ByVal e As System.Web.UI.WebControls.TreeNodeEventArgs) Handles TreeView1.TreeNodePopulate
        'lblCategory.Text = e.Node.Text
        LoadCategoryTree(e.Node, Convert.ToInt32(e.Node.Value))
    End Sub

    Protected Sub LoadCategoryTree(ByVal CurrentNode As TreeNode, ByVal ID As Integer)
        Dim CategoryAdaptor As New CategoryDataSetTableAdapters.CategoryTableAdapter()
        Dim CategoryTable As CategoryDataSet.CategoryDataTable
        Dim CategoryRow As CategoryDataSet.CategoryRow
        Dim node As TreeNode

        CurrentNode.ChildNodes.Clear()


        CategoryTable = CategoryAdaptor.GetDataByParentID(CInt(ID), 2)
        For Each CategoryRow In CategoryTable.Rows
            With CategoryRow
                'node = New TreeNode(.Category, .CategoryID)

                'get category by CurrentCulture setting
                node = New TreeNode(CategoryClass.GetCategoryName(.CategoryID), .CategoryID)

                node.PopulateOnDemand = True
                node.SelectAction = TreeNodeSelectAction.SelectExpand
            End With
            CurrentNode.ChildNodes.Add(node)
        Next
        lblParentID.Text = ID

    End Sub

#End Region

    Protected Sub LoadCategory(ByVal CategoryID As Integer)
        With CategoryPathControl1
            .CategoryID = CategoryID
            .ShowPath()
        End With

        Dim CategoryAdatper As New CategoryDataSetTableAdapters.CategoryTableAdapter()
        'ViewState("fn") = CategoryAdatper.GetFunctionID(CategoryID)

    End Sub

    Protected Sub btnAllCategory_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btnAllCategory.Click
        ViewState("ByCategory") = False
        lblCategoryID.Text = "0"
        LoadCategory(0)
        BindList()

        hfdCategoryID.Value = "0"
        dsAlbum.SelectCommand = String.Format("SELECT AlbumID, AlbumName, Enabled, PhotoCount, PreviewUrl FROM view_AlbumCategory where Lang='{0}' ORDER BY [AlbumDate] desc", hfd_defaultLanguage.Value)
        dsAlbum.DataBind()
    End Sub

    Protected Sub BindList()
        If ViewState("ByCategory") Then

            lvAlbum.DataSourceID = "dsAlbum"
            dsAlbumAll.DataBind()

            lblAllCategory.Visible = False
            lblParentID.Visible = False
        Else

            lvAlbum.DataSourceID = "dsAlbumAll"
            dsAlbumAll.DataBind()

            lblAllCategory.Visible = True

        End If

    End Sub

    Protected Sub LoadCategoryTree()
        BindList()
        Dim db As New CMSDataContext
        Dim CategoryID = hfdCategoryID.Value


        
            With CategoryPathControl1
            .CategoryID = CategoryID
                .ShowPath()
            End With

            Dim CategoryAdatper As New CategoryDataSetTableAdapters.CategoryTableAdapter()

            ViewState("ByCategory") = True
            BindList()

        





    End Sub


    


    Protected Sub btnSearch_Click(sender As Object, e As EventArgs) Handles btnSearch.Click
        If txtAlbumName.Text.Length > 0 Then


            If lvAlbum.DataSourceID = "dsAlbum" Then
                dsAlbum.SelectCommand = "SELECT [AlbumID], [AlbumName], [Enabled], [PhotoCount], [PreviewUrl] FROM view_AlbumCategory WHERE (CategoryID = @CategoryID) AND (Lang = @Lang) AND AlbumName LIKE '%" & txtAlbumName.Text & "%' ORDER BY [AlbumDate] desc"
            Else
                dsAlbumAll.SelectCommand = "SELECT [AlbumID], [AlbumName], [Enabled], [PhotoCount], [PreviewUrl] FROM view_AlbumCategory WHERE (Lang = @Lang) AND AlbumName LIKE '%" & txtAlbumName.Text & "%' ORDER BY [AlbumDate] desc"
            End If

            lvAlbum.DataBind()



        End If
    End Sub

    Protected Sub btnReset_Click(sender As Object, e As EventArgs) Handles btnReset.Click
        lvAlbum.DataSourceID = "dsAlbumAll"

        dsAlbumAll.DataBind()
    End Sub
End Class
