<%@ WebHandler Language="VB" Class="removeMyCollection" %>

Imports System
Imports System.Web

Public Class removeMyCollection : Implements IHttpHandler
    
    Public Sub ProcessRequest(ByVal context As HttpContext) Implements IHttpHandler.ProcessRequest
        'If context.User.Identity.IsAuthenticated Then
        Dim IsSuccess As Boolean = False
            
        If Not String.IsNullOrWhiteSpace(context.Request("id")) Then
            Dim ProductID As Integer = CInt(context.Request("id"))
                
            Dim dsFavVideo As New UserProductDataSetTableAdapters.UserProductTableAdapter()
            Dim TypeID As Integer = CInt(ConfigurationManager.AppSettings("CollectionTypeID"))
            Dim Username As String = ""
            If Not String.IsNullOrWhiteSpace(context.Request("usr")) Then
                Username = context.Request("usr")
            Else
                Username = context.User.Identity.Name
            End If
            If dsFavVideo.DeleteQuery(Username, ProductID, TypeID) > 0 Then
                IsSuccess = True
            End If
        End If

        Dim Json As String = IsSuccess.ToString().ToLower()
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