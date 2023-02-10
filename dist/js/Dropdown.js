
const toggleButton = document.getElementById("menu-toggle");
const menuDropdown = document.getElementById("menu-dropdown");

toggleButton.addEventListener("click", function() {
  menuDropdown.classList.toggle("hidden");
});
