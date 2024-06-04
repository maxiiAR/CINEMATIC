document.addEventListener('DOMContentLoaded', function() {
  var videoElement = document.getElementById('videoElement');
  var playButton = document.getElementById('playButton');

  playButton.addEventListener('click', function() {
      videoElement.style.display = 'block'; 
      videoElement.currentTime = 0; 
      videoElement.play();

      if (videoElement.requestFullscreen) {
          videoElement.requestFullscreen();
      } else if (videoElement.webkitRequestFullscreen) { 
          videoElement.webkitRequestFullscreen();
      }
  });

  videoElement.addEventListener('ended', function() {
      videoElement.style.display = 'none'; 
  });

  document.addEventListener('fullscreenchange', function() {
      if (!document.fullscreenElement) {
          videoElement.style.display = 'none'; 
          videoElement.pause(); 
      }
  });
});
document.addEventListener('DOMContentLoaded', function() {
  var videoElement = document.getElementById('nuevovideoElement');
  var playButton = document.getElementById('nuevoplayButton');

  playButton.addEventListener('click', function() {
      videoElement.style.display = 'block'; 
      videoElement.currentTime = 0; 
      videoElement.play();

      if (videoElement.requestFullscreen) {
          videoElement.requestFullscreen();
      } else if (videoElement.webkitRequestFullscreen) { 
          videoElement.webkitRequestFullscreen();
      }
  });

  videoElement.addEventListener('ended', function() {
      videoElement.style.display = 'none'; 
  });

  document.addEventListener('fullscreenchange', function() {
      if (!document.fullscreenElement) {
          videoElement.style.display = 'none'; 
          videoElement.pause(); 
      }
  });
});
document.addEventListener('DOMContentLoaded', function() {
  var videoElement = document.getElementById('nuevo-videoElement');
  var playButton = document.getElementById('nuevo-playButton');

  playButton.addEventListener('click', function() {
      videoElement.style.display = 'block'; 
      videoElement.currentTime = 0; 
      videoElement.play();

      if (videoElement.requestFullscreen) {
          videoElement.requestFullscreen();
      } else if (videoElement.webkitRequestFullscreen) { 
          videoElement.webkitRequestFullscreen();
      }
  });

  videoElement.addEventListener('ended', function() {
      videoElement.style.display = 'none'; 
  });

  document.addEventListener('fullscreenchange', function() {
      if (!document.fullscreenElement) {
          videoElement.style.display = 'none'; 
          videoElement.pause(); 
      }
  });
});


