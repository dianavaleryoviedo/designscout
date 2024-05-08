{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 <!-- START -- Video Autoplay by dianaoviedo.work -->\
<script>\
function handleAutoplay() \{\
  var video = document.querySelector('.sqs-native-video video');\
  var rect = video.getBoundingClientRect();\
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;\
\
  if (rect.top >= 0 && rect.bottom <= windowHeight) \{\
    video.currentTime = 0;\
    video.play();\
  \} else \{\
    video.pause(); // Pause the video if it's out of the viewport\
  \}\
\}\
\
function throttle(callback, limit) \{\
  var wait = false;\
  return function () \{\
    if (!wait) \{\
      callback.apply(null, arguments);\
      wait = true;\
      setTimeout(function () \{\
        wait = false;\
      \}, limit);\
    \}\
  \};\
\}\
\
var throttledAutoplay = throttle(handleAutoplay, 250); // Throttle to avoid too many scroll events\
window.addEventListener('scroll', throttledAutoplay);\
\
handleAutoplay(); // Check visibility on initial load\
</script>\
\
<!-- END -- Video Autoplay by dianaoviedo.work -->}