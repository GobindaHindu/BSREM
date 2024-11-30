document.addEventListener("DOMContentLoaded", function () {
  console.log("Smooth scroll script loaded");

  // Check if there's a hash in the URL and if we are on the home page
  const hash = window.location.hash;
  console.log("Hash in URL:", hash);
  if (hash) {
    const targetSection = document.querySelector(hash);
    console.log("Target section:", targetSection);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
      console.log("Scrolled to section:", hash);
    } else {
      console.log("No target section found for hash:", hash);
    }
  }

  // Handle clicks on links with class "scroll-link"
  document.querySelectorAll(".scroll-link").forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const sectionId = this.getAttribute("href");
      console.log("Section ID to scroll to:", sectionId);

      // Check if the link is pointing to the home page
      if (sectionId.startsWith("/#")) {
        if (window.location.pathname !== "/") {
          // If not on home page, go to home with section ID
          window.location.href = sectionId;
        } else {
          // If on home page, smooth scroll to the section
          const section = document.querySelector(sectionId.replace("/", ""));
          if (section) {
            history.pushState(null, null, sectionId);
            section.scrollIntoView({ behavior: "smooth" });
          } else {
            console.log("No section found for ID:", sectionId);
          }
        }
      }
    });
  });
});
