<%@ WebHandler Language="VB" Class="register" %>

Imports System
Imports System.Web
Imports Newtonsoft.Json

Public Class register : Implements IHttpHandler
    
    Public Sub ProcessRequest(ByVal context As HttpContext) Implements IHttpHandler.ProcessRequest
        Dim Member As MemberDetailJsonClass
        Member = JsonConvert.DeserializeObject(Of MemberDetailJsonClass)(context.Request.QueryString("user"))
        Dim Status As Boolean = False
        Dim Message As String = ""
        
        Try
            Status = Member.Create()
        Catch ex As Exception
            Message = ex.Message
        End Try
        
        Dim json = JsonClass.GetStatus(Status, Message)
        json = JsonClass.Callback(context, json)

        context.Response.AppendHeader("Access-Control-Allow-Origin", "*")
        context.Response.AppendHeader("Access-Control-Allow-Credentials", "true")
        context.Response.ContentType = "application/json"
        context.Response.Write(json)
    End Sub
 
    Public ReadOnly Property IsReusable() As Boolean Implements IHttpHandler.IsReusable
        Get
            Return False
        End Get
    End Property

End Class