const imageTanya = document.getElementsByClassName("tanya");
const imageJohn = document.getElementsByClassName("john");
const testTanya = document.getElementsByClassName("testimonial-1");
const testJohn = document.getElementsByClassName("testimonial-2");
const buttonPrev = document.getElementById("prev");
const buttonNext = document.getElementById("next");

buttonPrev.addEventListener("click", nextSlide);
buttonNext.addEventListener("click", nextSlide);

function nextSlide() {
  let compStyles = window.getComputedStyle(testJohn[0]);
  if (compStyles.getPropertyValue("display") === "none") {
    imageJohn.item(0).style.display = "inline";
    testJohn.item(0).style.display = "flex";
    imageTanya.item(0).style.display = "none";
    testTanya.item(0).style.display = "none";
  } else {
    imageTanya.item(0).style.display = "inline";
    testTanya.item(0).style.display = "flex";
    imageJohn.item(0).style.display = "none";
    testJohn.item(0).style.display = "none";
  }
}
