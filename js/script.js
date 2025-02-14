// Initialize AOS
AOS.init({ offset: 0 });

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
let isDark = true;


themeToggle.addEventListener('click', () => {
 isDark = !isDark;
 if (!isDark) {
   // Light mode
   document.documentElement.style.setProperty('--neon-blue', '#00bfff');
   document.documentElement.style.setProperty('--background-color', '#fff');
   document.documentElement.style.setProperty('--text-color', '#000');
   themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
 } else {
   // Dark mode
   document.documentElement.style.setProperty('--neon-blue', '#00bfff');
   document.documentElement.style.setProperty('--background-color', '#000');
   document.documentElement.style.setProperty('--text-color', '#fff');
   themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
 }
});



// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const linksContainer = document.querySelector('.links-container');

hamburger.addEventListener('click', () => {
  linksContainer.classList.toggle('open');
});

// Typewriter Effect 
const texts = [
  "Aspiring Software Developer",
];
const typewriterText = document.querySelector(".typewriter-text");
let currentIndex = 0;
let charIndex = 0;
let currentText = texts[currentIndex];
let typingTimer;

function type() {
  if (charIndex < currentText.length) {
    typewriterText.textContent += currentText.charAt(charIndex);
    charIndex++;
    typingTimer = setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typewriterText.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    typingTimer = setTimeout(erase, 50);
  } else {
    setTimeout(type, 500);
  }
}

// Start typewriter on page load
document.addEventListener("DOMContentLoaded", () => {
  type();
});

// Prevent URL hash changes
history.replaceState(null, null, " ");

// SMOOTH SCROLLING FOR NAVIGATION LINKS
document.querySelectorAll('.links a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80, 
          behavior: 'smooth'
        });
      }
    });
  });
  