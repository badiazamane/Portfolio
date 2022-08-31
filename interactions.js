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
  var y = document.getElementById("nav-bar");
  if (y.style.visibility === "visible") {
    y.style.visibility = "hidden";
  } else {
    y.style.visibility = "visible";
  }
}

window.addEventListener("resize", function () {
  var w = window.innerWidth;
  console.log(w);
  var z = document.getElementById("nav-bar");
  if (w < 752) {
    const ulclicked = document.getElementById("ul-id");
    ulclicked.addEventListener("click", function handleClick() {
      z.style.visibility = "hidden";
    });
  } else {
    z.style.visibility = "visible";
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

window.addEventListener("resize", function () {
  var w = window.innerWidth;
  var z = document.getElementById("nav-bar");
  if (w > 752) {
    const ulclicked = document.getElementById("ul-id");
    ulclicked.addEventListener("click", function handleClick() {
      z.style.visibility = "visible";
      console.log("fffffffff");
    });
  } else {
    z.style.visibility = "hidden";
  }
});
// function myFunction1(x) {
//   var z = document.getElementById("nav-bar");
//   if (x.matches) {
//     const ulclicked = document.getElementById("ul-id");
//     ulclicked.addEventListener("click", function handleClick() {
//       z.style.visibility = "hidden";
//       console.log("rani hnaaaaaaa");
//     });
//   } else {
//     console.log("rani lhiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiih");
//     z.style.visibility = "visible";
//   }
// }
// var x = window.matchMedia("(max-width: 47em)");
// x.addListener(myFunction1); // Attach listener function on state changes
// myFunction1(x); // Call listener function at run time
