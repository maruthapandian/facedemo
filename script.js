/*
const video = document.getElementById('video');

function startVideo()
{
console.log("We are good to go");
	navigator.getUserMedia(
	{video: {} },
	stream => video.srcObject = stream, 
	err => console.error(err)
	)
	console.log("We are good to gon2");	
}
startVideo();
*/

function hasGetUserMedia() {
	return !!(navigator.mediaDevices &&
	  navigator.mediaDevices.getUserMedia);
  }
  
  if (hasGetUserMedia()) {
	// Good to go!
	console.log("We are good to go");
	navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        //video.src = window.URL.createObjectURL(stream);
        video.srcObject = stream;
		video.play();
	});
  } else {
	alert('getUserMedia() is not supported by your browser');
  }
  