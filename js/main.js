// Mobile nav toggle
const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");
hamburger.addEventListener("click", () => {
  navbar.classList.toggle("nav-mobile-open");
});

// Close nav on link click
document.querySelectorAll(".nav-links a").forEach((a) => {
  a.addEventListener("click", () => navbar.classList.remove("nav-mobile-open"));
});

// Form submit handler
function handleSubmit() {
  const email = document.getElementById("email").value;
  const name = document.getElementById("fname").value;
  if (!name || !email) {
    alert("Please fill in your name and email address.");
    return;
  }
  alert(
    "Thank you for reaching out! Our team will contact you within 24 hours.",
  );
}

// Smooth nav highlight on scroll
const sections = document.querySelectorAll("section[id], div[id]");
const navLinks = document.querySelectorAll(".nav-links a");
// Combine both scroll listeners into one
window.addEventListener("scroll", () => {
  // Navbar background
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Active link
  let current = "";
  sections.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });

  navLinks.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
});
