let img1 = document.querySelector(".card1");
let img2 = document.querySelector(".card2");

let img3 = document.querySelector(".card3");

let img4 = document.querySelector(".card4");
let desc1 = document.querySelector(".desc_card1");
let desc2 = document.querySelector(".desc_card2");
let desc3 = document.querySelector(".desc_card3");
let desc4 = document.querySelector(".desc_card4");

const handleClick1 = (event) => {
  desc1.classList.toggle("none");
  img1.classList.toggle("none");
};
const handleClick2 = (event) => {
  desc2.classList.toggle("none");
  img2.classList.toggle("none");
};
const handleClick3 = (event) => {
  desc3.classList.toggle("none");
  img3.classList.toggle("none");
};
const handleClick4 = (event) => {
  desc4.classList.toggle("none");
  img4.classList.toggle("none");
};

desc1.addEventListener("click", handleClick1);
desc2.addEventListener("click", handleClick2);
desc3.addEventListener("click", handleClick3);
desc4.addEventListener("click", handleClick4);

// const handleClick2 = (event) => {
//   const element = event.target;
//   element.classList.toggle("display");
// };
// desc1.addEventListener("click", handleClick2);
let select = function () {
  let selectHeader = document.querySelectorAll(".select__header");
  let selectItem = document.querySelectorAll(".select__item");

  selectHeader.forEach((item) => {
    item.addEventListener("click", selectToggle);
  });

  selectItem.forEach((item) => {
    item.addEventListener("click", selectChoose);
  });

  function selectToggle() {
    this.parentElement.classList.toggle("is-active");
  }

  function selectChoose() {
    let text = this.innerText,
      select = this.closest(".select"),
      currentText = select.querySelector(".select__current");
    currentText.innerText = text;
    select.classList.remove("is-active");
  }
};

select();
