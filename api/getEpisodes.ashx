<%@ WebHandler Language="VB" Class="getEpisodes" %>

Imports System
Imports System.Web
Imports Newtonsoft.Json

Public Class getEpisodes : Implements IHttpHandler
    
    Public Sub ProcessRequest(ByVal context As HttpContext) Implements IHttpHandler.ProcessRequest
        Dim CategoryID As Integer = 0
        Dim HQ As Boolean = False
        If context.Request("pid") IsNot Nothing AndAlso context.Request("pid") <> "" Then
            CategoryID = CInt(context.Request("pid"))
        End If
        If Not String.IsNullOrWhiteSpace(context.Request("hq")) Then
            If context.Request("hq").ToLower() = "true" Then
                HQ = True
            End If
        End If
        
        Dim FunctionID As Integer = CInt(ConfigurationManager.AppSettings("VideoFunctionID"))
        Dim NewsList As New ProductListClass()
        NewsList.LoadByCategory(FunctionID, CategoryID, HQ)
        
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