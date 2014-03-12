needAskLogout = false;
$(function () {
	ajaxGet("http://60.187.5.98:15041/ImageWebService.asmx/" + "HelloWorld", null, function(data) {
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
		ajaxGet("http://60.187.5.98:15041/ImageWebService.asmx/HelloWorld", null, function(data) {
			 var d= $(data).find("string").text()
			alert(d);
        });
       
 });
 $("#test").click(function (e) {
     capturePhoto()
 });

   var pictureSource;   //picture source

   var destinationType; // setsthe format of returned value

   document.addEventListener("deviceready",onDeviceReady,false);

   function onDeviceReady() {

       pictureSource = navigator.camera.PictureSourceType;

       destinationType = navigator.camera.DestinationType;

   }

   //拍照上傳，uploadPhoto为拍照成功后调用函数（拍照成功后立即上传至服务端）

   function capturePhoto() {

       navigator.camera.getPicture(uploadPhoto, onFail, {

           quality: 100,

           destinationType: destinationType.FILE_URI,

           sourceType: Camera.PictureSourceType.CAMERA,

           encodingType: Camera.EncodingType.JPEG,

           popoverOptions: CameraPopoverOptions

       });

   }

 

  //從相冊選擇

   function getPhoto() {

       navigator.camera.getPicture(uploadPhoto, onFail, {

           quality: 100,

           destinationType: navigator.camera.DestinationType.FILE_URI,

           sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY

       });

   }

//上传失败回调函数：cancelled为取消动作，不抛出异常

    functiononFail(message) {       

       if (message.indexOf('cancelled')< 0) {

           alert('出錯了：'+message);

       }

   }

   //上傳圖片

   function uploadPhoto(imageURI) {

       var options = newFileUploadOptions();

       //用于设置参数，服务端的Request字串

       options.fileKey = "fileAddPic";

       options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);

 

       //如果是图片格式，就用image/jpeg，其他文件格式上官网查API

       options.mimeType = "image/jpeg";

 

       //这里的uri根据自己的需求设定，是一个接收上传图片的地址

        varuri = encodeURI("http://60.187.5.98:2544/VolunteerWebService.asmx/Test");

       options.chunkedMode = false;

       var ft = newFileTransfer();

       ft.upload(imageURI, uri, uploadOK, onFail, options);

   }

//上传成功回调函数：msg.response为服务端返回的文本

   function uploadOK(msg) {

       var response = msg.response;

       alert(response);

   }
})

 

