function isScrollDown() {
  return window.scrollY > window.innerHeight / 2;
}

function handleScroll() {
  const animatedDiv = document.querySelector("#pop-nav");

  if (isScrollDown()) {
    document.documentElement.style.setProperty("--nav-top", "2em");
  } else {
    document.documentElement.style.setProperty("--nav-top", "-10em");
  }
}

window.addEventListener("scroll", handleScroll);
