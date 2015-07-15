<%@ WebHandler Language="VB" Class="search" %>

Imports System
Imports System.Web
Imports Newtonsoft.Json

Public Class search : Implements IHttpHandler
    
    Public Sub ProcessRequest(ByVal context As HttpContext) Implements IHttpHandler.ProcessRequest
        Dim q As String = ""
        Dim tag As String = ""
        Dim HQ As Boolean = False
        If Not String.IsNullOrWhiteSpace(context.Request("q")) Then
            q = context.Request("q")
        End If
        If Not String.IsNullOrWhiteSpace(context.Request("tag")) Then
            tag = context.Request("tag")
        End If
        If Not String.IsNullOrWhiteSpace(context.Request("hq")) Then
            If context.Request("hq").ToLower() = "true" Then
                HQ = True
            End If
        End If
        
        Dim FunctionID As Integer = CInt(ConfigurationManager.AppSettings("VideoFunctionID"))
        Dim VideoList As New ProductListClass()
        If q <> "" Then
            VideoList.SearchByKeyword(FunctionID, q, 30, HQ)
        ElseIf tag <> "" Then
            VideoList.SearchByTag(FunctionID, tag, 30, HQ)
        End If
        
        Dim domain As String = context.Request.Url.GetLeftPart(UriPartial.Authority) & HttpContext.Current.Request.ApplicationPath
        For Each p As ProductJsonClass In VideoList
            p.ImageUrl = p.ImageUrl.Replace("~", domain)
        Next
       

        Dim Json As String = JsonConvert.SerializeObject(VideoList, Formatting.Indented)
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