needAskLogout = false;
$(function () {
	ajaxGet(volService + "Join", null, function(data) {
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
		ajaxGet(volService + "Join", null, function(data) {
        	var d = XML2JSON(data);
			$("#hello").val(d);
			alert(d);
        });
       
 });
 $("#test").click(function (e) {
      ajaxGet(volService + "Join", null, function(data) {
        	var d = XML2JSON(data);
			$("#hello").val(d);
			good(d);
        });
 });
})

 

