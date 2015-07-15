<%@ WebHandler Language="VB" Class="getNews" %>

Imports System
Imports System.Web
Imports Newtonsoft.Json

Public Class getNews : Implements IHttpHandler
    
    Public Sub ProcessRequest(ByVal context As HttpContext) Implements IHttpHandler.ProcessRequest
        Dim NewsID As Integer = 0
        If context.Request("id") IsNot Nothing AndAlso context.Request("id") <> "" Then
            NewsID = CInt(context.Request("id"))
        End If
        
        Dim News As New ProductJsonClass(NewsID, Integer.MaxValue, True)
        Dim domain As String = context.Request.Url.GetLeftPart(UriPartial.Authority)
        If HttpContext.Current.Request.ApplicationPath <> "/" Then
            domain &= HttpContext.Current.Request.ApplicationPath
        End If
        News.ImageUrl = News.ImageUrl.Replace("~", domain)
        
        Dim Json As String = JsonConvert.SerializeObject(News, Formatting.Indented)
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