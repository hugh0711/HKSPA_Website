<%@ WebHandler Language="VB" Class="changePassword" %>

Imports System
Imports System.Web
Imports Newtonsoft.Json

Public Class changePassword : Implements IHttpHandler
    
    Public Sub ProcessRequest(ByVal context As HttpContext) Implements IHttpHandler.ProcessRequest
        If context.User.Identity.IsAuthenticated Then
            Dim UserID As String = ""
            Dim OldPassword As String = ""
            Dim NewPassword As String = ""
            Dim Status As Boolean = False
            Dim Message As String = ""
            
            If Not String.IsNullOrWhiteSpace(context.Request("uid")) Then UserID = context.Request("uid")
            If Not String.IsNullOrWhiteSpace(context.Request("pwd0")) Then OldPassword = context.Request("pwd0")
            If Not String.IsNullOrWhiteSpace(context.Request("pwd1")) Then NewPassword = context.Request("pwd1")
            
            Dim Username As String = ""
            If Not String.IsNullOrWhiteSpace(context.Request("usr")) Then
                Username = context.Request("usr")
            Else
                Username = context.User.Identity.Name
            End If
        
            If Username = UserID OrElse Roles.IsUserInRole(Username, "Admin") Then
                ' Only Admin and User himself can update the info
                Try
                    Status = MemberDetailJsonClass.ChangePassword(UserID, OldPassword, NewPassword)
                Catch ex As Exception
                    Message = ex.Message
                End Try
            Else
                Message = "No rights to change password"
            End If
        
            Dim json = JsonClass.GetStatus(Status, Message)
            json = JsonClass.Callback(context, json)
            context.Response.AppendHeader("Access-Control-Allow-Origin", "*")
            context.Response.AppendHeader("Access-Control-Allow-Credentials", "true")
            context.Response.ContentType = "application/json"
            context.Response.Write(json)
        Else
            context.Response.AppendHeader("Access-Control-Allow-Origin", "*")
            context.Response.AppendHeader("Access-Control-Allow-Credentials", "true")
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