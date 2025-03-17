const animateItems = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll("*").forEach((child) => {
          child.classList.add("visible");
        });
      }
    });
  },
  { threshold: 0.2 }
);

animateItems.forEach((el) => observer.observe(el));

function realWhiteDogs() {
  window.location.href = "https://t.me/real_whitedogsbot";
}
