<script>
function handleAutoplay() {
  var video = document.querySelector('.sqs-native-video video');
  var rect = video.getBoundingClientRect();
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;

  if (rect.top >= 0 && rect.bottom <= windowHeight) {
    if (!video.volume || video.volume < 1) {
      if (!video.volume) {
        video.volume = 0.03; // Start with a low volume (e.g., 10%)
      } else {
        video.volume += 0.03; // Increment the volume by 0.1 (adjust as needed)
      }
      setTimeout(function() {
        handleAutoplay(); // Continue checking and increasing volume
      }, 1000); // Adjust the delay between volume increases (e.g., 500ms)
    } else {
      
      video.play();
      window.removeEventListener('scroll', handleAutoplay);
    }
  } else {
    video.pause(); // Pause the video when completely out of viewport
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
</script>
