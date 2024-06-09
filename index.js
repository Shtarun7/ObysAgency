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
