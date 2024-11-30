document.addEventListener("DOMContentLoaded", () => {
    const adminLoginBtn = document.getElementById("admin-login-btn");
    const modal = document.getElementById("admin-login-modal");
    const adminLoginForm = document.getElementById("admin-login-form");
  
    // Show the modal when the Admin Login button is clicked
    adminLoginBtn.addEventListener("click", () => {
      modal.classList.remove("hidden");
    });
  
    // Handle admin login form submission
    adminLoginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      // Predefined username and password
      const validUsername = "admin";
      const validPassword = "530500@#Gp";
  
      if (username === validUsername && password === validPassword) {
        window.location.href = "/admin";
      } else {
        alert("Invalid credentials. Please try again.");
      }
    });
  
    // Close modal on background click
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.classList.add("hidden");
      }
    });
  });
  