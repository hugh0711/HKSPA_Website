<%@ WebHandler Language="VB" Class="getComment" %>

Imports System
Imports System.Web
Imports Newtonsoft.Json

Public Class getComment : Implements IHttpHandler
    
    Public Sub ProcessRequest(ByVal context As HttpContext) Implements IHttpHandler.ProcessRequest
        Dim ID As Integer = 0
        If Not String.IsNullOrWhiteSpace(context.Request("id")) Then
            ID = CInt(context.Request("id"))
        End If
        
        Dim CharCount As Integer = Integer.MaxValue
        If Not String.IsNullOrWhiteSpace(context.Request("length")) Then
            CharCount = CInt(context.Request("length"))
        End If
        
        Dim LoadReply As Boolean = False
        If Not String.IsNullOrWhiteSpace(context.Request("reply")) Then
            If context.Request("reply").Trim.ToLower() = "true" Then
                LoadReply = True
            End If
        End If
        
        Dim Comment As New CommentJsonClass(ID)
        If LoadReply Then
            Comment.LoadReply()
        Else
            Comment.LoadReplyCount()
        End If
        
        Dim Json As String = JsonConvert.SerializeObject(Comment, Formatting.Indented)
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