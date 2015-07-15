<%@ WebHandler Language="VB" Class="getAllChannelStructure" %>

Imports System
Imports System.Web
Imports Newtonsoft.Json

Public Class getAllChannelStructure : Implements IHttpHandler
    
    Public Sub ProcessRequest(ByVal context As HttpContext) Implements IHttpHandler.ProcessRequest
        Dim FunctionID As Integer = CInt(ConfigurationManager.AppSettings("VideoFunctionID"))
        Dim domain As String = context.Request.Url.GetLeftPart(UriPartial.Authority)
        Dim Lang As String = ConfigurationManager.AppSettings("UIDefaultLanguage")
        
        Dim CategoryAdapter As New CategoryDataSetTableAdapters.view_CategoryTableAdapter()
        Dim dtChannel, dtProgram As CategoryDataSet.view_CategoryDataTable
        Dim drChannel, drProgram As CategoryDataSet.view_CategoryRow
        
        Dim ProductAdapter As New ProductDataSetTableAdapters.view_ProductImageTableAdapter()
        Dim dtEpisode As ProductDataSet.view_ProductImageDataTable
        Dim drEpisode As ProductDataSet.view_ProductImageRow
        
        Dim HtmlChannel As String = ""
        Dim HtmlProgram, HtmlEpisode As String
        Dim fsChannel As String = "<li><img src='{1}' /><h3>{2}</h3><p class='redfont'>{3}</p>{4}</li>"
        Dim fsProgram As String = "<li><img src='{1}' /><h3>{2}</h3><p class='redfont'>{3}</p>{4}</li>"
        Dim fsEpisode As String = "<li><a href='video.html?id={0}'><img src='{1}' /><h3>{2}</h3><p>{3}</p><p class='redfont'>Watch</p></li>"
        Dim Description, ImageUrl As String
        
        dtChannel = CategoryAdapter.GetDataByFunctionIDParentID(FunctionID, 0, Lang)
        For Each drChannel In dtChannel.Rows
            dtProgram = CategoryAdapter.GetDataByFunctionIDParentID(FunctionID, drChannel.CategoryID, Lang)
            HtmlProgram = ""
            For Each drProgram In dtProgram.Rows
                dtEpisode = ProductAdapter.GetDataByFunctionIDCategoryID(FunctionID, drProgram.CategoryID, Lang)
                HtmlEpisode = ""
                For Each drEpisode In dtEpisode.Rows
                    With drEpisode
                        If .IsUrlNull Then
                            ImageUrl = ""
                        Else
                            ImageUrl = GetProductUrl(.Url, domain)
                        End If
                        HtmlEpisode &= String.Format(fsEpisode, .ProductID, ImageUrl, .ProductName, .Description)
                    End With
                Next
                If HtmlEpisode <> "" Then
                    HtmlEpisode = String.Format("<ul>{0}</ul>", HtmlEpisode)
                End If
                    
                With drProgram
                    If .IsUrlNull Then
                        ImageUrl = ""
                    Else
                        ImageUrl = GetCategoryUrl(.Url, domain)
                    End If
                    HtmlProgram &= String.Format(fsProgram, .CategoryID, ImageUrl, .CategoryName, .Description, HtmlEpisode)
                End With
            Next
            If HtmlProgram <> "" Then
                HtmlProgram = String.Format("<ul>{0}</ul>", HtmlProgram)
            End If
            
            With drChannel
                If .IsUrlNull Then
                    ImageUrl = ""
                Else
                    ImageUrl = GetCategoryUrl(.Url, domain)
                End If
                If .IsDescriptionNull Then
                    Description = ""
                Else
                    Description = .Description
                End If
                HtmlChannel &= String.Format(fsChannel, .CategoryID, ImageUrl, .CategoryName, Description, HtmlProgram)
            End With
        Next
        
        Dim HtmlJson As New HtmlJsonClass(HtmlChannel)
        Dim Html = JsonConvert.SerializeObject(HtmlJson, Formatting.Indented)
                
        If context.Request("callback") IsNot Nothing AndAlso context.Request("callback") <> "" Then
            Html = String.Format("{0}({1})", context.Request("callback"), Html)
        End If
              
        context.Response.AppendHeader("Access-Control-Allow-Origin", "*")
        context.Response.AppendHeader("Access-Control-Allow-Credentials", "true")
        context.Response.ContentType = "application/json"
        context.Response.Write(Html)
    End Sub
 
    Public ReadOnly Property IsReusable() As Boolean Implements IHttpHandler.IsReusable
        Get
            Return False
        End Get
    End Property

    Private Function GetCategoryUrl(ByVal Url As String, ByVal domain As String) As String
        Url = IO.Path.Combine(ConfigurationManager.AppSettings("CategoryPhoneThumbnailPath"), Url)
        Url = Url.Replace("~", domain)
        Return Url
    End Function

    Private Function GetProductUrl(ByVal Url As String, ByVal domain As String) As String
        Url = IO.Path.Combine(ConfigurationManager.AppSettings("ProductPhoneThumbnailPath"), Url)
        Url = Url.Replace("~", domain)
        Return Url
    End Function
End Class