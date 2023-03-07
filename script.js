let img1 = document.querySelector(".card1");
let img2 = document.querySelector(".card2");

let img3 = document.querySelector(".card3");

let img4 = document.querySelector(".card4");

const handleClick = (event) => {
  const element = event.target;
  element.classList.toggle("none");
};
img1.addEventListener("click", handleClick);
img2.addEventListener("click", handleClick);
img3.addEventListener("click", handleClick);
img4.addEventListener("click", handleClick);
