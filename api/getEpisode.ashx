<%@ WebHandler Language="VB" Class="getEpisode" %>

Imports System
Imports System.Web
Imports Newtonsoft.Json

Public Class getEpisode : Implements IHttpHandler
    
    Public Sub ProcessRequest(ByVal context As HttpContext) Implements IHttpHandler.ProcessRequest
        Dim EpisodeID As Integer = 0
        Dim HQ As Boolean = False
        Dim Media As VideoClass.Media = VideoClass.Media.YouTube
        If Not String.IsNullOrWhiteSpace(context.Request("eid")) Then
            EpisodeID = CInt(context.Request("eid"))
        End If
        If Not String.IsNullOrWhiteSpace(context.Request("hq")) Then
            If context.Request("hq").ToLower() = "true" Then
                HQ = True
            End If
        End If
        If Not String.IsNullOrWhiteSpace(context.Request("media")) Then
            Media = CType([Enum].Parse(GetType(VideoClass.Media), context.Request("media"), True), VideoClass.Media)
        End If
        
        Dim Episode As New EpisodeJsonClass(EpisodeID, "", HQ, Media)
        Dim domain As String = context.Request.Url.GetLeftPart(UriPartial.Authority)
        Dim p As String = "/assets/"
        If HttpContext.Current.Request.ApplicationPath <> "/" Then
            domain &= HttpContext.Current.Request.ApplicationPath & p
            p = HttpContext.Current.Request.ApplicationPath & p
        Else
            domain &= p
        End If
        
        Episode.Notes = Episode.Notes.Replace(p, domain)
        
        Dim Json As String = JsonConvert.SerializeObject(Episode, Formatting.Indented)
        Json = JsonClass.Callback(context, Json)

        context.Response.AppendHeader("Access-Control-Allow-Origin", "*")
        context.Response.AppendHeader("Access-Control-Allow-Credentials", "true")
        context.Response.ContentType = "application/json"
        context.Response.Write(Json)
    End Sub
 
    Public ReadOnly Property IsReusable() As Boolean Implements IHttpHandler.IsReusable
        Get
            Return False
        End Get
    End Property

End Class