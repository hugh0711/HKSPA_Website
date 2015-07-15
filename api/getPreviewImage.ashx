<%@ WebHandler Language="VB" Class="getPreviewImage" %>

Imports System
Imports System.Web
Imports System.Drawing.Imaging

Public Class getPreviewImage : Implements IHttpHandler
    
    Public Sub ProcessRequest(ByVal context As HttpContext) Implements IHttpHandler.ProcessRequest
        Dim Width As Integer = 0
        Dim Height As Integer = 0
        If context.Request("w") IsNot Nothing AndAlso context.Request("w") <> "" Then
            Width = CInt(context.Request("w"))
        End If
        If context.Request("h") IsNot Nothing AndAlso context.Request("h") <> "" Then
            Width = CInt(context.Request("h"))
        End If
        
        
        context.Response.AppendHeader("Access-Control-Allow-Origin", "*")
        context.Response.AppendHeader("Access-Control-Allow-Credentials", "true")
        context.Response.ContentType = "text/plain"
        context.Response.Write("Hello World")
    End Sub
 
    Public ReadOnly Property IsReusable() As Boolean Implements IHttpHandler.IsReusable
        Get
            Return False
        End Get
    End Property

End Class