gsap.registerPlugin(ScrollTrigger);

var artEls;
var body = document.getElementsByTagName("body")[0];

var anim = {
  init: function () {
    anim.initEls();
    anim.animate();
  },
  initEls: function () {
    artEls = document.querySelectorAll(".fold");
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
        // onLeave: (self) => self.kill(false, true),
        scrub: 0.25,
      },
    });

    tl.from(artEls, {
      rotationX: -90,
      // rotationY:0,
      opacity: 0,
      stagger: 0.5,
    });
    // let t2 = gsap.timeline({
    //   scrollTrigger: {
    //     id: "about",
    //     trigger: ".about",
    //     // toggleActions: "play none none none",
    //     start: "top center",
    //     end: 'center center',
    //     // markers: 'true',
    //     scrub: 0.25,
    //     // pin: true
    //   },
    // });
    // t2.from(".about", {
    //   rotationX: -90,
    //   // rotationY:0,
    //   opacity: 0,
    //   stagger: 0.5,
    // });
  },
};

window.addEventListener("load", function () {
  anim.init();
  window.scroll(0, 0);
});

function scrollBody() {
  body.style.overflowY = "visible";
  // html.style.scrollBehavior = "smooth";
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
      TweenMax.to(".home-tag", 2, {
        opacity: 1,
        duration: 3,
        delay: 6,
      });

  setTimeout(scrollBody, 6000);
}

const btn = document.getElementById("btn");

btn.addEventListener("click", open);

const nav = document.getElementById('nav');
const navBtn = document.getElementById('mobile-nav-toggle');

navBtn.addEventListener("click", () => {
  nav.classList.toggle("visible");
});