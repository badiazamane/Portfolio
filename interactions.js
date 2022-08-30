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
  if (x.style.display === "none !important") {
    x.style.display = "flex !important";
  } else {
    x.style.display = "none !important";
  }
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
