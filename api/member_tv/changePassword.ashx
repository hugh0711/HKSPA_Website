<%@ WebHandler Language="VB" Class="changePassword" %>

Imports System
Imports System.Web
Imports Newtonsoft.Json

Public Class changePassword : Implements IHttpHandler
    
    Public Sub ProcessRequest(ByVal context As HttpContext) Implements IHttpHandler.ProcessRequest
        context.Response.AppendHeader("Access-Control-Allow-Origin", "*")
        context.Response.AppendHeader("Access-Control-Allow-Credentials", "true")
        'If context.User.Identity.IsAuthenticated Then
        Dim UserID As String = ""
        Dim OldPassword As String = ""
        Dim NewPassword As String = ""
        Dim Status As Boolean = False
        Dim Message As String = ""
            
        Dim Username As String = ""
        Dim Password As String = ""
        If Not String.IsNullOrWhiteSpace(context.Request("usr")) And Not String.IsNullOrWhiteSpace(context.Request("pwd")) Then
            Username = context.Request("usr").Trim()
            Password = context.Request("pwd")
            
            If Membership.ValidateUser(Username, Password) Then
                If Not String.IsNullOrWhiteSpace(context.Request("uid")) Then UserID = context.Request("uid")
                If Not String.IsNullOrWhiteSpace(context.Request("pwd0")) Then OldPassword = context.Request("pwd0")
                If Not String.IsNullOrWhiteSpace(context.Request("pwd1")) Then NewPassword = context.Request("pwd1")
            
        
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
            End If
        End If
        
        
        Dim json = JsonClass.GetStatus(Status, Message)
        json = JsonClass.Callback(context, json)

        context.Response.ContentType = "application/json"
        context.Response.Write(json)
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