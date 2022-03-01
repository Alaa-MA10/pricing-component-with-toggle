const toggle = document.getElementById("toggle");
const cardsContainer = document.getElementById("cards-container");

toggle.addEventListener("change", (e) => {
  cardsContainer.classList.toggle("show-monthly");
});
