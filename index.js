const cursorAnimation = () => {
  document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    // const crsr = document.querySelector("#crsr");
    gsap.to("#crsr", {
      left: x,
      top: y,
    });
  });

  Shery.makeMagnet("#menu , #nav-content-right h2" /* Element to target.*/, {});
};
cursorAnimation();

const loadingAnimation = () => {
  const tl = gsap.timeline();
  tl.from("#loader .line h1", {
    y: "100%",
    delay: 0.4,
    opacity: 0,
    stagger: 0.3,
    duration: 0.6,
  });
  tl.from("#line1-part1", {
    opacity: 0,
    onStart: () => {
      const loaderH5 = document.querySelector("#line1-part1 h5");
      let grow = 0;
      const h5Timer = setInterval(() => {
        ++grow;
        if (grow > 100) {
          grow = 100;
          clearInterval(h5Timer);
        }
        loaderH5.textContent = grow;
      }, 30);
    },
  });
  tl.to(".line h2", {
    animationName: "lineH2",
    opacity: 1,
  });
  tl.to("#loader", {
    opacity: 0,
    delay: 4,
    duration: 0.4,
  });
  tl.from("#page1", {
    y: 1200,
    opacity: 0,
  });
};

// loadingAnimation();

const page1Animation = () => {
  gsap.from("#hero-text,#menu,#logo,#nav-content h1,#nav-content h2", {
    y: "120%",
    opacity: 0,
    duration: 0.8,
  });
  gsap.to("#page1-content", {
    // opacity: 0,
    y: "-200%",
    scrollTrigger: {
      trigger: "#page1-content",
      scroller: "body",
      start: "top 10%",
      end: "top -50%",
      markers: true,
      scrub: 2,
    },
  });
};

page1Animation();
