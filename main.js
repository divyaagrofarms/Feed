// Mobile nav toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const mobileNav = document.querySelector(".mobile-nav");

  if (toggle && mobileNav) {
    toggle.addEventListener("click", () => {
      mobileNav.classList.toggle("open");
    });
  }

  // Fake form handler (prevents default submit)
  const enquiryForm = document.querySelector("#enquiryForm");
  if (enquiryForm) {
    enquiryForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you. Your enquiry has been recorded. Our team will reach out shortly.");
      enquiryForm.reset();
    });
  }
});
