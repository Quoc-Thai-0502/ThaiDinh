document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const heroTitle = document.querySelector('#hero h1');
    const heroSubtitle = document.querySelector('#hero p');


    heroTitle.style.opacity = '0';
    heroSubtitle.style.opacity = '0';
    
    setTimeout(() => {
        heroTitle.style.transition = 'opacity 1s, transform 1s';
        heroTitle.style.opacity = '1';
        heroTitle.style.transform = 'translateY(0)';
    }, 500);

    setTimeout(() => {
        heroSubtitle.style.transition = 'opacity 1s, transform 1s';
        heroSubtitle.style.opacity = '1';
        heroSubtitle.style.transform = 'translateY(0)';
    }, 1000);


    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function showVisibleItems() {
        timelineItems.forEach((item, index) => {
            if (isElementInViewport(item)) {
                setTimeout(() => {
                    item.classList.add('show');
                    item.style.transitionDelay = `${index * 0.2}s`;
                }, 100);
            }
        });
    }

    window.addEventListener('scroll', showVisibleItems);
    window.addEventListener('resize', showVisibleItems);
    showVisibleItems();


    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        document.querySelector('.timeline').style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    });


    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });


    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.05)';
            item.style.transition = 'transform 0.3s ease';
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
        });
    });


    const sectionTitle = document.querySelector('.section-title');
    const originalText = sectionTitle.textContent;
    sectionTitle.textContent = '';

    function typeWriter(text, i) {
        if (i < text.length) {
            sectionTitle.textContent += text.charAt(i);
            i++;
            setTimeout(() => typeWriter(text, i), 100);
        }
    }


    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                typeWriter(originalText, 0);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(sectionTitle);
});



