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
 $("#test").click(function (e) {
       getPhoto();
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

   var pictureSource;   //picture source

   var destinationType; // setsthe format of returned value

   document.addEventListener("deviceready",onDeviceReady,false);

   function onDeviceReady() {

       pictureSource = navigator.camera.PictureSourceType;

       destinationType = navigator.camera.DestinationType;

   }

   //�����ς���uploadPhotoΪ���ճɹ�����ú��������ճɹ��������ϴ�������ˣ�

   function capturePhoto() {

       navigator.camera.getPicture(uploadPhoto, onFail, {

           quality: 100,

           destinationType: destinationType.FILE_URI,

           sourceType: Camera.PictureSourceType.CAMERA,

           encodingType: Camera.EncodingType.JPEG,

           popoverOptions: CameraPopoverOptions

       });

   }

 

  //�������x��

   function getPhoto() {

       navigator.camera.getPicture(uploadPhoto, onFail, {

           quality: 100,

           destinationType: navigator.camera.DestinationType.FILE_URI,

           sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY

       });

   }

//�ϴ�ʧ�ܻص�������cancelledΪȡ�����������׳��쳣

    functiononFail(message) {       

       if (message.indexOf('cancelled')< 0) {

           alert('���e�ˣ�'+message);

       }

   }

   //�ς��DƬ

   function uploadPhoto(imageURI) {

       var options = newFileUploadOptions();

       //�������ò���������˵�Request�ִ�

       options.fileKey = "fileAddPic";

       options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);

 

       //�����ͼƬ��ʽ������image/jpeg�������ļ���ʽ�Ϲ�����API

       options.mimeType = "image/jpeg";

 

       //�����uri�����Լ��������趨����һ�������ϴ�ͼƬ�ĵ�ַ

        varuri = encodeURI("http://60.187.8.75:15041/uploadHandler.ashx");

        options.chunkedMode = false;

        var ft = newFileTransfer();

        ft.upload(imageURI, uri, uploadOK, onFail, options);

   }

//�ϴ��ɹ��ص�������msg.responseΪ����˷��ص��ı�

   function uploadOK(msg) {

       var response = msg.response;

       alert(response);

   }
})

 

