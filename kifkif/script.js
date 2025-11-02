const toggle = document.getElementById("lang-toggle");
let isEnglish = false;

toggle.addEventListener("click", () => {
  isEnglish = !isEnglish;
  document.querySelectorAll("[data-lang='vi']").forEach(el => {
    el.style.display = isEnglish ? "none" : "block";
  });
  document.querySelectorAll("[data-lang='en']").forEach(el => {
    el.style.display = isEnglish ? "block" : "none";
  });
  toggle.textContent = isEnglish ? "VN" : "EN";
});
