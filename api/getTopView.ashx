<%@ WebHandler Language="VB" Class="getTopView" %>

Imports System
Imports System.Web
Imports Newtonsoft.Json

Public Class getTopView : Implements IHttpHandler
    
    Public Sub ProcessRequest(ByVal context As HttpContext) Implements IHttpHandler.ProcessRequest
        Dim MaxCount As Integer = 5
        Dim HQ As Boolean = False
        If context.Request("count") IsNot Nothing AndAlso context.Request("count") <> "" Then
            MaxCount = CInt(context.Request("count"))
        End If
        If Not String.IsNullOrWhiteSpace(context.Request("hq")) Then
            If context.Request("hq").ToLower() = "true" Then
                HQ = True
            End If
        End If
        
        Dim FunctionID As Integer = CInt(ConfigurationManager.AppSettings("VideoFunctionID"))
        Dim NewsList As New ProductListClass()
        NewsList.LoadTopView(FunctionID, MaxCount, HQ)
        
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