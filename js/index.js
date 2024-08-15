const title = "Dinh Quoc Thai";
let i = 0;
const subtitle = ""; // Nếu không có phụ đề, để rỗng hoặc xóa dòng này
const description = "I am Dinh Quoc Thai, a software engineering student with a deep passion for technology and creativity. With over two years of experience in the industry, I have had the opportunity to work on a variety of projects ranging from web application development to mobile application design. The ability to quickly adapt to new technologies and take dedicated care in creating quality products are my strengths. I'm always looking for opportunities to learn and apply cutting-edge techniques to improve performance and user experience. For me, each project is not only a challenge but also an opportunity for self-discovery and development. If you have any questions or want to learn more about the projects I've worked on, contact me. I look forward to collaborating and creating great products together!";

let j = 0;
let k = 0;

function typeWriter() {
    const titleElement = document.getElementById("typing-title");
    const subtitleElement = document.getElementById("typing-subtitle");
    const descriptionElement = document.getElementById("typing-description");

    if (i < title.length) {
        titleElement.innerHTML += title.charAt(i);
        i++;
        setTimeout(typeWriter, 100); // Điều chỉnh thời gian như cần
    } else if (j < subtitle.length) {
        subtitleElement.innerHTML += subtitle.charAt(j);
        j++;
        setTimeout(typeWriter, 50); // Điều chỉnh thời gian như cần
    } else if (k < description.length) {
        if (k === 0) {
            descriptionElement.style.opacity = 1;
            descriptionElement.style.animation = 'none';
        }
        descriptionElement.innerHTML += description.charAt(k);
        k++;
        setTimeout(typeWriter, 25); // Điều chỉnh thời gian như cần
    }
}


// Đảm bảo hàm typeWriter được gọi khi cửa sổ tải
window.onload = typeWriter;



// Particles.js configuration
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": false,
          "value_area": 800
        }
      },
      "color": {
        "value": "#f1f1f1" // Màu trắng sáng cho hạt
      },
      "shape": {
        "type": "star", // Kiểu hình dạng là ngôi sao
        "stroke": {
          "width": 0,
          "color": "#ffffff"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "http://wiki.lexisnexis.com/academic/images/f/fb/Itunes_podcast_icon_300.jpg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 10, // Tăng độ mờ lên 1 để làm cho hạt rõ ràng nhất có thể
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0, // Độ mờ tối thiểu là 1
          "sync": false
        }
      },
      "size": {
        "value": 14, // Tăng kích thước của hạt
        "random": true,
        "anim": {
          "enable": false,
          "speed": 100,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 7, // Giảm tốc độ di chuyển để hạt dễ thấy hơn
        "direction": "left",
        "random": false,
        "straight": true,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 200,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  

  