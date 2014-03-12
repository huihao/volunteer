needAskLogout = false;
$(function () {
	ajaxGet(volService + "HelloWorld", null, function(data) {
		    var d= $(data).find("string").text()
		    $("#txt_title").val(d);
        });
  $("#commit").click(function (e) {
        var titlev = $("#txt_title").val();
        var namev = $("#txt_name").val();
        var agev = $("#txt_age").val();
        var phonev = $("#txt_phone").val();
        var addressv = $("#txt_address").val();
        var contentv = $("#txt_content").val();
		ajaxGet(volService + "HelloWorld", null, function(data) {
			 var d= $(data).find("string").text()
			alert(d);
        });
       
 });
 $("#test").click(function (e) {
      $.ajax({
                    type: "POST",   //访问WebService使用Post方式请求
                    contentType: "application/json", //WebService 会返回Json类型
                    url: "http:192.168.1.136:15041/ImageWebService.asmx/HelloWorld", //调用WebService的地址和方法名称组合 ---- WsURL/方法名
                    data: "{}",         //这里是要传递的参数，格式为 data: "{paraName:paraValue}",下面将会看到       
                    dataType: 'json',
                    success: function(result) {     //回调函数，result，返回值
                       $("#txt_title").val(result.d);
                    }
                });    
 });
})

 

