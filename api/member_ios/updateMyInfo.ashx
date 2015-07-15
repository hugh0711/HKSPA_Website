<%@ WebHandler Language="VB" Class="updateMyInfo" %>

Imports System
Imports System.Web
Imports Newtonsoft.Json

Public Class updateMyInfo : Implements IHttpHandler
    
    Public Sub ProcessRequest(ByVal context As HttpContext) Implements IHttpHandler.ProcessRequest
        'If context.User.Identity.IsAuthenticated Then
        Dim Member As MemberDetailJsonClass
        Member = JsonConvert.DeserializeObject(Of MemberDetailJsonClass)(context.Request.QueryString("user"))
        Dim Status As Boolean = False
        Dim Message As String = ""
            
        Dim Username As String = ""
        If Not String.IsNullOrWhiteSpace(context.Request("usr")) Then
            Username = context.Request("usr")
        Else
            Username = context.User.Identity.Name
        End If
        
        If Username = Member.UserID OrElse Roles.IsUserInRole(Username, "Admin") Then
            ' Only Admin and User himself can update the info
            Dim IsSuccess As Boolean = Member.Save()
        Else
            Message = "No rights to change password"
        End If
            
        Dim Json = JsonClass.GetStatus(Status, Message)
        Json = JsonClass.Callback(context, Json)
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