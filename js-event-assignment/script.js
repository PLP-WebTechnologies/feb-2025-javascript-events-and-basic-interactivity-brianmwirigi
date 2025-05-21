// Event Handling 🎈
document.getElementById("changeBtn").addEventListener("click", () => {
    document.body.style.backgroundColor = "#fef9ef";
    document.getElementById("changeBtn").textContent = "Clicked!";
  });
  
  document.getElementById("changeBtn").addEventListener("dblclick", () => {
    alert("🎉 Secret double-click revealed!");
  });
  
  document.addEventListener("keypress", (e) => {
    console.log(`You pressed: ${e.key}`);
  });
  
  // Image Gallery
  const images = [
    "https://via.placeholder.com/300/FFB6C1",
    "https://via.placeholder.com/300/87CEFA",
    "https://via.placeholder.com/300/90EE90"
  ];
  let currentImage = 0;
  
  document.getElementById("nextImageBtn").addEventListener("click", () => {
    currentImage = (currentImage + 1) % images.length;
    document.getElementById("galleryImage").src = images[currentImage];
  });
  
  // Tabs
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");
  
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      contents.forEach(content => content.classList.add("hidden"));
      document.getElementById(tab.dataset.target).classList.remove("hidden");
    });
  });
  
  // Form Validation 📋✅
  document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
  
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("formMessage");
  
    if (!email.includes("@")) {
      message.textContent = "Please enter a valid email.";
      return;
    }
  
    if (password.length < 8) {
      message.textContent = "Password must be at least 8 characters.";
      return;
    }
  
    message.textContent = "✅ Form submitted successfully!";
  });
  
  // Real-time Feedback
  document.getElementById("password").addEventListener("input", () => {
    const pwd = document.getElementById("password").value;
    const msg = document.getElementById("formMessage");
    if (pwd.length < 8) {
      msg.textContent = "Password too short!";
    } else {
      msg.textContent = "";
    }
  });