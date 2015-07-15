Imports Microsoft.VisualBasic

Public Class ProductClass

    Public Sub New()

    End Sub

    Public Shared Sub Delete(ByVal ProductID As Integer)
        Dim ProductAdapter As New ProductDataSetTableAdapters.ProductTableAdapter()
        ProductAdapter.Delete(ProductID)
        Dim CategoryAdapter As New ProductDataSetTableAdapters.CategoryProductTableAdapter()
        CategoryAdapter.DeleteByProductID(ProductID)
        Dim SizeAdapter As New ProductDataSetTableAdapters.ProductSizeTableAdapter()
        SizeAdapter.DeleteByProductID(ProductID)
        Dim TagAdapter As New TagDataSetTableAdapters.ProductTagTableAdapter()
        TagAdapter.DeleteByProductID(ProductID)
	End Sub

	Public Shared Function GetImageThumbnail(ByVal ProductID As Integer) As String
		Dim s As String = ConfigurationManager.AppSettings("ProductEmptyThumbnail")
		Dim r As ProductDataSet.ProductImageRow
		Dim t As New ProductDataSet.ProductImageDataTable
		t = (New ProductDataSetTableAdapters.ProductImageTableAdapter).GetDataByProductID(ProductID)
		If t.Rows.Count > 0 Then
			r = t.Rows(0)
			s = System.IO.Path.Combine(ConfigurationManager.AppSettings("ProductThumbnailPath"), r.Url)
		End If
		Return s
	End Function

	Public Shared Function GetShippingFee(ByVal ProductID As Integer, ByVal Country As String, ByVal Quantity As Integer) As Decimal
		Dim ShippingFee As Decimal = 0
		Dim t As New ProductDataSet.ShippingFeeDataTable
		Dim r As ProductDataSet.ShippingFeeRow
		t = (New ProductDataSetTableAdapters.ShippingFeeTableAdapter).GetDataByQty(ProductID, Quantity)
		If t.Rows.Count > 0 Then
			r = t.Rows(0)
			Select Case Country
				Case MemberDetailClass.Region_Local
					ShippingFee = r.Local
				Case MemberDetailClass.Region_Overseas
					ShippingFee = r.OverSeas
				Case MemberDetailClass.Region_OverseasExpress
					ShippingFee = r.OverSeasExpress
			End Select
		End If
		Return ShippingFee
	End Function
End Class
