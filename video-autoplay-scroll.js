<script>
<!-- START -- Video Autoplay by dianaoviedo.work -->
    
function handleAutoplay() {
  var video = document.querySelector('.sqs-native-video video');
  var rect = video.getBoundingClientRect();
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;

  if (rect.top >= 0 && rect.bottom <= windowHeight) {
    video.currentTime = 0;
    video.play();
  } else {
    video.pause(); // Pause the video if it's out of the viewport
  }
}

function throttle(callback, limit) {
  var wait = false;
  return function () {
    if (!wait) {
      callback.apply(null, arguments);
      wait = true;
      setTimeout(function () {
        wait = false;
      }, limit);
    }
  };
}

var throttledAutoplay = throttle(handleAutoplay, 250); // Throttle to avoid too many scroll events
window.addEventListener('scroll', throttledAutoplay);

handleAutoplay(); // Check visibility on initial load

<!-- END -- Video Autoplay by dianaoviedo.work -->
</script>

