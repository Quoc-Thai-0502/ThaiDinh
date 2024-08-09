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
    const stars = document.querySelectorAll('.star-rating .star');
    const ratingInput = document.getElementById('ratingValue');
    const reviewForm = document.getElementById('reviewForm');
    const reviewsList = document.getElementById('reviewsList');

    // Star rating functionality
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = this.getAttribute('data-rating');
            ratingInput.value = rating;
            stars.forEach(s => s.classList.remove('active'));
            for (let i = 0; i < rating; i++) {
                stars[i].classList.add('active');
            }
        });
    });

    // Submit review
    reviewForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const rating = ratingInput.value;
        const name = document.getElementById('reviewerName').value;
        const text = document.getElementById('reviewText').value;

        if (rating && name && text) {
            addReview(rating, name, text);
            reviewForm.reset();
            stars.forEach(s => s.classList.remove('active'));
        }
    });

    function addReview(rating, name, text) {
      const reviewItem = document.createElement('div');
      reviewItem.className = 'review-item';
      const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
      reviewItem.innerHTML = `
          <div class="rating">${'★'.repeat(rating)}${'☆'.repeat(5-rating)}</div>
          <div class="reviewer-name">${name}</div>
          <div class="review-text">${text}</div>
          <div class="review-date">${date}</div>
      `;
      reviewsList.prepend(reviewItem);
  }
});