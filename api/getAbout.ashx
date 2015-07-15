<%@ WebHandler Language="VB" Class="getAbout" %>

Imports System
Imports System.Web
Imports Newtonsoft.Json

Public Class getAbout : Implements IHttpHandler
    
    Public Sub ProcessRequest(ByVal context As HttpContext) Implements IHttpHandler.ProcessRequest
        Dim PageID As Integer = CInt(ConfigurationManager.AppSettings("AboutPageID"))

        Dim Page As New PageJsonClass(PageID)
        
        Dim Json As String = JsonConvert.SerializeObject(Page, Formatting.Indented)
        Json = JsonClass.Callback(context, Json)

        context.Response.AppendHeader("Access-Control-Allow-Origin", "*")
        context.Response.AppendHeader("Access-Control-Allow-Credentials", "true")
        context.Response.ContentType = "application/json"
        context.Response.Write(Json)
    End Sub
 
    Public ReadOnly Property IsReusable() As Boolean Implements IHttpHandler.IsReusable
        Get
            Return False
        End Get
    End Property

End Class