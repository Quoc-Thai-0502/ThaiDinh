document.addEventListener('DOMContentLoaded', function() {
    // Lấy các phần tử cần thiết
    const contactItems = document.querySelectorAll('.contact-item');
    const contactForm = document.querySelector('.contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const sendButton = document.querySelector('.btn-send-message');
    const emailLink = document.querySelector('.contact-item a[href^="mailto:"]');
  
    // Hàm kiểm tra xem phần tử có nằm trong viewport hay không
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    // Hàm xử lý khi scroll
    function handleScroll() {
      contactItems.forEach((item, index) => {
        if (isElementInViewport(item)) {
          setTimeout(() => {
            item.classList.add('fade-in');
          }, index * 200);
        }
      });
  
      if (isElementInViewport(contactForm)) {
        contactForm.classList.add('fade-in');
      }
    }
  
    // Thêm sự kiện scroll
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  
    // Xử lý gửi form
    sendButton.addEventListener('click', function(e) {
      e.preventDefault();
      const name = nameInput.value;
      const email = emailInput.value;
      const message = messageInput.value;
  
      // Gửi email
      window.location.href = `mailto:thaidinh23091@gmail.com?subject=Message from ${name}&body=${message}`;
  
      // Hiển thị thông báo
      alert('Your message has been sent successfully!');
  
      // Đặt lại form
      nameInput.value = '';
      emailInput.value = '';
      messageInput.value = '';
    });
  
    // Xử lý click vào email
    emailLink.addEventListener('click', function(e) {
      e.preventDefault();
      window.location.href = `mailto:thaidinh23091@gmail.com`;
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    // Lấy các phần tử cần thiết
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const sendButton = document.querySelector('.btn-send-message');
  
    // Xử lý gửi email
    sendButton.addEventListener('click', function(e) {
      e.preventDefault();
      const name = nameInput.value;
      const email = emailInput.value;
      const message = messageInput.value;
  
      // Gửi email sử dụng EmailJS
      emailjs.send('service_id', 'template_id', {
        from_name: name,
        from_email: email,
        message: message
      })
      .then(function(response) {
        console.log('Email sent successfully!', response.status, response.text);
        alert('Your message has been sent successfully!');
        
        // Đặt lại form
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
      },
      );
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reviewForm');
    const reviewsList = document.getElementById('reviewsList');
    const stars = document.querySelectorAll('.star-rating .star');
    const ratingValue = document.getElementById('ratingValue');

    // Xử lý sự kiện click cho star rating
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = this.getAttribute('data-rating');
            ratingValue.value = rating;
            updateStars(rating);
        });
    });

    // Hàm cập nhật hiển thị sao
    function updateStars(rating) {
        stars.forEach(star => {
            const starRating = star.getAttribute('data-rating');
            if (starRating <= rating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }

    // Xử lý sự kiện submit form
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Lấy giá trị từ form
        const rating = ratingValue.value;
        const name = document.getElementById('name').value;
        const reviewText = document.getElementById('reviewText').value;
        const date = new Date().toLocaleDateString();

        // Kiểm tra xem đã chọn số sao chưa
        if (!rating) {
            alert('Please select star rating.');
            return;
        }

        // Tạo phần tử đánh giá mới
        const newReview = document.createElement('div');
        newReview.className = 'review-item mb-4';
        newReview.innerHTML = `
            <div class="review-header">
                <span class="review-rating">${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}</span>
            </div>
            <div class="review-info">
                <span class="review-name"><strong>${name}</strong></span>
                <span class="review-date"><strong>${date}</strong></span>
            </div>
            <div class="review-content mt-2">${reviewText}</div>
        `;

        // Thêm đánh giá mới vào đầu danh sách
        reviewsList.insertBefore(newReview, reviewsList.firstChild);

        // Reset form
        form.reset();
        updateStars(0);
        ratingValue.value = '';
    });
});