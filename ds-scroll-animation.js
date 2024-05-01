<!-- START -- ScrollTrigger by dianaoviedo.work -->\
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js"></script>\
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/ScrollTrigger.min.js"></script>\
<script>\
 /*  Left Moving Images */ \
  gsap.registerPlugin(ScrollTrigger);  \
  gsap.to(".sqs-block-image a[href='/left']", \{\
   x: -200,\
    scrollTrigger:\{\
      trigger: 'section[data-section-id="6628085c24e8ee78e2c0ad7e"]',\
      start: "top bottom",\
      end: "top top",\
      endTrigger: 'section[data-section-id="6628085c24e8ee78e2c0ad81"]',\
      scrub: 0.8,\
    \}\
\});\
ScrollTrigger.refresh()  \
  \
 /*  Right Moving Images */ \
  gsap.to(".sqs-block-image a[href='/right']", \{\
   x: 200,\
    scrollTrigger:\{\
      trigger: 'section[data-section-id="6628085c24e8ee78e2c0ad7e"]',\
      start: "top bottom",\
      end: "bottom bottom",\
      endTrigger: 'section[data-section-id="6628085c24e8ee78e2c0ad81"]',\
      scrub:2,\
    \}\
\});\
ScrollTrigger.refresh()  \
\
 /*  Video Scale */ \
  gsap.to(".sqs-block-video", \{\
   scale: 2,\
    scrollTrigger:\{\
      trigger: 'section[data-section-id="6628085c24e8ee78e2c0ad7b"]',\
      start: "top top",\
      end: "+=100",\
      endTrigger: 'section[data-section-id="6628085c24e8ee78e2c0ad81"]',\
      scrub: 1,\
    \}\
\});\
ScrollTrigger.refresh()  \
</script>\
<!-- END -- ScrollTrigger by dianaoviedo.work -->\
\
\
<!-- START -- Video Autoplay by dianaoviedo.work -->\
<script>\
function handleAutoplay() \{\
  var video = document.querySelector('.sqs-native-video video');\
  var rect = video.getBoundingClientRect();\
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;\
\
  if (rect.top >= 0 && rect.bottom <= windowHeight) \{\
    video.currentTime = 0;\
    video.play();\
    window.removeEventListener('scroll', handleAutoplay);\
  \}\
\}\
\
window.addEventListener('scroll', handleAutoplay);\
\
handleAutoplay();\
</script>\
<!-- END -- Video Autoplay by dianaoviedo.work -->
