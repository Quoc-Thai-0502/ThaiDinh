const title = "Dinh Quoc Thai";
let i = 0;
const subtitle = ""; // Nếu không có phụ đề, để rỗng hoặc xóa dòng này
const description = "I am Dinh Quoc Thai, a student majoring in software engineering with a deep passion for technology and creativity. With over two years of experience in the industry, I have had the opportunity to work on a variety of projects, from web application development to mobile application design. The ability to quickly adapt to new technologies and dedicated care in creating quality products are my strengths. I'm always looking for opportunities to learn and apply cutting-edge techniques to improve performance and user experience. For me, each project is not only a challenge but also an opportunity for self-discovery and development. If you have any questions or want to learn more about the projects I've worked on, contact me. I look forward to collaborating and creating great products together!";

const typingSound = new Audio('./Audio/gochu.mp3');
typingSound.volume = 0.5; // Adjust the volume if needed

let j = 0;
let k = 0;

function typeWriter() {
  const titleElement = document.getElementById("typing-title");
  const subtitleElement = document.getElementById("typing-subtitle");
  const descriptionElement = document.getElementById("typing-description");

  if (i < title.length) {
    titleElement.innerHTML += title.charAt(i);
    playTypingSound();
    i++;
    setTimeout(typeWriter, 100); // Adjust timing as needed
  } else if (j < subtitle.length) {
    subtitleElement.innerHTML += subtitle.charAt(j);
    playTypingSound();
    j++;
    setTimeout(typeWriter, 50); // Adjust timing as needed
  } else if (k < description.length) {
    if (k === 0) {
      descriptionElement.style.opacity = 1;
      descriptionElement.style.animation = 'none';
    }
    descriptionElement.innerHTML += description.charAt(k);
    playTypingSound();
    k++;
    setTimeout(typeWriter, 25); // Adjust timing as needed
  }
}

function playTypingSound() {
  if (typingSound) {
    typingSound.currentTime = 0;
    typingSound.play();
  }
}

window.onload = typeWriter;

// Particles.js configuration
particlesJS('particles-js', {
  particles: {
    number: { value: 100, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 10 } },
    opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
    size: { value: 9, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
    line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
    move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1500 } }
  },
  interactivity: {
    detect_on: "canvas",
    events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
    modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
  },
  retina_detect: true
});