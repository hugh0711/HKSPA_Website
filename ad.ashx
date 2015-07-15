<%@ WebHandler Language="VB" Class="ad" %>

Imports System
Imports System.Web

Public Class ad : Implements IHttpHandler
    
    Public Sub ProcessRequest(ByVal context As HttpContext) Implements IHttpHandler.ProcessRequest
        Dim Url As String = ""
        If Not String.IsNullOrWhiteSpace(context.Request.QueryString("url")) Then
            context.Response.Redirect(context.Request.QueryString("url"))
        Else
            context.Response.Redirect("~/")
        End If
    End Sub
 
    Public ReadOnly Property IsReusable() As Boolean Implements IHttpHandler.IsReusable
        Get
            Return False
        End Get
    End Property

End Class