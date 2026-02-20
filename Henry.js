// ============================================
// HAMBURGER MENU FUNCTIONALITY
// ============================================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
}

// Close menu when a link is clicked
const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// ============================================
// CONTACT FORM HANDLING
// ============================================
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const inquiryType = document.getElementById('inquiry-type').value;
        const message = document.getElementById('message').value.trim();
        
        // Basic validation
        if (!name || !email || !inquiryType || !message) {
            showFormMessage('Please fill out all required fields.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission (in a real scenario, this would send to a backend)
        const formData = {
            name: name,
            email: email,
            phone: phone,
            inquiryType: inquiryType,
            message: message,
            isPaidOpportunity: document.getElementById('budget').checked,
            timestamp: new Date().toISOString()
        };
        
        // Log form data (for demonstration)
        console.log('Form submitted with data:', formData);
        
        // Show success message
        showFormMessage('Thank you for reaching out! I\'ll get back to you soon.', 'success');
        
        // Reset form
        contactForm.reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.classList.remove('success');
            formMessage.innerHTML = '';
        }, 5000);
    });
}

function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = 'form-message ' + type;
}
