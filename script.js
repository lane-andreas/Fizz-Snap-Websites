function isScrollDown() {
  return window.scrollY > window.innerHeight / 2;
}

function handleScroll() {
  const animatedDiv = document.querySelector("#pop-nav");

  if (isScrollDown()) {
    animatedDiv.style.top = "2em";
  } else {
    animatedDiv.style.top = "-5em";
  }
}

window.addEventListener("scroll", handleScroll);
