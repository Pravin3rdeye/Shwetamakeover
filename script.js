// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {

  const rows = document.querySelectorAll('.portfolio-row');

  // Add hidden class initially
  rows.forEach(row => {
    row.classList.add('hidden');
  });

  // Create Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.2
  });

  // Observe each row
  rows.forEach(row => {
    observer.observe(row);
  });

});

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("toggle");
  const menu = document.getElementById("menu");

  // Toggle click
  toggle.addEventListener("click", (e) => {
    e.stopPropagation(); // important
    menu.classList.toggle("active");
  });

  // Menu ke andar click pe close na ho
  menu.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // Outside click → close
  document.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});
