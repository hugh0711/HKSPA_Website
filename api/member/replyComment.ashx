<%@ WebHandler Language="VB" Class="replyComment" %>

Imports System
Imports System.Web
Imports Newtonsoft.Json

Public Class replyComment : Implements IHttpHandler
    
    Public Sub ProcessRequest(ByVal context As HttpContext) Implements IHttpHandler.ProcessRequest
        If context.User.Identity.IsAuthenticated Then
            Dim IsSuccess As Boolean = False
            
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
                
                Dim Comment As New CommentJsonClass()
                If Not String.IsNullOrWhiteSpace(context.Request("message")) Then
                    Comment = JsonConvert.DeserializeObject(Of CommentJsonClass)(context.Request.QueryString("message"))
                End If
                
                Dim Username As String = context.User.Identity.Name
                Dim MediaUrl As String = ""
                Dim MediaTitle As String = ""
                Dim MediaDesc As String = ""
                
                If (New CommentDataSetTableAdapters.CommentTableAdapter()).Insert(Type, ReferenceID, Username, Now(), Comment.Comment, False, False, ParentID, MediaUrl, MediaTitle, MediaDesc) > 0 Then
                    IsSuccess = True
                End If
                
            End If
            
            Dim Json As String = IsSuccess.ToString().ToLower()
            Json = JsonClass.Callback(context, Json)

            context.Response.ContentType = "application/json"
            context.Response.Write(Json)

        Else
            context.Response.StatusCode = CType(Net.HttpStatusCode.Forbidden, Integer)
            context.Response.End()
        End If
    End Sub
 
    Public ReadOnly Property IsReusable() As Boolean Implements IHttpHandler.IsReusable
        Get
            Return False
        End Get
    End Property

End Class