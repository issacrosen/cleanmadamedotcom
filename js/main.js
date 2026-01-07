/**
 * Clean Madame LLC - Main JavaScript
 * Handles navigation, form validation, FAQ interactions, and other UI components
 */

document.addEventListener('DOMContentLoaded', function() {

    // Mobile Navigation Toggle
    initMobileNavigation();

    // Header scroll effect
    initHeaderScroll();

    // FAQ accordion functionality
    initFAQAccordion();

    // Booking form validation and submission
    initBookingForm();

    // Smooth scrolling for anchor links
    initSmoothScrolling();

});

/**
 * Mobile Navigation Toggle
 */
function initMobileNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');

            // Update ARIA attribute for accessibility
            const isExpanded = navMenu.classList.contains('active');
            navToggle.setAttribute('aria-expanded', isExpanded);
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnToggle = navToggle.contains(event.target);

            if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

/**
 * Header Scroll Effect
 */
function initHeaderScroll() {
    const header = document.getElementById('header');

    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}

/**
 * FAQ Accordion Functionality
 */
function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        if (question) {
            question.addEventListener('click', function() {
                // Close other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });

                // Toggle current item
                item.classList.toggle('active');
            });
        }
    });
}

/**
 * Booking Form Validation and Submission
 */
function initBookingForm() {
    const bookingForm = document.getElementById('bookingForm');

    if (bookingForm) {
        // Phone number formatting
        const phoneInput = document.getElementById('phone');
        if (phoneInput) {
            phoneInput.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length > 0) {
                    if (value.length <= 3) {
                        value = '(' + value;
                    } else if (value.length <= 6) {
                        value = '(' + value.slice(0, 3) + ') ' + value.slice(3);
                    } else {
                        value = '(' + value.slice(0, 3) + ') ' + value.slice(3, 6) + '-' + value.slice(6, 10);
                    }
                }
                e.target.value = value;
            });
        }

        // ZIP code validation
        const zipInput = document.getElementById('zipCode');
        if (zipInput) {
            zipInput.addEventListener('input', function(e) {
                e.target.value = e.target.value.replace(/\D/g, '').slice(0, 5);
            });
        }

        // Form submission
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Validate form
            if (!validateBookingForm()) {
                return false;
            }

            // Get form data
            const formData = new FormData(bookingForm);

            // In a real implementation, this would send data to a server
            // For this static site, we'll just show a success message
            console.log('Form submitted with data:', Object.fromEntries(formData));

            // Show success message
            showSuccessMessage();

            // Reset form
            bookingForm.reset();

            return false;
        });
    }
}

/**
 * Validate Booking Form
 */
function validateBookingForm() {
    const form = document.getElementById('bookingForm');
    let isValid = true;
    let firstError = null;

    // Clear previous error messages
    const errorMessages = form.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.remove());

    // Required fields validation
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            showFieldError(field, 'This field is required');
            isValid = false;
            if (!firstError) firstError = field;
        }
    });

    // Email validation
    const emailField = document.getElementById('email');
    if (emailField && emailField.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
            showFieldError(emailField, 'Please enter a valid email address');
            isValid = false;
            if (!firstError) firstError = emailField;
        }
    }

    // Phone validation
    const phoneField = document.getElementById('phone');
    if (phoneField && phoneField.value) {
        const phoneDigits = phoneField.value.replace(/\D/g, '');
        if (phoneDigits.length !== 10) {
            showFieldError(phoneField, 'Please enter a valid 10-digit phone number');
            isValid = false;
            if (!firstError) firstError = phoneField;
        }
    }

    // ZIP code validation
    const zipField = document.getElementById('zipCode');
    if (zipField && zipField.value) {
        if (zipField.value.length !== 5) {
            showFieldError(zipField, 'Please enter a valid 5-digit ZIP code');
            isValid = false;
            if (!firstError) firstError = zipField;
        }
    }

    // Terms agreement validation
    const termsCheckbox = document.getElementById('termsAgree');
    if (termsCheckbox && !termsCheckbox.checked) {
        showFieldError(termsCheckbox, 'You must agree to the Terms & Conditions');
        isValid = false;
        if (!firstError) firstError = termsCheckbox;
    }

    // Scroll to first error
    if (!isValid && firstError) {
        firstError.focus();
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    return isValid;
}

/**
 * Show field error message
 */
function showFieldError(field, message) {
    // Add error styling
    field.style.borderColor = '#ef4444';

    // Create error message element
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = '#ef4444';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    errorDiv.textContent = message;

    // Insert error message after field
    if (field.type === 'checkbox') {
        field.parentElement.parentElement.appendChild(errorDiv);
    } else {
        field.parentElement.appendChild(errorDiv);
    }

    // Remove error on input
    field.addEventListener('input', function removeError() {
        field.style.borderColor = '';
        const errorMsg = field.parentElement.querySelector('.error-message') ||
                        field.parentElement.parentElement.querySelector('.error-message');
        if (errorMsg) {
            errorMsg.remove();
        }
        field.removeEventListener('input', removeError);
    });
}

/**
 * Show success message after form submission
 */
function showSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    const formContainer = document.querySelector('.form-container');

    if (successMessage && formContainer) {
        // Hide form
        document.getElementById('bookingForm').style.display = 'none';

        // Show success message
        successMessage.style.display = 'block';

        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Reset after 10 seconds
        setTimeout(function() {
            successMessage.style.display = 'none';
            document.getElementById('bookingForm').style.display = 'block';
        }, 10000);
    }
}

/**
 * Smooth Scrolling for Anchor Links
 */
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Skip if it's just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();

                // Calculate offset for fixed header
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Utility: Debounce function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Add animation on scroll (optional enhancement)
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with animation class
    const animatedElements = document.querySelectorAll('.feature-card, .step, .testimonial-card');
    animatedElements.forEach(el => observer.observe(el));
}

// Optional: Call scroll animations if desired
// initScrollAnimations();
