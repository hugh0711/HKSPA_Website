<%@ WebHandler Language="VB" Class="getMyCollection" %>

Imports System
Imports System.Web
Imports Newtonsoft.Json

Public Class getMyCollection : Implements IHttpHandler
    
    Public Sub ProcessRequest(ByVal context As HttpContext) Implements IHttpHandler.ProcessRequest
        If context.User.Identity.IsAuthenticated Then
            Dim Username As String = ""
            If Not String.IsNullOrWhiteSpace(context.Request("usr")) Then
                Username = context.Request("usr")
            Else
                Username = context.User.Identity.Name
            End If
            Dim TypeID As Integer
            Dim Lang As String = ConfigurationManager.AppSettings("UIDefaultLanguage")
            Dim HQ As Boolean = False
            Dim Format As String = "json"
            Dim Media As VideoClass.Media = VideoClass.Media.YouTube
        
            'If Not String.IsNullOrWhiteSpace(context.Request("user")) Then
            '    Username = context.Request("user")
            'End If
            If Not String.IsNullOrWhiteSpace(context.Request("lang")) Then
                Lang = context.Request("lang")
            End If
            If Not String.IsNullOrWhiteSpace(context.Request("hq")) Then
                If context.Request("hq").ToLower() = "true" Then
                    HQ = True
                End If
            End If
            If Not String.IsNullOrWhiteSpace(context.Request("media")) Then
                Media = CType([Enum].Parse(GetType(VideoClass.Media), context.Request("media"), True), VideoClass.Media)
            End If
            
            TypeID = CInt(ConfigurationManager.AppSettings("CollectionTypeID"))
        
            Dim dt As UserProductDataSet.view_UserProductImageDataTable = (New UserProductDataSetTableAdapters.view_UserProductImageTableAdapter()).GetDataByTypeID(Username, TypeID, Lang)
            Dim NotesList As New NotesListClass(dt, HQ, Media)
        
            Dim domain As String = context.Request.Url.GetLeftPart(UriPartial.Authority)
            If HttpContext.Current.Request.ApplicationPath <> "/" Then
                domain &= HttpContext.Current.Request.ApplicationPath
            End If
            For Each n As NotesJsonClass In NotesList
                n.Notes = n.Notes.Replace("~", domain)
            Next
  
            Dim Json As String = JsonConvert.SerializeObject(NotesList, Formatting.Indented)
            Json = JsonClass.Callback(context, Json)

            context.Response.AppendHeader("Access-Control-Allow-Origin", "*")
            context.Response.AppendHeader("Access-Control-Allow-Credentials", "true")
            context.Response.ContentType = "application/json"
            context.Response.Write(Json)

        Else
            context.Response.AppendHeader("Access-Control-Allow-Origin", "*")
            context.Response.AppendHeader("Access-Control-Allow-Credentials", "true")
            context.Response.StatusCode = CType(Net.HttpStatusCode.Forbidden, Integer)
            context.Response.End()
        End If
    End Sub
 
    Public ReadOnly Property IsReusable() As Boolean Implements IHttpHandler.IsReusable
        Get
            Return False
        End Get
    End Property

End Class