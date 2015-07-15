<%@ WebHandler Language="VB" Class="logout" %>

Imports System
Imports System.Web

Public Class logout : Implements IHttpHandler
    
    Public Sub ProcessRequest(ByVal context As HttpContext) Implements IHttpHandler.ProcessRequest
        Dim IsSuccess As Boolean = False
        Dim Message As String = ""
        
        Try
            'If context.User.Identity.IsAuthenticated Then
            'context.Response.Cookies.Remove(FormsAuthentication.FormsCookieName)
            'FormsAuthentication.SignOut()
            IsSuccess = True
            'End If
        Catch ex As Exception
            Message = ex.Message
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