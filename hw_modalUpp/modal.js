const modalBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const modal = document.querySelector(".modal");

modalBtn.addEventListener("click", () => {
  modalOverlay.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modalOverlay.style.display = "none";
});