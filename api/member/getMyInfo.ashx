<%@ WebHandler Language="VB" Class="getMyInfo" %>

Imports System
Imports System.Web
Imports Newtonsoft.Json

Public Class getMyInfo : Implements IHttpHandler
    
    Public Sub ProcessRequest(ByVal context As HttpContext) Implements IHttpHandler.ProcessRequest
        If context.User.Identity.IsAuthenticated Then
            Dim Member As New MemberDetailJsonClass()
            Dim UserID As String = ""
            Dim Username As String = ""
            If Not String.IsNullOrWhiteSpace(context.Request("usr")) Then
                Username = context.Request("usr")
            Else
                Username = context.User.Identity.Name
            End If
        
            If Not String.IsNullOrWhiteSpace(context.Request("uid")) Then
                UserID = context.Request("uid")
            End If
            If Username = UserID OrElse Roles.IsUserInRole(Username, "Admin") Then
                ' Only Admin and User himself can update the info
                Member.Load(UserID)
            End If
  
            Dim Json As String = JsonConvert.SerializeObject(Member, Formatting.Indented)
            Json = JsonClass.Callback(context, Json)

            context.Response.AppendHeader("Access-Control-Allow-Origin", "*")
            context.Response.AppendHeader("Access-Control-Allow-Credentials", "true")
            context.Response.ContentType = "application/json"
            context.Response.Write(Json)
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