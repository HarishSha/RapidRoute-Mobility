// Mobile nav toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navbarMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  navMenu.classList.toggle("is-active");
});

// Close nav on link click
document.querySelectorAll(".navbar-menu .navbar-item").forEach((a) => {
  a.addEventListener("click", () => {
    hamburger.classList.remove("is-active");
    navMenu.classList.remove("is-active");
  });
});

// Initialize EmailJS
const YOUR_PUBLIC_KEY = "YOUR_EMAILJS_PUBLIC_KEY"; // Replace with your EmailJS public key
emailjs.init(YOUR_PUBLIC_KEY);

// Form submit handler
function handleSubmit() {
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  // Validate required fields
  if (!fname || !email) {
    alert("Please fill in your first name and email address.");
    return;
  }

  // Show loading state
  const submitBtn = document.querySelector(".form-submit");
  const originalText = submitBtn.textContent;
  submitBtn.textContent = "Sending...";
  submitBtn.disabled = true;

  // Send email via EmailJS
  emailjs
    .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      // to_email: "info@rapidroutemobility.com",
      to_email: "harishk3499@gmail.com",
      from_name: fname + " " + lname,
      from_email: email,
      phone: phone,
      message: message,
    })
    .then(
      function (response) {
        alert(
          "Thank you for reaching out! Our team will contact you within 24 hours.",
        );
        // Reset form
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("message").value = "";
      },
      function (error) {
        alert(
          "Failed to send message. Please try again or contact us directly.",
        );
        console.error("EmailJS error:", error);
      },
    )
    .finally(() => {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    });
}

// Smooth nav highlight on scroll
const sections = document.querySelectorAll("section[id], div[id]");
const navLinks = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  navLinks.forEach((a) => {
    a.style.color =
      a.getAttribute("href") === "#" + current
        ? "var(--orange-light)"
        : "rgba(255,255,255,0.85)";
  });
});
