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
var width = Math.max(
  document.documentElement.clientWidth,
  window.innerWidth || 0
);
console.log("wwwwwwwwidth", width);
window.addEventListener("resize", function () {
  if (window.matchMedia("(min-width: 500px)").matches) {
    console.log("Screen width is at least 500px");
  } else {
    console.log("Screen less than 500px");
  }
});

if (window.screen.width <= 752) {
  const ulclicked = document.getElementById("ul-id");

  ulclicked.addEventListener("click", function handleClick() {
    var x = document.getElementById("nav-bar");
    x.style.visibility = "hidden";
  });
}
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
  console.log("Third page clicked");
  window.setTimeout(() => {
    window.scrollTo(window.scrollX, window.scrollY - 120);
  }, 0);
});
document.getElementById("contact1").addEventListener("click", () => {
  console.log("Third page clicked");
  window.setTimeout(() => {
    window.scrollTo(window.scrollX, window.scrollY - 120);
  }, 0);
});
