<%@ WebHandler Language="VB" Class="previewImage" %>

Imports System
Imports System.Web
Imports System.Drawing
Imports System.Net
Imports System.IO

Public Class previewImage : Implements IHttpHandler
    
    Public Sub ProcessRequest(ByVal context As HttpContext) Implements IHttpHandler.ProcessRequest

        Dim VideoID As String = ""
        Dim HQ As Boolean = False
        
        If Not String.IsNullOrWhiteSpace(context.Request("video")) Then
            VideoID = context.Request("video")
        End If
        If Not String.IsNullOrWhiteSpace(context.Request("hq")) Then
            If context.Request("hq").ToLower = "true" Then
                HQ = True
            End If
        End If
        
        If VideoID <> "" Then
            Dim YouTubeUrl As String = VideoClass.GetYouTubePreview(VideoID, HQ)
            
            ' Read Image Stream from url
            Dim WebReq As HttpWebRequest = CType(HttpWebRequest.Create(YouTubeUrl), HttpWebRequest)
            Dim WebResp As HttpWebResponse = CType(WebReq.GetResponse(), HttpWebResponse)
            
            Dim BytesToRead As Integer = 10000
            Dim Buffer(BytesToRead) As Byte

            Dim Stream As Stream
            
            
            context.Response.ContentType = "image/jpeg"

            Stream = WebResp.GetResponseStream()
            
            Dim Length
            Do
                Length = Stream.Read(Buffer, 0, BytesToRead)
                
                context.Response.OutputStream.Write(Buffer, 0, Length)
                context.Response.Flush()
            Loop While Length > 0
                
            
        Else
            
        End If
        
    End Sub
 
    Public ReadOnly Property IsReusable() As Boolean Implements IHttpHandler.IsReusable
        Get
            Return False
        End Get
    End Property

End Class