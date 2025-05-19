const saveBtn = document.getElementById("saveBtn");
const nameInput = document.getElementById("nameInput");
const welcomeMessage = document.getElementById("welcomeMessage");
const box = document.getElementById("box");
const animateBtn = document.getElementById("animateBtn");

// Store name in localStorage
saveBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  if (name) {
    localStorage.setItem("userName", name);
    displayWelcome(name);
  }
});

// Retrieve name from localStorage on load
window.addEventListener("DOMContentLoaded", () => {
  const savedName = localStorage.getItem("userName");
  if (savedName) {
    nameInput.value = savedName;
    displayWelcome(savedName);
  }
});

// Function to show greeting
function displayWelcome(name) {
  welcomeMessage.textContent = `Welcome back, ${name}!`;
}

// Trigger animation with JS
animateBtn.addEventListener("click", () => {
  box.classList.remove("bounce");         // Reset animation
  void box.offsetWidth;                   // Trigger reflow
  box.classList.add("bounce");            // Re-apply animation
});
