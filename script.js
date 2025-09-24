// Smooth scrolling function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Form handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reservationForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const terms = formData.get('terms');

            // Basic validation
            if (!name || !email || !phone || !terms) {
                alert('Prosím vyplňte všetky povinné polia a súhlaste s podmienkami.');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Prosím zadajte platnú emailovú adresu.');
                return;
            }

            // Phone validation (basic)
            const phoneRegex = /^[\+]?[0-9\s\-\(\)]{9,}$/;
            if (!phoneRegex.test(phone)) {
                alert('Prosím zadajte platné telefónne číslo.');
                return;
            }

            // Submit form to server
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Odosielam...';
            submitButton.disabled = true;

            // Send data to server
            fetch('/submit-reservation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    phone: phone,
                    terms: terms
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Hide form and show confirmation
                    form.style.display = 'none';
                    confirmationMessage.style.display = 'block';
                    
                    // Reset form for potential reuse
                    form.reset();
                } else {
                    alert('Nastala chyba pri odosielaní formulára. Skúste to prosím znovu.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Nastala chyba pri odosielaní formulára. Skúste to prosím znovu.');
            })
            .finally(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            });
        });
    }

    // Add scroll effect to navigation with boundaries
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const heroHeight = hero ? hero.offsetHeight : 0;
        
        if (hero && scrolled > 0 && scrolled < heroHeight) {
            // Limit parallax effect to hero section only
            const parallaxOffset = Math.min(scrolled * 0.3, heroHeight * 0.3);
            hero.style.transform = `translateY(${parallaxOffset}px)`;
        } else if (hero && scrolled >= heroHeight) {
            // Stop parallax when scrolled past hero
            hero.style.transform = `translateY(${heroHeight * 0.3}px)`;
        } else if (hero) {
            // Reset when at top
            hero.style.transform = 'translateY(0px)';
        }
    });

    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections for animation
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Add hover effects to feature items
    const featureItems = document.querySelectorAll('.feature-item, .experience-item');
    featureItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click tracking for analytics (placeholder)
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('cta-button')) {
            // Track CTA button clicks
            console.log('CTA button clicked:', e.target.textContent);
        }
        
        if (e.target.closest('.social-icons a')) {
            // Track social media clicks
            console.log('Social media link clicked');
        }
    });

    // Add form field focus effects
    const formInputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"]');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';
});

// Initialize body opacity
document.body.style.opacity = '0';
