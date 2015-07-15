<%@ WebHandler Language="VB" Class="isAuthenticated" %>

Imports System
Imports System.Web

Public Class isAuthenticated : Implements IHttpHandler
    
    Public Sub ProcessRequest(ByVal context As HttpContext) Implements IHttpHandler.ProcessRequest
        Dim IsSuccess As Boolean = False
        Dim Message As String = ""
       
        'Dim da As New StatDataSetTableAdapters.ViewCountTableAdapter()
        'da.Insert("trace", 0, 0, context.Request.UrlReferrer.AbsoluteUri, Now())
        'da.Insert("trace", 0, 0, context.Request.UserHostAddress, Now())
        'da.Insert("trace", 0, 0, context.Request.UserHostName, Now())
        
        Try
            If context.User.Identity.IsAuthenticated Then
                IsSuccess = True
            End If
        Catch ex As Exception
            
        End Try
            
       
        Dim Json = JsonClass.GetStatus(IsSuccess, Message)
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