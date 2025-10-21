// Display current time in a readable format and keep it updated
document.addEventListener("DOMContentLoaded", () => {
  const userTime = document.getElementById("user-time");
  if (userTime) {
    // show a human-readable time and update every second
    const updateTime = () => {
      userTime.textContent = new Date().toLocaleString();
    };
    updateTime();
    // keep the timestamp live (1s)
    const timeInterval = setInterval(updateTime, 1000);

  }

  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const subject = document.getElementById("subject");
      const message = document.getElementById("message");
      const success = document.getElementById("success-message");

      let valid = true;

      // Name validation
      if (!name.value.trim()) {
        document.getElementById("error-name").textContent = "Full name is required.";
        valid = false;
      } else document.getElementById("error-name").textContent = "";

      // Email validation
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.value.match(emailPattern)) {
        document.getElementById("error-email").textContent = "Please enter a valid email.";
        valid = false;
      } else document.getElementById("error-email").textContent = "";

      // Subject validation
      if (!subject.value.trim()) {
        document.getElementById("error-subject").textContent = "Subject is required.";
        valid = false;
      } else document.getElementById("error-subject").textContent = "";

      // Message validation
      if (message.value.trim().length < 10) {
        document.getElementById("error-message").textContent = "Message must be at least 10 characters.";
        valid = false;
      } else document.getElementById("error-message").textContent = "";

      // Show success message
      if (valid) {
        success.classList.remove("hidden");
        form.reset();
      } else {
        success.classList.add("hidden");
      }
    });
  }
});
