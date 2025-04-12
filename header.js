document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const menu = document.querySelector(".menu");
  
    hamburger.addEventListener("click", () => {
      menu.classList.toggle("show");
    });
  });
  