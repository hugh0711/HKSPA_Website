<%@ WebHandler Language="VB" Class="getComments" %>

Imports System
Imports System.Web
Imports Newtonsoft.Json

Public Class getComments : Implements IHttpHandler
    
    Public Sub ProcessRequest(ByVal context As HttpContext) Implements IHttpHandler.ProcessRequest
        Dim ReferenceID As Integer = 0
        If Not String.IsNullOrWhiteSpace(context.Request("refid")) Then
            ReferenceID = CInt(context.Request("refid"))
        End If
        
        Dim CommentType As String = ""
        If Not String.IsNullOrWhiteSpace(context.Request("type")) Then
            CommentType = context.Request("type")
        End If
        
        Dim CharCount As Integer = Integer.MaxValue
        If Not String.IsNullOrWhiteSpace(context.Request("length")) Then
            CharCount = CInt(context.Request("length"))
        End If
        
        Dim ParentID As Integer = 0
        If Not String.IsNullOrWhiteSpace(context.Request("parentid")) Then
            ParentID = CInt(context.Request("parentid"))
        End If
        
        Dim LoadReply As Boolean = False
        If Not String.IsNullOrWhiteSpace(context.Request("reply")) Then
            If context.Request("reply").Trim.ToLower() = "true" Then
                LoadReply = True
            End If
        End If

        
        Dim List As New CommentListClass(ReferenceID, CommentType, ParentID, LoadReply, CharCount)

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