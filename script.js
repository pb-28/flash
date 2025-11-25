function showSection(id) {
  document.querySelectorAll(".section").forEach(s => s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

// Desktop buttons
document.querySelectorAll(".nav-btn").forEach(btn => {
  btn.addEventListener("click", () => showSection(btn.dataset.section));
});

// Mobile menu
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("mobile-menu").classList.toggle("hidden");
});

// Mobile buttons
document.querySelectorAll(".mobile-nav-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    showSection(btn.dataset.section);
    document.getElementById("mobile-menu").classList.add("hidden");
  });
});

// Default section
showSection("home");
