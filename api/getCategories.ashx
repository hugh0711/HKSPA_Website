<%@ WebHandler Language="VB" Class="getCategories" %>

Imports System
Imports System.Web
Imports Newtonsoft.Json

Public Class getCategories : Implements IHttpHandler
    
    Public Sub ProcessRequest(ByVal context As HttpContext) Implements IHttpHandler.ProcessRequest
        Dim AgentID As String = ""
        Dim FunctionID As Integer = 0
        Dim ParentCategoryID As Integer = 0
        Dim List As New CategoryListClass()
        
        context.Response.AppendHeader("Access-Control-Allow-Origin", "*")
        context.Response.AppendHeader("Access-Control-Allow-Credentials", "true")

        If Not String.IsNullOrWhiteSpace(context.Request("fn")) Then
            FunctionID = CInt(context.Request("fn"))
            
            If Not String.IsNullOrWhiteSpace(context.Request("agent")) Then
                AgentID = context.Request("agent")
            End If
            If Not String.IsNullOrWhiteSpace(context.Request("parentid")) Then
                ParentCategoryID = CInt(context.Request("parentid"))
            End If
            
            List.Load(FunctionID, ParentCategoryID)
            
            Dim domain As String = context.Request.Url.GetLeftPart(UriPartial.Authority) & HttpContext.Current.Request.ApplicationPath
            For Each p As CategoryJsonClass In List
                p.ImageUrl = p.ImageUrl.Replace("~", domain)
            Next

            Dim Json As String = JsonConvert.SerializeObject(List, Formatting.Indented)
            Json = JsonClass.Callback(context, Json)
                
            context.Response.ContentType = "application/json"
            context.Response.Write(Json)
        Else
            
            context.Response.StatusCode = 500
        End If
        
    End Sub
 
    Public ReadOnly Property IsReusable() As Boolean Implements IHttpHandler.IsReusable
        Get
            Return False
        End Get
    End Property

End Class