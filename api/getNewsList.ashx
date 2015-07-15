<%@ WebHandler Language="VB" Class="getNewsList" %>

Imports System
Imports System.Web
Imports System.IO
Imports System.Runtime.Serialization.Json
Imports Newtonsoft.Json

Public Class getNewsList : Implements IHttpHandler
    
    Public Sub ProcessRequest(ByVal context As HttpContext) Implements IHttpHandler.ProcessRequest
        Dim MaxCount As Integer = Integer.MaxValue
        If context.Request("count") IsNot Nothing AndAlso context.Request("count") <> "" Then
            MaxCount = CInt(context.Request("count"))
        End If
        
        Dim FunctionID As Integer = CInt(ConfigurationManager.AppSettings("NewsFunctionID"))
        Dim NewsList As New ProductListClass()
        NewsList.LoadLatestFirst(FunctionID, MaxCount, True)
        
        Dim domain As String = context.Request.Url.GetLeftPart(UriPartial.Authority)
        If HttpContext.Current.Request.ApplicationPath <> "/" Then
            domain &= HttpContext.Current.Request.ApplicationPath
        End If
        For Each p As ProductJsonClass In NewsList
            p.ImageUrl = p.ImageUrl.Replace("~", domain)
        Next
        
        Dim Json As String = JsonConvert.SerializeObject(NewsList, Formatting.Indented)
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