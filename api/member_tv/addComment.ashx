<%@ WebHandler Language="VB" Class="addComment" %>

Imports System
Imports System.Web
Imports Newtonsoft.Json

Public Class addComment : Implements IHttpHandler
    
    Public Sub ProcessRequest(ByVal context As HttpContext) Implements IHttpHandler.ProcessRequest
        'Dim da As New StatDataSetTableAdapters.ViewCountTableAdapter()
        'da.Insert("trace", 0, 0, "h1", Now())
                    
        context.Response.AppendHeader("Access-Control-Allow-Origin", "*")
        context.Response.AppendHeader("Access-Control-Allow-Credentials", "true")
        
        'If context.User.Identity.IsAuthenticated Then
        Dim IsSuccess As Boolean = False
        Dim Message As String = ""
        'da.Insert("trace", 0, 0, "hi2", Now())
            
        Dim Username As String = ""
        Dim Password As String = ""
        If Not String.IsNullOrWhiteSpace(context.Request("usr")) And Not String.IsNullOrWhiteSpace(context.Request("pwd")) Then
            Username = context.Request("usr").Trim()
            Password = context.Request("pwd")
            
            If Membership.ValidateUser(Username, Password) Then
                If Not String.IsNullOrWhiteSpace(context.Request("refid")) Then
                    Dim ReferenceID As Integer = CInt(context.Request("refid"))
            
                    Dim ParentID As Integer = 0
                    If Not String.IsNullOrWhiteSpace(context.Request("parentid")) Then
                        ParentID = CInt(context.Request("parentid"))
                    End If
                
                    Dim Type As String = ""
                    If Not String.IsNullOrWhiteSpace(context.Request("type")) Then
                        Type = context.Request("type")
                    End If
                
                    'da.Insert("trace", 0, 0, context.Request("message"), Now())
                
                    Dim Comment As New CommentJsonClass()
                    If Not String.IsNullOrWhiteSpace(context.Request("message")) Then
                        Comment = JsonConvert.DeserializeObject(Of CommentJsonClass)(context.Request.QueryString("message"))
                    End If
                
                    'da.Insert("trace", 0, 0, Comment.Comment, Now())

                    Dim CommentText As String = Utility.ReplaceLf(Comment.Comment)
                    Dim MediaUrl As String = Comment.MediaUrl
                    Dim MediaTitle As String = ""
                    Dim MediaDesc As String = ""
                
                    If (New CommentDataSetTableAdapters.CommentTableAdapter()).Insert(Type, ReferenceID, Username, Now(), CommentText, False, False, ParentID, MediaUrl, MediaTitle, MediaDesc) > 0 Then
                        IsSuccess = True
                    End If
                
                End If
            End If
        End If
            
        Dim Json = JsonClass.GetStatus(IsSuccess, Message)
        Json = JsonClass.Callback(context, Json)
        'da.Insert("trace", 0, 0, Json, Now())

        context.Response.ContentType = "application/json"
        context.Response.Write(Json)

        'Else
        'context.Response.StatusCode = CType(Net.HttpStatusCode.Forbidden, Integer)
        'context.Response.End()
        'End If
    End Sub
 
    Public ReadOnly Property IsReusable() As Boolean Implements IHttpHandler.IsReusable
        Get
            Return False
        End Get
    End Property

End Class