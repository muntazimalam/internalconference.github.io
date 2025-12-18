/* ===============================
   PAGE LOADER
================================ */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
});

/* ===============================
   HAMBURGER MENU
================================ */
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("show");
}

/* ===============================
   SCROLL REVEAL (AOS STYLE)
================================ */
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 100;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();



function filterTopics() {
    let input = document.getElementById('topicFilter').value.toLowerCase();
    let chips = document.getElementById('chipContainer').getElementsByClassName('chip');
    
    for (let i = 0; i < chips.length; i++) {
        if (chips[i].innerText.toLowerCase().includes(input)) {
            chips[i].style.display = "";
        } else {
            chips[i].style.display = "none";
        }
    }
}