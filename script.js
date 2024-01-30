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
      document.documentElement.style.setProperty("--slide-nav", "7vw");
    } else {
      document.documentElement.style.setProperty("--slide-nav", "-100%");
    }
    console.log("val");
  });
});
