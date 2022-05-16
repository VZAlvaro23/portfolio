gsap.registerPlugin(ScrollTrigger);

var artEls;
var body = document.getElementsByTagName("body")[0];

var anim = {
  init: function () {
    anim.initEls();
    anim.animate();
  },
  initEls: function () {
    artEls = document.querySelectorAll(".projects__article");
  },
  animate: function () {
    let tl = gsap.timeline({
      scrollTrigger: {
        id: "article",
        trigger: ".projects",
        start: "top 80%",
        // start: "top 50%",
        end: "bottom 80%",
        // end: "bottom 50%",
        onLeave: self => self.kill(false, true),
        scrub: 0.25,
      },
    });

    tl.from(artEls, {
      rotationX: -90,
      // rotationY:0,
      opacity: 0,
      stagger: 0.5,
    });
    let t2 = gsap.timeline({
      scrollTrigger: {
        id: "about",
        trigger: ".about",
        toggleActions: "play pause resume pause",
        start: "top center",
        // end: 'center center',
        // markers: 'true',
        // scrub: 0.25,
        // pin: true
      },
    });
    t2.from(".about", {
      rotationX: -90,
      // rotationY:0,
      opacity: 0,
      stagger: 0.5,
    });
  },
};

window.addEventListener("load", function () {
  anim.init();
});
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

function scrollBody() {
  body.style.overflowY = "visible";
}

function open() {
  TweenMax.to(".btn", 1, {
    rotationY: -90,
  });

  TweenMax.to(".splash", 1, {
    // opacity:0,
    rotationY: -90,
    delay: 3,
  });

  setTimeout(scrollBody, 6000);
}

const btn = document.getElementById('btn');

btn.addEventListener('click', open);
