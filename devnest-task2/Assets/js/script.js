document.addEventListener("DOMContentLoaded", () => {
  // Counter feature
  let count = 0;
  const counterDisplay = document.getElementById("counter");
  const increaseBtn = document.getElementById("increaseBtn");

  if (increaseBtn) {
    increaseBtn.addEventListener("click", () => {
      count++;
      counterDisplay.textContent = count;
    });
  }

  // Dark Mode feature
  const toggleDarkBtn = document.getElementById("toggleDarkBtn");
  const body = document.body;

  if (toggleDarkBtn) {
    toggleDarkBtn.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
    });
  }
});
