const startBtn = document.querySelector(".start-btn");
const popupInfo = document.querySelector(".popup-info");
const exitBtn = document.querySelector(".exit-btn");
const main = document.querySelector(".main");
const continueBtn = document.querySelector(".continue-btn");
const quizSection = document.querySelector(".quiz-section");
startBtn.onclick = () => {
  popupInfo.classList.add("active");
  main.classList.add("active");
};
exitBtn.onclick = () => {
  main.classList.remove("active");
  popupInfo.classList.remove("active");
};
continueBtn.onclick = () => {
  window.location.href = "quiz.html";
  // quizSection.classList.add("active");
  // popupInfo.classList.remove("active");
  // main.classList.remove("active");
};
