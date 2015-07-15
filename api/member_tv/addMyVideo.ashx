<%@ WebHandler Language="VB" Class="addMyVideo" %>

Imports System
Imports System.Web

Public Class addMyVideo : Implements IHttpHandler
    
    Public Sub ProcessRequest(ByVal context As HttpContext) Implements IHttpHandler.ProcessRequest
        context.Response.AppendHeader("Access-Control-Allow-Origin", "*")
        context.Response.AppendHeader("Access-Control-Allow-Credentials", "true")
        'If context.User.Identity.IsAuthenticated Then
        Dim IsSuccess As Boolean = False
            
        Dim Username As String = ""
        Dim Password As String = ""

        
        
        If Not String.IsNullOrWhiteSpace(context.Request("usr")) And Not String.IsNullOrWhiteSpace(context.Request("pwd")) Then
            Username = context.Request("usr").Trim()
            Password = context.Request("pwd")
            
            If Membership.ValidateUser(Username, Password) Then
                If Not String.IsNullOrWhiteSpace(context.Request("id")) Then
                    Dim ProductID As Integer = CInt(context.Request("id"))
            
                    Dim dsFavVideo As New UserProductDataSetTableAdapters.UserProductTableAdapter()
                    Dim TypeID As Integer = CInt(ConfigurationManager.AppSettings("FavVideoTypeID"))

                    Dim SortOrder As Integer = 0
                    Dim GroupID As Integer = 0
                    dsFavVideo.DeleteQuery(Username, ProductID, TypeID)
                    If dsFavVideo.Insert(Username, TypeID, GroupID, ProductID, SortOrder, Date.Now(), Username) > 0 Then
                        IsSuccess = True
                    End If
                End If

        
            
                Dim Json As String = IsSuccess.ToString().ToLower()
                Json = JsonClass.Callback(context, Json)

                context.Response.ContentType = "application/json"
                context.Response.Write(Json)

                'Else
                '    context.Response.StatusCode = CType(Net.HttpStatusCode.Forbidden, Integer)
                '    context.Response.End()
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