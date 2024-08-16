const title = "Hi, I'm ThaiDinh";
const subtitle = "Software Engineering Student";
const description = "I am a software engineering student with a deep passion for technology and creativity. With over two years of industry experience, I've worked on various projects from web to mobile application development. My strengths lie in quick adaptation to new technologies and dedication to creating quality products. I constantly seek opportunities to learn and apply cutting-edge techniques to enhance performance and user experience. Each project is both a challenge and an opportunity for growth. Feel free to contact me for any inquiries or potential collaborations. Let's create great products together!";

let titleIndex = 0;
let subtitleIndex = 0;
let descriptionIndex = 0;

function typeWriter() {
    const titleElement = document.getElementById("typing-title");
    const subtitleElement = document.getElementById("typing-subtitle");
    const descriptionElement = document.getElementById("typing-description");

    if (titleIndex < title.length) {
        titleElement.innerHTML += title.charAt(titleIndex);
        titleIndex++;
        setTimeout(typeWriter, 100);
    } else if (subtitleIndex < subtitle.length) {
        subtitleElement.innerHTML += subtitle.charAt(subtitleIndex);
        subtitleElement.style.opacity = 1;
        subtitleIndex++;
        setTimeout(typeWriter, 50);
    } else if (descriptionIndex < description.length) {
        if (descriptionIndex === 0) {
            descriptionElement.style.opacity = 1;
            descriptionElement.style.animation = 'none';
        }
        descriptionElement.innerHTML += description.charAt(descriptionIndex);
        descriptionIndex++;
        setTimeout(typeWriter, 20);
    }
}

// Thêm CSS để tạo kiểu chữ chuyên nghiệp và căn trái chữ
const style = document.createElement('style');
style.textContent = `
       #typing-title {
        text-align: left;
        font-size: 2.5em;
        font-weight: 700;
        margin-top: 20px;
        color: #E2E2E2;
    }

    #typing-title span {
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        font-weight: 800;
        font-style: italic ;
    }
    body {
        font-family: 'Roboto', 'Palatino', 'Arial', sans-serif;
        line-height: 1.6;
        color: #ffffff;
        background-color: #E2E2E2;
        margin: 0;
        padding-top: 20px;
        display: flex;
        justify-content: center;
    }
    .main-container {
        display: flex;
        max-width: 1200px;
        width: 100%;
    }
    .image-container {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }
    .text-container {
        flex: 1;
        text-align: left;
        padding-left: 50px;
    }
    #typing-title {
        text-align: left;
        font-size: 2.5em;
        font-weight: 700;
        margin-top: 20px;
        color: #E2E2E2;
    }
    #typing-subtitle {
        text-align: left;
        font-size: 1.5em;
        font-weight: 300;
        margin-top: 20px;
        color: #f1f1f1;
        opacity: 0;
        transition: opacity 0.1s ease-in-out;
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
    
    }
    #typing-description {
        text-align: left;
        font-size: 1em;
        line-height: 1,8;
        color: #f1f1f1;
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
    }
`;
document.head.appendChild(style);

// Bắt đầu hiệu ứng gõ chữ khi trang được tải
window.onload = function() {
    // Tạo main container
    const mainContainer = document.createElement('div');
    mainContainer.className = 'main-container';
    
    // Tạo image container
    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';
    const img = document.createElement('img');
    imageContainer.appendChild(img);
    
    // Tạo text container
    const textContainer = document.createElement('div');
    textContainer.className = 'text-container';
    
    // Tạo và thêm các phần tử văn bản vào text container
    const titleElement = document.createElement('div');
    titleElement.id = 'typing-title';
    textContainer.appendChild(titleElement);

    const subtitleElement = document.createElement('div');
    subtitleElement.id = 'typing-subtitle';
    textContainer.appendChild(subtitleElement);

    const descriptionElement = document.createElement('div');
    descriptionElement.id = 'typing-description';
    textContainer.appendChild(descriptionElement);

    // Thêm image container và text container vào main container
    mainContainer.appendChild(imageContainer);
    mainContainer.appendChild(textContainer);

    // Thêm main container vào body
    document.body.appendChild(mainContainer);

    // Bắt đầu hiệu ứng gõ chữ
    typeWriter();
};


// Particles.js configuration
particlesJS('particles-js', {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 5 } },
    opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
    size: { value: 5, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
    line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
    move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } }
  },
  interactivity: {
    detect_on: "canvas",
    events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
    modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
  },
  retina_detect: true
});