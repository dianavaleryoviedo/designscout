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


function loadExternalScripts() {
  var gsapScript = document.createElement('script');
  gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js';
  gsapScript.async = true;

  var scrollTriggerScript = document.createElement('script');
  scrollTriggerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/ScrollTrigger.min.js';
  scrollTriggerScript.async = true;

  document.body.appendChild(gsapScript);
  document.body.appendChild(scrollTriggerScript);


  gsapScript.onload = function() {
    console.log('GSAP script loaded.');
    scrollTriggerScript.onload = function() {
      console.log('ScrollTrigger script loaded.');

 
      gsap.registerPlugin(ScrollTrigger);
    
gsap.fromTo(".sqs-block-image [href='/left']", 
  {
    x: 100
  },
  {
    x: -200,
    duration: 1,
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
  

gsap.fromTo(".sqs-block-image [href='/right']", 
  {
    x: -100
  },
  {
    x: 200,
    duration: 1,
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


  gsap.fromTo(".sqs-block-video", {
   scale: 0.5
  },
  {
    scale: 1.2,
    duration: 1,
    scrollTrigger:{
      trigger: 'section[data-section-id="6618184ec021bc5008d6f1ad"]',
      start: "top top",
      end: "+=100",
      endTrigger: 'section[data-section-id="6621460727572412baf1799a"]',
      scrub: 1,
    }
});
ScrollTrigger.refresh()  
    };
  };
}


loadExternalScripts();

