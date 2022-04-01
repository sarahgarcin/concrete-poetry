$(document).ready(function(){

	// Save image as jpg on server
	$("#save-to-server-btn").click(function() {
	  html2canvas($("#sketch"), {
	      onrendered: function(canvas) {
	          var imgsrc = canvas.toDataURL("image/png");
	          console.log(imgsrc);
	          // $("#newimg").attr('src', imgsrc);
	          // $("#img").show();
	          var dataURL = canvas.toDataURL();
	          $.ajax({
	              type: "POST",
	              url: "save.php",
	              data: {
	                  imgBase64: dataURL
	              }
	          }).done(function(o) {
	              console.log('saved');
	          });
	      }
	  });
	}); 


});