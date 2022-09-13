var rating;

function choice(el) {
  // const rating = document.;
  rating = el.innerText.toString();
  [].map.call(document.querySelectorAll(".rating"), function (el) {
    el.classList.remove("orange"); // remove from all
  });
  el.classList.add("orange");
  // const ratingValue = rating.childNodes;
  console.log(rating);
}

function submit() {
  if (!rating) {
    const warning = document.getElementById("warning");
    warning.classList.add("show");
    console.log(warning);
  } else {
    const fdElement = document.getElementById("fd");
    fdElement.classList.add("hide");
    const tyElement = document.getElementById("ty");
    tyElement.classList.remove("hide");
    const line = (document.querySelector(".final-rating").innerHTML =
      "You selected " + rating + " out of 5");
    console.log("okey");
  }
}

// get the element
// var div1 = document.getElementById("bob");

// // set an event listener for it
// div1.addEventListener("click", function () {
//   //   //   create a new div
//   //   var div2 = document.createElement("div");
//   //   //   giv that div an id of two
//   //   div2.setAttribute("id", "two");
//   //   //   append the new div to the dom
//   //   this.parentNode.appendChild(div2);
//   //   //   remove the clicked div
//   //   this.parentNode.removeChild(this);
//   console.log(this.innerText);
// });
