needAskLogout = false;
$(function () {
	ajaxGet(volService + "HelloWorld", null, function(data) {
		    $("#txt_title").val(data);
        	var d = XML2JSON(data);
			$("#txt_title").val(d);
        });
	 $.ajax({
                    type: "POST",   //����WebServiceʹ��Post��ʽ����
                    contentType: "application/json", //WebService �᷵��Json����
                    url: "http:192.168.1.136:15041/ImageWebService.asmx/HelloWorld", //����WebService�ĵ�ַ�ͷ���������� ---- WsURL/������
                    data: "{}",         //������Ҫ���ݵĲ�������ʽΪ data: "{paraName:paraValue}",���潫�ῴ��       
                    dataType: 'json',
                    success: function(result) {     //�ص�������result������ֵ
                       $("#txt_title").val(result.d);
                    }
                });    

   
  $("#commit").click(function (e) {
        var titlev = $("#txt_title").val();
        var namev = $("#txt_name").val();
        var agev = $("#txt_age").val();
        var phonev = $("#txt_phone").val();
        var addressv = $("#txt_address").val();
        var contentv = $("#txt_content").val();
		ajaxGet(volService + "HelloWorld", null, function(data) {
			$("#hello").val(data);
			alert(d);
        });
       
 });
 $("#test").click(function (e) {
      $.ajax({
                    type: "POST",   //����WebServiceʹ��Post��ʽ����
                    contentType: "application/json", //WebService �᷵��Json����
                    url: "http:192.168.1.136:15041/ImageWebService.asmx/HelloWorld", //����WebService�ĵ�ַ�ͷ���������� ---- WsURL/������
                    data: "{}",         //������Ҫ���ݵĲ�������ʽΪ data: "{paraName:paraValue}",���潫�ῴ��       
                    dataType: 'json',
                    success: function(result) {     //�ص�������result������ֵ
                       $("#txt_title").val(result.d);
                    }
                });    
 });
})

 

