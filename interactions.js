window.addEventListener("scroll", function (event) {
  var scroll = this.scrollY;
  if (scroll > 0) {
    document.getElementById("nav-header").style.backgroundColor = "white";
    document.getElementById("nav-header").style.boxShadow =
      "1px 1px 25px black";
  } else {
    document.getElementById("nav-header").style.backgroundColor = "#fffaeb";
    document.getElementById("nav-header").style.boxShadow = "none";
  }
});

function myFunction() {
  var x = document.getElementById("nav-bar");
  if (x.style.visibility === "visible") {
    x.style.visibility = "hidden";
  } else {
    x.style.visibility = "visible";
  }
}

window.addEventListener("resize", function () {
  if (window.matchMedia("(max-width: 47em)").matches) {
    const ulclicked = document.getElementById("ul-id");

    ulclicked.addEventListener("click", function handleClick() {
      var x = document.getElementById("nav-bar");
      x.style.visibility = "hidden";
    });
  } else {
    x.style.visibility = "visible";
  }
});

document.getElementById("about1").addEventListener("click", () => {
  window.setTimeout(() => {
    window.scrollTo(window.scrollX, window.scrollY - 110);
  }, 0);
});
document.getElementById("projects-id").addEventListener("click", () => {
  window.setTimeout(() => {
    window.scrollTo(window.scrollX, window.scrollY - 120);
  }, 2);
});
document.getElementById("contact-id").addEventListener("click", () => {
  window.setTimeout(() => {
    window.scrollTo(window.scrollX, window.scrollY - 120);
  }, 0);
});
document.getElementById("contact1").addEventListener("click", () => {
  window.setTimeout(() => {
    window.scrollTo(window.scrollX, window.scrollY - 120);
  }, 0);
});
