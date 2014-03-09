// JavaScript Document
$(document).ready(function(e) {
    ajaxGet(temService+"GetActivityType",null,function(data){
		var d=XML2JSON(data);
		var u=$("#type").html("");
		for (var i = 0, obj; obj = d[i++]; ) {
            u.append("<option value='" + obj + "'>" + obj + "</option>");
           }
		})
});