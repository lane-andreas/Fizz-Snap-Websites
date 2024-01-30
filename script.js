let typeSplit = new SplitType(".fade", {
  types: "lines, words, chars",
  tagName: "span",
});

gsap.from(".fade .char", {
  scale: ".8",
  y: "50%",
  opacity: 0,
  ease: "power1.out",
  stagger: 0.05,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".scroll",
    start: "top center",
  },
});

function isScrollDown() {
  return window.scrollY > window.innerHeight / 2;
}

function handleScroll() {
  if (isScrollDown()) {
    document.documentElement.style.setProperty("--nav-top", "2em");
  } else {
    document.documentElement.style.setProperty("--nav-top", "-10em");
  }
}

window.addEventListener("scroll", handleScroll);

document.querySelectorAll(".menu").forEach((button) => {
  button.addEventListener("click", function () {
    const valueRight = getComputedStyle(document.documentElement)
      .getPropertyValue("--slide-nav")
      .trim();

    if (valueRight === "-100%") {
      document.documentElement.style.setProperty("--slide-nav", "1em");
    } else {
      document.documentElement.style.setProperty("--slide-nav", "-100%");
    }
    console.log("val");
  });
});
