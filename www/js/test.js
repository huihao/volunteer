needAskLogout = false;
$(function () {
	ajaxGet("http://192.168.1.136:15041/ImageWebService.asmx/HelloWorld", null, function(data) {
		    $("#txt_title").val(data);
        	var d = XML2JSON(data);
			$("#txt_title").val(d);
        });
   
  $("#commit").click(function (e) {
        var titlev = $("#txt_title").val();
        var namev = $("#txt_name").val();
        var agev = $("#txt_age").val();
        var phonev = $("#txt_phone").val();
        var addressv = $("#txt_address").val();
        var contentv = $("#txt_content").val();
		ajaxGet("http://192.168.1.136:15041/ImageWebService.asmx/HelloWorld", null, function(data) {
        	var d = XML2JSON(data);
			$("#hello").val(d);
			alert(d);
        });
       
 });
 $("#test").click(function (e) {
      ajaxGet("http://192.168.1.136:15041/ImageWebService.asmx/HelloWorld", null, function(data) {
        	var d = XML2JSON(data);
			$("#hello").val(d);
			good(d);
        });
 });
})

 

