// Vaiables !

const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const modalContainer = document.querySelector(".modal-container");

// Event Listeners !

openBtn.addEventListener("click", () => {
  modalContainer.style.display = "grid";
});

closeBtn.addEventListener("click", () => {
  modalContainer.style.display = "none";
});

// Window Addd event Listeners !

window.addEventListener("click", (e) => {
  if (e.target === modalContainer) {
    modalContainer.style.display = "none";
  }
});
