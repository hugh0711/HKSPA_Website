<%@ WebHandler Language="VB" Class="login" %>

Imports System
Imports System.Web

Public Class login : Implements IHttpHandler
    
    Public Sub ProcessRequest(ByVal context As HttpContext) Implements IHttpHandler.ProcessRequest
        Dim Username As String = ""
        Dim Password As String = ""
        Dim LoginSuccess As Boolean = False
        Dim LoginMessage As String = ""
        
        If Not String.IsNullOrWhiteSpace(context.Request("usr")) Then
            Username = context.Request("usr").Trim()
        End If
        If Not String.IsNullOrWhiteSpace(context.Request("pwd")) Then
            Password = context.Request("pwd")
        End If
        
        If String.IsNullOrWhiteSpace(Username) OrElse String.IsNullOrWhiteSpace(Password) Then
            LoginSuccess = False
            LoginMessage = "'Login information incomplete. Must provide username and password'"
            
        ElseIf Membership.ValidateUser(Username, Password) Then
            ' Create session ticket 
            'Dim ticket As New FormsAuthenticationTicket(Username, False, 20)

            '' Encrypt the ticket 
            'Dim encrypted_ticket As String = FormsAuthentication.Encrypt(ticket)

            ''/* Create cookie */
            'Dim cookie = New HttpCookie(FormsAuthentication.FormsCookieName, encrypted_ticket)

            ''/* Add cookie */
            'context.Response.Cookies.Add(cookie)
            
            LoginSuccess = True
            LoginMessage = "'Login Successful'"

        ElseIf context.User.Identity.IsAuthenticated Then
            LoginSuccess = True
            LoginMessage = "Already Logged in"
        Else
            LoginSuccess = False
            LoginMessage = "'Login fail. Username and/or password is incorrect'"
        End If
        
        Dim Json As String = JsonClass.GetStatus(LoginSuccess, LoginMessage)
        Json = JsonClass.Callback(context, Json)
        
        context.Response.AppendHeader("Access-Control-Allow-Origin", "*")
        context.Response.AppendHeader("Access-Control-Allow-Credentials", "true")
        context.Response.ContentType = "application/json"
        context.Response.Write(Json)
    End Sub
 
    Protected Sub SetTicket(Username As String)

    End Sub
    
    Public ReadOnly Property IsReusable() As Boolean Implements IHttpHandler.IsReusable
        Get
            Return False
        End Get
    End Property

End Class