needAskLogout = false;
$(function () {
    $("#commit").click(function (e) {
        var titlev = $("#txt_title").val();
        var namev = $("#txt_name").val();
        var agev = $("#txt_age").val();
        var phonev = $("#txt_phone").val();
        var addressv = $("#txt_address").val();
        var contentv = $("#txt_content").val();
        ajaxGet("http://60.187.8.75:15041/ImageWebService.asmx/HelloWorld", null, function(data) {
        	good(data);
        });
 });

 $("nav ul").click(function(e) {
     var tag = e.target;
     if (tag.nodeName.toUpperCase() !== "LI") {
         while (tag.parentNode.nodeName.toUpperCase() !== "LI") tag = tag.parentNode;
         tag = tag.parentNode;
     }
     switch (tag.id) {
         case "home": redirect("index.html"); break;
         case "news": redirect("nws/list.html"); break;
         case "activity": redirect("vol/launch-activity.html"); break;
         case "help": redirect("help.html"); break;
         case "login": redirect("login.html"); break;
     }
 });
})