<!-- START Video Autoplay by dianaoviedo.work -->
<script>
function handleAutoplay() {
  var video = document.querySelector('.sqs-native-video video');
  var rect = video.getBoundingClientRect();
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;

  if (rect.top >= 0 && rect.bottom <= windowHeight) {
    if (!video.volume || video.volume < 1) {
      if (!video.volume) {
        video.volume = 0.01;
      } else {
        video.volume += 0.03;
      }
      setTimeout(function() {
        handleAutoplay();
      }, 1000);
    } else {
      
      video.play();
      window.removeEventListener('scroll', handleAutoplay);
    }
  } else {
    video.pause();
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

var throttledAutoplay = throttle(handleAutoplay, 250);
window.addEventListener('scroll', throttledAutoplay);

handleAutoplay();
</script>
<!-- END Video Autoplay by dianaoviedo.work -->


<!-- START -- ScrollTrigger by dianaoviedo.work -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/ScrollTrigger.min.js"></script>
<script>
  
gsap.registerPlugin(ScrollTrigger);   
  
 /*  Left Moving Images */  
gsap.fromTo(".sqs-block-image [href='/left']", 
  {
    x: 300 // Starting position (original)
  },
  {
    x: -200, // Ending position (x = -200)
    duration: 1, // Animation duration (adjust as needed)
    scrollTrigger: {
      trigger: 'section[data-section-id="66180f89c31c46244fb0d4e0"]',
      start: "top bottom",
      end: "top top",
      endTrigger: 'section[data-section-id="6618184ec021bc5008d6f1ad"]',
      scrub: 0.5,
    }
  }
);
ScrollTrigger.refresh();
  
 /*  Right Moving Images */ 
gsap.fromTo(".sqs-block-image [href='/right']", 
  {
    x: -300 // Starting position (original)
  },
  {
    x: 200, // Ending position (x = -200)
    duration: 1, // Animation duration (adjust as needed)
    scrollTrigger: {
      trigger: 'section[data-section-id="66180f89c31c46244fb0d4e0"]',
      start: "top bottom",
      end: "top top",
      endTrigger: 'section[data-section-id="6618184ec021bc5008d6f1ad"]',
      scrub: 0.5,
    }
  }
);
ScrollTrigger.refresh();

 /*  Video Scale */ 
  gsap.to(".sqs-block-video", {
   scale: 1.2,
    scrollTrigger:{
      trigger: 'section[data-section-id="6618184ec021bc5008d6f1ad"]',
      start: "top top",
      end: "+=100",
      endTrigger: 'section[data-section-id="6621460727572412baf1799a"]',
      scrub: 1,
    }
});
ScrollTrigger.refresh()  
</script>
<!-- END -- ScrollTrigger by dianaoviedo.work -->
