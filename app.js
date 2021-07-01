window.addEventListener("DOMContentLoaded", () => {
  initFuntion();
});

function initFuntion() {
  const toggleButton = document.getElementById("toggle-button");
  const circle = document.getElementById("circle");

  toggleButton.addEventListener("click", (e) => {
    circle.classList.toggle("tog");

    priceToggle();
  });
}

function priceToggle() {
  const pricesYear = document.querySelectorAll(".price-year");
  const pricesMonth = document.querySelectorAll(".price-month");

  pricesMonth.forEach((element) => element.classList.toggle("hidden"));
  pricesYear.forEach((element) => element.classList.toggle("hidden"));
}
