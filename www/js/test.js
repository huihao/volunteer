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

        varuri = encodeURI("http://60.187.5.98:2544/VolunteerWebService.asmx/Test");

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

 

