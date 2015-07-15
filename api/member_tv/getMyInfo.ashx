<%@ WebHandler Language="VB" Class="getMyInfo" %>

Imports System
Imports System.Web
Imports Newtonsoft.Json

Public Class getMyInfo : Implements IHttpHandler
    
    Public Sub ProcessRequest(ByVal context As HttpContext) Implements IHttpHandler.ProcessRequest
        context.Response.AppendHeader("Access-Control-Allow-Origin", "*")
        context.Response.AppendHeader("Access-Control-Allow-Credentials", "true")
        'If context.User.Identity.IsAuthenticated Then
        Dim Member As New MemberDetailJsonClass()
        Dim UserID As String = ""
        Dim Username As String = ""
        Dim Password As String = ""
        
        If Not String.IsNullOrWhiteSpace(context.Request("usr")) And Not String.IsNullOrWhiteSpace(context.Request("pwd")) Then
            Username = context.Request("usr").Trim()
            Password = context.Request("pwd")
            
            If Membership.ValidateUser(Username, Password) Then
        
                If Not String.IsNullOrWhiteSpace(context.Request("uid")) Then
                    UserID = context.Request("uid")
                End If
                If Username = UserID OrElse Roles.IsUserInRole(Username, "Admin") Then
                    ' Only Admin and User himself can update the info
                    Member.Load(UserID)
                End If
  
                Dim Json As String = JsonConvert.SerializeObject(Member, Formatting.Indented)
                Json = JsonClass.Callback(context, Json)


                context.Response.ContentType = "application/json"
                context.Response.Write(Json)

        
                'Else
                'context.Response.StatusCode = CType(Net.HttpStatusCode.Forbidden, Integer)
                'context.Response.End()
                'End If
            End If
        End If
    End Sub
 
    Public ReadOnly Property IsReusable() As Boolean Implements IHttpHandler.IsReusable
        Get
            Return False
        End Get
    End Property

End Class