<%@ WebHandler Language="VB" Class="uploadImage" %>

Imports System
Imports System.Web
Imports System.Drawing
Imports System.IO

Public Class uploadImage : Implements IHttpHandler
    
    Public Sub ProcessRequest(ByVal context As HttpContext) Implements IHttpHandler.ProcessRequest
        'If context.User.Identity.IsAuthenticated Then
        Dim IsSuccess As Boolean = False
        Dim Filename As String = ""
            
        Dim Files As HttpFileCollection = context.Request.Files
        Dim Arr As String() = Files.AllKeys
        Dim TempFile As String
        Dim Ext As String = ".jpg"
        Dim da As New StatDataSetTableAdapters.ViewCountTableAdapter()
            
        'da.Insert("trace", 0, Arr.Length, "upload Image", Now())
        If Arr.Length > 0 Then
            'TempFile = Path.GetFileNameWithoutExtension(Path.GetRandomFileName()) & Ext
            TempFile = Files(0).FileName
            'context.Response.Write(TempFile)
            'context.Response.End()
            TempFile = context.Server.MapPath(Path.Combine(ConfigurationManager.AppSettings("UploadPath"), TempFile))
            Files(0).SaveAs(TempFile)
            'da.Insert("trace", 0, 0, "upload Image 1: " & TempFile, Now())
            
            Filename = TempFile 'Guid.NewGuid().ToString & Ext
            Dim Url As String = IO.Path.Combine(ConfigurationManager.AppSettings("CommentImagePath"), Filename)
            'AsyncFileUpload1.SaveAs(Server.MapPath(Url))
            Dim Image As Drawing.Image = Drawing.Image.FromFile(TempFile)
            Dim tbSize As Drawing.Size = New Drawing.Size(CInt(ConfigurationManager.AppSettings("CommentImageWidth")), CInt(ConfigurationManager.AppSettings("CommentImageHeight")))
            Dim tb As Drawing.Image = ImageClass.ResizeImage(Image, tbSize)
            Filename = IO.Path.GetFileNameWithoutExtension(Filename) & Ext
            Url = IO.Path.Combine(ConfigurationManager.AppSettings("CommentImagePath"), Filename)
            ImageClass.SaveJPGWithCompressionSetting(tb, context.Server.MapPath(Url), CLng(ConfigurationManager.AppSettings("JpegCompression")))
            'da.Insert("trace", 0, 0, "upload Image 2", Now())

            'Dim Image As Drawing.Image = Drawing.Image.FromFile(Server.MapPath(Url))
            tbSize = New Drawing.Size(CInt(ConfigurationManager.AppSettings("CommentThumbnailWidth")), CInt(ConfigurationManager.AppSettings("CommentThumbnailHeight")))
            tb = ImageClass.ResizeImage(tb, tbSize)
            Url = IO.Path.Combine(ConfigurationManager.AppSettings("CommentThumbnailPath"), Filename)
            ImageClass.SaveJPGWithCompressionSetting(tb, context.Server.MapPath(Url), CLng(ConfigurationManager.AppSettings("JpegCompression")))
            'da.Insert("trace", 0, 0, "upload Image 3", Now())
        End If
        'da.Insert("trace", 0, 0, "upload Image 4", Now())

        'Dim Json = JsonClass.GetStatus(IsSuccess, Filename)
        'Json = JsonClass.Callback(context, Json)
        'context.Response.ContentType = "application/json"
        'context.Response.Write(Json)
        context.Response.StatusCode = CType(Net.HttpStatusCode.OK, Integer)
        context.Response.End()
        'Else
        'context.Response.StatusCode = CType(Net.HttpStatusCode.Forbidden, Integer)
        'context.Response.End()
        'End If

    End Sub
 
    Public ReadOnly Property IsReusable() As Boolean Implements IHttpHandler.IsReusable
        Get
            Return False
        End Get
    End Property

End Class