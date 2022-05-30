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
      // TweenMax.to(".home-tag", 2, {
      //   opacity: 1,
      //   // duration: 3,
      //   delay: 6,
      // });

  setTimeout(scrollBody, 6000);
}
  const drop1 = document.getElementById('drop1');
  const drop2 = document.getElementById('drop2');
  const drop3 = document.getElementById('drop3');
  const drop4 = document.getElementById('drop4');
  const drop5 = document.getElementById('drop5');
  const drop6 = document.getElementById('drop6');
  const drop7 = document.getElementById('drop7');
  const drop8 = document.getElementById('drop8');
  const drop9 = document.getElementById('drop9');

function addAnimations() {
  drop1.classList.add('animationdrop0');
  drop2.classList.add('animationdrop1');
  drop4.classList.add('animationdrop1');
  drop7.classList.add('animationdrop1');
  drop3.classList.add('animationdrop2');
  drop8.classList.add('animationdrop2');
  drop5.classList.add('animationdrop3');
  drop9.classList.add('animationdrop4');
  drop6.classList.add('animationdrop5');
}

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  open();
  addAnimations();
});

const nav = document.getElementById('nav');
const navBtn = document.getElementById('mobile-nav-toggle');

navBtn.addEventListener("click", () => {
  nav.classList.toggle("visible");
});

