(function() {
  var video = document.querySelector('video'),
      unsupportedMessage = document.getElementById('unsupported-message');

  navigator.getUserMedia = navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia;

  if (navigator.getUserMedia) {
    navigator.getUserMedia({ video: true }, function(localStream) {
      video.src = window.URL.createObjectURL(localStream);
      video.play();
    }, function() {});
  } else {
    document.body.removeChild(video);
    unsupportedMessage.style.display = '';
  }
})();
