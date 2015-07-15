<%@ WebHandler Language="VB" Class="getGroups" %>

Imports System
Imports System.Web
Imports Newtonsoft.Json

Public Class getGroups : Implements IHttpHandler
    
    Public Sub ProcessRequest(ByVal context As HttpContext) Implements IHttpHandler.ProcessRequest
        Dim TypeID As Integer = CInt(ConfigurationManager.AppSettings("FavVideoTypeID"))
        If Not String.IsNullOrWhiteSpace(context.Request("type")) Then
            Select Case context.Request("type").ToLower()
                Case "video"
                    TypeID = CInt(ConfigurationManager.AppSettings("FavVideoTypeID"))
                Case "collection"
                    TypeID = CInt(ConfigurationManager.AppSettings("CollectionTypeID"))                    
            End Select
            
        End If
        
        Dim List As New GroupListClass(TypeID)
        
        Dim Json As String = JsonConvert.SerializeObject(List, Formatting.Indented)
        Json = JsonClass.Callback(context, Json)

        context.Response.ContentType = "application/json"
        context.Response.Write(Json)

    End Sub
 
    Public ReadOnly Property IsReusable() As Boolean Implements IHttpHandler.IsReusable
        Get
            Return False
        End Get
    End Property

End Class