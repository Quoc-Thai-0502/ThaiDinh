document.addEventListener('DOMContentLoaded', function() {
    const contactItems = document.querySelectorAll('.contact-item');
    const contactForm = document.querySelector('.contact-form');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

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

    window.addEventListener('scroll', handleScroll);
    handleScroll();


    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
  

        console.log('Form submitted');
        console.log('Name:', document.getElementById('name').value);
        console.log('Email:', document.getElementById('email').value);
        console.log('Message:', document.getElementById('message').value);
        
   
        form.reset();
        
        alert('Your message has been sent successfully!');
    });
});




