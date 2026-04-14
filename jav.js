// 🌙☀️ Changement de thème
const toggleBtn = document.getElementById("themeToggle");
let isDark = true;

toggleBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // empêche conflit avec musique

  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");

  isDark = !isDark;
  toggleBtn.textContent = isDark ? "🌙 Mode nuit" : "☀️ Mode jour";
});
