const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const signupForm = document.querySelector(".signup-card");
const authForms = document.querySelectorAll(".auth-form");

navToggle?.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".site-nav a, .header-actions a").forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

signupForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = signupForm.querySelector("button");
  button.textContent = "Interest Recorded";
  button.disabled = true;
});

authForms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = form.querySelector("button");
    const isRegister = form.classList.contains("register-form");
    button.textContent = isRegister ? "Pendaftaran Terekam" : "Login Diproses";
    button.disabled = true;
  });
});

const revealTargets = [
  ".home-about",
  ".about-profile",
  ".vision-mission",
  ".org-section",
  ".about-values",
  ".about-platform",
  ".listing-section",
  ".contact-section",
  ".map-section",
  ".director-quote",
  ".benefit-section",
  ".home-showcase",
  ".cert-section",
  ".article-section",
  ".partner-section",
  ".faq-section",
  ".register-section",
  ".auth-card",
  ".auth-intro",
  ".dashboard-hero",
  ".admin-hero",
  ".dashboard-stats article",
  ".admin-stats article",
  ".dashboard-panel",
  ".admin-panel",
  ".benefit-card-grid article",
  ".event-preview-grid article",
  ".home-cert-grid .cert-card",
  ".article-grid article",
  ".partner-grid article",
  ".faq-list details",
];

const revealElements = document.querySelectorAll(revealTargets.join(","));

revealElements.forEach((element, index) => {
  element.classList.add("reveal");
  element.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 0.06}s`);
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}
