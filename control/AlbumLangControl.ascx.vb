Imports System.IO

Partial Class control_AlbumLangControl
    Inherits System.Web.UI.UserControl

    Protected Sub Page_Init(sender As Object, e As System.EventArgs) Handles Me.Init
        Dim _FileBrowser As New CKFinder.FileBrowser()
        _FileBrowser.BasePath = ResolveClientUrl("~/ckfinder") & "/"
        _FileBrowser.SetupFCKeditor(htmlDescription)


        Dim Key As String = Path.GetFileNameWithoutExtension(Path.GetRandomFileName())
        Page.ClientScript.RegisterOnSubmitStatement(htmlDescription.GetType(), Key, "FCKeditorAPI.GetInstance('" + htmlDescription.ClientID + "').UpdateLinkedField();")
        
    End Sub

    
    Public Sub LoadAlbumLang(ByVal input_AlbumID As Guid, ByVal input_Lang As String)

        Dim album_database As New CategoryDataClassesDataContext()

        Dim album_detail = (From a In album_database.AlbumNames
                          Where a.AlbumID = input_AlbumID And a.Lang = input_Lang
                          Select a).FirstOrDefault()

        If album_detail IsNot Nothing Then
           
            txtName.Text = album_detail.AlbumName
                If DescriptionPlaceHolder.Visible Then
                txtDescription.Text = album_detail.Description
                Else
                htmlDescription.Value = album_detail.Description
                End If
                'txtLongDescription.Text = .LongDescription

        End If

        hfdLang.Value = input_Lang
    End Sub

    Public Function SaveAlbumLang(ByVal input_AlbumID As Guid) As Boolean
        Dim Success As Boolean = True
        Dim Desc As String = ""

        If DescriptionPlaceHolder.Visible Then
            Desc = txtDescription.Text
        Else
            Desc = htmlDescription.Value
        End If

        Dim album_database As New CategoryDataClassesDataContext()

        Dim album_detail = (From a In album_database.AlbumNames
                          Where a.AlbumID = input_AlbumID And a.Lang = hfdLang.Value
                          Select a).FirstOrDefault()

        'delete if album record exist
        If album_detail IsNot Nothing Then
            album_database.AlbumNames.DeleteOnSubmit(album_detail)
            Try
                album_database.SubmitChanges()
                Success = True
            Catch ex As Exception
                Success = False
            End Try

        End If

        'insert new album record if no error
        If Success Then
            Dim new_album As New AlbumName
            new_album.AlbumID = input_AlbumID
            new_album.AlbumName = txtName.Text
            new_album.Description = Desc
            new_album.Lang = hfdLang.Value

            album_database.AlbumNames.InsertOnSubmit(new_album)
            Try
                album_database.SubmitChanges()
                Success = True
            Catch ex As Exception
                Success = False
            End Try
        End If

        Return Success
    End Function

    Public Sub SetLang(ByVal Lang As String)
        hfdLang.Value = Lang
    End Sub

End Class
