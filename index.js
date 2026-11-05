// Color Flipper

// let colors = ["green", "red", "blue", "yellow", "orange", "purple", "pink"];
// let btn = document.getElementById("btn");
// let color = document.querySelector(".color");

// function getRandomNumber() {
//   return Math.floor(Math.random() * colors.length);
// }

// btn.addEventListener("click", () => {
//   let randomColor = getRandomNumber();
//   document.body.style.backgroundColor = colors[randomColor];
//   color.textContent = colors[randomColor];
// });
///////////////////////////////////////////////////////////////////////////
// Counter

// let counter = 0;
// let value = document.querySelector("#value");
// let btns = document.querySelectorAll(".btn");

// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     let styles = e.target.classList;
//     if (styles.contains("increase")) {
//       counter++;
//     } else if (styles.contains("decrease")) {
//       counter--;
//     } else {
//       counter = 0;
//     }

//     if (counter > 0) {
//       value.style.color = "green";
//     }
//     if (counter < 0) {
//       value.style.color = "red";
//     }
//     if (counter === 0) {
//       value.style.color = "#222";
//     }
//     value.textContent = counter;
//   });
// });
////////////////////////////////////////////////////////////////////////////
// Modal

// let modalBtn = document.querySelector(".modal-btn");
// let modal = document.querySelector(".modal-overlay");
// let closeBtn = document.querySelector(".close-btn");

// modalBtn.addEventListener("click", () => {
//   modal.classList.add("open-modal");
// });
// closeBtn.addEventListener("click", () => {
//   modal.classList.remove("open-modal");
// });
//////////////////////////////////////////////////////////////////////
// Questions
// let questions = document.querySelectorAll(".question");

// questions.forEach((question) => {
//   let btn = question.querySelector(".question-btn");
//   btn.addEventListener("click", () => {
//     question.classList.toggle("show-text");
//   });
// });
//////////////////////////////////////////////////////////////
// Tabs
// let about = document.querySelector(".about");
// let btns = document.querySelectorAll(".tab-btn");
// let articles = document.querySelectorAll(".content");

// about.addEventListener("click", (e) => {
//   let id = e.target.dataset.id;
//   if (id) {
//     btns.forEach((btn) => {
//       btn.classList.remove("active");
//     });
//     e.target.classList.add("active");
//     articles.forEach((article) => {
//       article.classList.remove("active");
//     });
//     let element = document.getElementById(id);
//     element.classList.add("active");
//   }
// });
