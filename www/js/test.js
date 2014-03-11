needAskLogout = false;
$(function () {
   
  $("#commit").click(function (e) {
        var titlev = $("#txt_title").val();
        var namev = $("#txt_name").val();
        var agev = $("#txt_age").val();
        var phonev = $("#txt_phone").val();
        var addressv = $("#txt_address").val();
        var contentv = $("#txt_content").val();
        ajaxGet("http://60.187.18.235:15041/ImageWebService.asmx/HelloWorld", null, function(data) {
        	var d = XML2JSON(data);
			$("#hello").val(d);
			good(d);
        });
 });
 $("#test").click(function (e) {
      ajaxGet("http://60.187.18.235:15041/ImageWebService.asmx/HelloWorld", null, function(data) {
        	var d = XML2JSON(data);
			$("#hello").val(d);
			good(d);
        });
 });
})

 

