<%@ WebHandler Language="VB" Class="getChannel" %>

Imports System
Imports System.Web
Imports Newtonsoft.Json

Public Class getChannel : Implements IHttpHandler
    
    Public Sub ProcessRequest(ByVal context As HttpContext) Implements IHttpHandler.ProcessRequest
        Dim FunctionID As Integer = CInt(ConfigurationManager.AppSettings("VideoFunctionID"))
        Dim HQ As Boolean = False
        Dim Show3D As Boolean = True
        
        If Not String.IsNullOrWhiteSpace(context.Request("hq")) Then
            If context.Request("hq").ToLower() = "true" Then
                HQ = True
            End If
        End If
        
        If Not String.IsNullOrWhiteSpace(context.Request("3d")) Then
            If context.Request("3d").ToLower() = "false" Then
                Show3D = False
            End If
        End If
        
        Dim List As New CategoryListClass()
        List.Load(FunctionID, 0, HQ:=HQ, Has3D:=Show3D)
        
        Dim domain As String = context.Request.Url.GetLeftPart(UriPartial.Authority)
        If HttpContext.Current.Request.ApplicationPath <> "/" Then
            domain &= HttpContext.Current.Request.ApplicationPath
        End If
        For Each p As CategoryJsonClass In List
            p.ImageUrl = p.ImageUrl.Replace("~", domain)
        Next

        Dim Json As String = JsonConvert.SerializeObject(List, Formatting.Indented)
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