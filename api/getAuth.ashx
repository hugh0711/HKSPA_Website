<%@ WebHandler Language="VB" Class="getAuth" %>

Imports System
Imports System.Web

Public Class getAuth : Implements IHttpHandler
    
    Public Sub ProcessRequest(ByVal context As HttpContext) Implements IHttpHandler.ProcessRequest
        Dim Username As String = ""
        Dim Password As String = ""
        Dim LoginSuccess As Boolean = False
        Dim LoginMessage As String = ""
        
        If Not String.IsNullOrWhiteSpace(context.Request.QueryString("user")) Then
            Username = context.Request.QueryString("user")
        End If
        If Not String.IsNullOrWhiteSpace(context.Request.QueryString("pwd")) Then
            Password = context.Request.QueryString("pwd")
        End If
        
        If String.IsNullOrWhiteSpace(Username) OrElse String.IsNullOrWhiteSpace(Password) Then
            LoginSuccess = False
            LoginMessage = "'Login information imcomplete. Must provide username and password'"
        ElseIf FormsAuthentication.Authenticate(Username, Password) Then
            LoginSuccess = True
            LoginMessage = "'Login Successful'"
        ElseIf context.User.Identity.IsAuthenticated Then
            LoginSuccess = True
            LoginMessage = "Already Logged in"
        Else
            LoginSuccess = False
            LoginMessage = "'Login fail. Username and/or password is incorrect'"
        End If
        
        Dim param As New List(Of String)
        param.Add(String.Format("'login':{0}", LoginSuccess.ToString().ToLower()))
        param.Add(String.Format("'message':{0}", LoginMessage))
        Dim Json As String = "{" & Join(param.ToArray(), ",") & "}"
        
        context.Response.ContentType = "application/json"
        context.Response.Write(Json)
    End Sub
 
    Public ReadOnly Property IsReusable() As Boolean Implements IHttpHandler.IsReusable
        Get
            Return False
        End Get
    End Property

End Class