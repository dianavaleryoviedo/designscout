{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf0 \
<script type=\'93text/javascript\'94>\
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0
\cf0 <!-- START -- ScrollTrigger by dianaoviedo.work -->\
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
<!-- END -- Video Autoplay by dianaoviedo.work -->\
\pard\pardeftab720\partightenfactor0
\cf0 </script>}