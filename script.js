/* =========================================================
   ADZIA DIGITAL
   FUTURISTIC / 2030 INTERACTION ENGINE
========================================================= */


/* =========================================================
   1. MOBILE MENU
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

  menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");
    menuBtn.classList.toggle("active");

  });


  // Close menu when clicking a link

  navLinks.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("active");
      menuBtn.classList.remove("active");

    });

  });

}


/* =========================================================
   2. FUTURISTIC GLASS NAVBAR
========================================================= */

const header = document.getElementById("header");

function updateNavbar() {

  if (!header) return;

  if (window.scrollY > 40) {

    header.classList.add("scrolled");

  } else {

    header.classList.remove("scrolled");

  }

}

window.addEventListener("scroll", updateNavbar, {
  passive: true
});

updateNavbar();


/* =========================================================
   3. SCROLL PROGRESS BAR
========================================================= */

const progressBar = document.createElement("div");

progressBar.className = "scroll-progress";

document.body.appendChild(progressBar);


function updateScrollProgress() {

  const scrollTop = window.scrollY;

  const documentHeight =
    document.documentElement.scrollHeight -
    window.innerHeight;

  const progress =
    documentHeight > 0
      ? (scrollTop / documentHeight) * 100
      : 0;

  progressBar.style.width = `${progress}%`;

}

window.addEventListener("scroll", updateScrollProgress, {
  passive: true
});


/* =========================================================
   4. MODERN REVEAL ANIMATIONS
========================================================= */

const revealElements =
  document.querySelectorAll(".reveal");


const revealObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("active");

        // Optional: stop observing after animation

        revealObserver.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12,
    rootMargin: "0px 0px -60px 0px"
  }
);


revealElements.forEach((element) => {

  revealObserver.observe(element);

});


/* =========================================================
   5. MOUSE FOLLOWING AMBIENT LIGHT
========================================================= */

const ambientGlow = document.createElement("div");

ambientGlow.className = "ambient-glow";

document.body.appendChild(ambientGlow);


let mouseX = 0;
let mouseY = 0;

let glowX = 0;
let glowY = 0;


document.addEventListener("mousemove", (event) => {

  mouseX = event.clientX;
  mouseY = event.clientY;

});


function animateGlow() {

  glowX += (mouseX - glowX) * 0.08;
  glowY += (mouseY - glowY) * 0.08;

  ambientGlow.style.transform =
    `translate3d(${glowX}px, ${glowY}px, 0)`;

  requestAnimationFrame(animateGlow);

}

animateGlow();


/* =========================================================
   6. FUTURISTIC CURSOR GLOW
========================================================= */

const cursorGlow = document.createElement("div");

cursorGlow.className = "cursor-glow";

document.body.appendChild(cursorGlow);


document.addEventListener("mousemove", (event) => {

  cursorGlow.style.left =
    `${event.clientX}px`;

  cursorGlow.style.top =
    `${event.clientY}px`;

});


/* =========================================================
   7. MAGNETIC BUTTON EFFECT
========================================================= */

const magneticElements =
  document.querySelectorAll(
    ".btn, .button, .cta, button"
  );


magneticElements.forEach((element) => {

  element.addEventListener("mousemove", (event) => {

    const rect =
      element.getBoundingClientRect();

    const x =
      event.clientX -
      rect.left -
      rect.width / 2;

    const y =
      event.clientY -
      rect.top -
      rect.height / 2;


    element.style.transform =
      `translate(${x * 0.12}px, ${y * 0.12}px)`;

  });


  element.addEventListener("mouseleave", () => {

    element.style.transform =
      "translate(0, 0)";

  });

});


/* =========================================================
   8. GLASS CARD 3D TILT
========================================================= */

const glassCards =
  document.querySelectorAll(
    ".glass-card, .service-card, .portfolio-card, .card"
  );


glassCards.forEach((card) => {

  card.addEventListener("mousemove", (event) => {

    const rect =
      card.getBoundingClientRect();

    const x =
      event.clientX - rect.left;

    const y =
      event.clientY - rect.top;


    const centerX =
      rect.width / 2;

    const centerY =
      rect.height / 2;


    const rotateX =
      ((y - centerY) / centerY) * -4;

    const rotateY =
      ((x - centerX) / centerX) * 4;


    card.style.transform =
      `perspective(1000px)
       rotateX(${rotateX}deg)
       rotateY(${rotateY}deg)
       translateY(-6px)`;

  });


  card.addEventListener("mouseleave", () => {

    card.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";

  });

});


/* =========================================================
   9. SMOOTH ANCHOR SCROLL
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

  link.addEventListener("click", (event) => {

    const targetId =
      link.getAttribute("href");

    const target =
      document.querySelector(targetId);

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});


/* =========================================================
   10. PARALLAX EFFECT
========================================================= */

const parallaxElements =
  document.querySelectorAll(".parallax");


window.addEventListener("scroll", () => {

  const scrollY = window.scrollY;

  parallaxElements.forEach((element) => {

    const speed =
      element.dataset.speed || 0.15;

    element.style.transform =
      `translate3d(0, ${scrollY * speed}px, 0)`;

  });

}, {
  passive: true
});


/* =========================================================
   11. GLASS HIGHLIGHT FOLLOW MOUSE
========================================================= */

document.querySelectorAll(".glass-card").forEach((card) => {

  card.addEventListener("mousemove", (event) => {

    const rect =
      card.getBoundingClientRect();

    const x =
      event.clientX - rect.left;

    const y =
      event.clientY - rect.top;


    card.style.setProperty(
      "--mouse-x",
      `${x}px`
    );

    card.style.setProperty(
      "--mouse-y",
      `${y}px`
    );

  });

});


/* =========================================================
   12. ACTIVE NAVIGATION SECTION
========================================================= */

const sections =
  document.querySelectorAll("section[id]");

const navItems =
  document.querySelectorAll(
    '.nav-links a[href^="#"]'
  );


const sectionObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          navItems.forEach((link) => {

            link.classList.remove("active");

          });


          const activeLink =
            document.querySelector(
              `.nav-links a[href="#${entry.target.id}"]`
            );


          if (activeLink) {

            activeLink.classList.add("active");

          }

        }

      });

    },
    {
      threshold: 0.35
    }
  );


sections.forEach((section) => {

  sectionObserver.observe(section);

});


/* =========================================================
   13. REDUCED MOTION ACCESSIBILITY
========================================================= */

const prefersReducedMotion =
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );


if (prefersReducedMotion.matches) {

  document.documentElement.classList.add(
    "reduce-motion"
  );

}


/* =========================================================
   14. PAGE LOADED
========================================================= */

window.addEventListener("load", () => {

  document.body.classList.add("page-loaded");

});