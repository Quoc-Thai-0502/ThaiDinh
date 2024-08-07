// Kiểm tra và áp dụng chế độ từ localStorage
const currentTheme = localStorage.getItem('theme') || 'light-mode';
document.querySelector('.navbar').classList.add(currentTheme);

if (currentTheme === 'dark-mode') {
  document.getElementById('checkbox').checked = true;
}

// Xử lý sự kiện chuyển đổi
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
  const navbar = document.querySelector('.navbar');
  if (e.target.checked) {
    navbar.classList.remove('light-mode');
    navbar.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark-mode');
  } else {
    navbar.classList.remove('dark-mode');
    navbar.classList.add('light-mode');
    localStorage.setItem('theme', 'light-mode');
  }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

// Thêm hiệu ứng mượt mà khi chuyển đổi
document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelector('.navbar').style.transition = 'background-color 0.3s ease, color 0.3s ease';
});