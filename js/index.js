const title = "Đinh Quốc Thái";
let i = 0;
const subtitle = 0;
const description = "Tôi là Đinh Quốc Thái, sinh viên chuyên ngành kỹ sư phần mềm với đam mê sâu sắc đối với công nghệ và sáng tạo. Với hơn hai năm kinh nghiệm trong ngành, tôi đã có cơ hội làm việc trên nhiều dự án khác nhau, từ phát triển ứng dụng web đến thiết kế ứng dụng di động. Khả năng thích ứng nhanh chóng với các công nghệ mới và sự chăm sóc tận tâm trong việc tạo ra sản phẩm chất lượng là những điểm mạnh của tôi. Tôi luôn tìm kiếm những cơ hội để học hỏi và áp dụng các kỹ thuật tiên tiến nhằm cải thiện hiệu suất và trải nghiệm người dùng. Đối với tôi, mỗi dự án không chỉ là một thử thách mà còn là cơ hội để khám phá và phát triển bản thân. Nếu bạn có bất kỳ câu hỏi nào hoặc muốn tìm hiểu thêm về những dự án tôi đã thực hiện, hãy liên hệ với tôi. Tôi rất mong được hợp tác và cùng nhau tạo ra những sản phẩm tuyệt vời!";

let j = 0;
let k = 0;

function typeWriter() {
    const titleElement = document.getElementById("typing-title");
    const subtitleElement = document.getElementById("typing-subtitle");
    const descriptionElement = document.getElementById("typing-description");

    if (i < title.length) {
        titleElement.innerHTML += title.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    } else if (j < subtitle.length) {
        subtitleElement.innerHTML += subtitle.charAt(j);
        j++;
        setTimeout(typeWriter, 50);
    } else if (k < description.length) {
        if (k === 0) {
            descriptionElement.style.opacity = 1;
            descriptionElement.style.animation = 'none';
        }
        descriptionElement.innerHTML += description.charAt(k);
        k++;
        setTimeout(typeWriter, 20);
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
        move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } }
    },
    interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
        modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
    },
    retina_detect: true
});

