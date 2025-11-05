/* ============================================
   RE.WIRE - Main JavaScript
   ============================================ */

(function() {
    'use strict';

    /* ============================================
       Mobile Navigation Toggle
       ============================================ */
    function initMobileNav() {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const navMenu = document.querySelector('.nav-menu');

        if (!mobileToggle || !navMenu) return;

        mobileToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';

            // Toggle aria-expanded
            this.setAttribute('aria-expanded', !isExpanded);

            // Toggle menu visibility
            navMenu.classList.toggle('active');

            // Prevent body scroll when menu is open
            document.body.style.overflow = isExpanded ? '' : 'hidden';
        });

        // Close mobile menu when clicking menu links
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileToggle.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                mobileToggle.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
                mobileToggle.focus();
            }
        });
    }

    /* ============================================
       Lazy Loading Images
       ============================================ */
    function initLazyLoading() {
        if ('loading' in HTMLImageElement.prototype) {
            // Browser supports native lazy loading
            const images = document.querySelectorAll('img[loading="lazy"]');
            images.forEach(img => {
                img.addEventListener('load', function() {
                    this.classList.add('loaded');
                });
            });
        } else {
            // Fallback to Intersection Observer
            const images = document.querySelectorAll('img[loading="lazy"]');

            if ('IntersectionObserver' in window) {
                const imageObserver = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const img = entry.target;
                            img.src = img.dataset.src;
                            img.classList.add('loaded');
                            imageObserver.unobserve(img);
                        }
                    });
                });

                images.forEach(img => imageObserver.observe(img));
            } else {
                // Load all images if no IntersectionObserver support
                images.forEach(img => {
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                });
            }
        }
    }

    /* ============================================
       Smooth Scroll for Anchor Links
       ============================================ */
    function initSmoothScroll() {
        // Check if user prefers reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) return;

        const anchorLinks = document.querySelectorAll('a[href^="#"]');

        anchorLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');

                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    e.preventDefault();

                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                    // Update focus for accessibility
                    targetElement.setAttribute('tabindex', '-1');
                    targetElement.focus();
                }
            });
        });
    }

    /* ============================================
       Form Validation & Enhancement
       ============================================ */
    function initFormEnhancements() {
        const forms = document.querySelectorAll('form');

        forms.forEach(form => {
            // Add novalidate to use custom validation
            form.setAttribute('novalidate', '');

            form.addEventListener('submit', function(e) {
                let isValid = true;
                const requiredFields = form.querySelectorAll('[required]');

                // Clear previous errors
                const previousErrors = form.querySelectorAll('.error-message');
                previousErrors.forEach(error => error.remove());

                requiredFields.forEach(field => {
                    field.classList.remove('error');

                    if (!field.value.trim()) {
                        isValid = false;
                        showFieldError(field, 'Dit veld is verplicht');
                    } else if (field.type === 'email' && !isValidEmail(field.value)) {
                        isValid = false;
                        showFieldError(field, 'Voer een geldig e-mailadres in');
                    }
                });

                if (!isValid) {
                    e.preventDefault();

                    // Focus on first error
                    const firstError = form.querySelector('.error');
                    if (firstError) {
                        firstError.focus();
                    }
                }
            });

            // Real-time validation on blur
            const inputs = form.querySelectorAll('input, textarea, select');
            inputs.forEach(input => {
                input.addEventListener('blur', function() {
                    validateField(this);
                });
            });
        });
    }

    function validateField(field) {
        const errorMessage = field.parentElement.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
        field.classList.remove('error');

        if (field.hasAttribute('required') && !field.value.trim()) {
            showFieldError(field, 'Dit veld is verplicht');
        } else if (field.type === 'email' && field.value && !isValidEmail(field.value)) {
            showFieldError(field, 'Voer een geldig e-mailadres in');
        }
    }

    function showFieldError(field, message) {
        field.classList.add('error');

        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.setAttribute('role', 'alert');

        field.parentElement.appendChild(errorDiv);
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    /* ============================================
       Analytics Event Tracking
       ============================================ */
    function initAnalytics() {
        // Track CTA button clicks
        const ctaButtons = document.querySelectorAll('.btn-primary');
        ctaButtons.forEach(button => {
            button.addEventListener('click', function() {
                const buttonText = this.textContent.trim();
                trackEvent('CTA Click', buttonText, window.location.pathname);
            });
        });

        // Track video plays
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
            video.addEventListener('play', function() {
                trackEvent('Video Play', this.getAttribute('poster') || 'Unknown Video', window.location.pathname);
            });
        });

        // Track form submissions
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', function() {
                const formName = this.getAttribute('name') || this.getAttribute('id') || 'Unknown Form';
                trackEvent('Form Submission', formName, window.location.pathname);
            });
        });
    }

    function trackEvent(category, action, label) {
        // Google Analytics 4
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                'event_category': category,
                'event_label': label
            });
        }

        // Console log for debugging
        console.log('Event Tracked:', { category, action, label });
    }

    /* ============================================
       Performance Monitoring
       ============================================ */
    function initPerformanceMonitoring() {
        // Check if Performance API is available
        if (!window.performance || !window.performance.getEntriesByType) return;

        // Log Core Web Vitals
        if ('PerformanceObserver' in window) {
            // Largest Contentful Paint (LCP)
            try {
                const lcpObserver = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    const lastEntry = entries[entries.length - 1];
                    console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
                });
                lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
            } catch (e) {
                console.log('LCP observation not supported');
            }

            // First Input Delay (FID) - now replaced by INP
            try {
                const fidObserver = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    entries.forEach((entry) => {
                        console.log('FID:', entry.processingStart - entry.startTime);
                    });
                });
                fidObserver.observe({ entryTypes: ['first-input'] });
            } catch (e) {
                console.log('FID observation not supported');
            }

            // Cumulative Layout Shift (CLS)
            try {
                let clsScore = 0;
                const clsObserver = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    entries.forEach((entry) => {
                        if (!entry.hadRecentInput) {
                            clsScore += entry.value;
                        }
                    });
                    console.log('CLS:', clsScore);
                });
                clsObserver.observe({ entryTypes: ['layout-shift'] });
            } catch (e) {
                console.log('CLS observation not supported');
            }
        }
    }

    /* ============================================
       Cookie Consent Handling
       ============================================ */
    function initCookieConsent() {
        // This will work with Cookiebot
        // Check if Cookiebot is loaded and consent is given
        window.addEventListener('CookiebotOnAccept', function() {
            console.log('Cookie consent accepted');

            // Initialize analytics if marketing cookies accepted
            if (Cookiebot.consent.marketing) {
                initAnalytics();
            }
        });

        window.addEventListener('CookiebotOnDecline', function() {
            console.log('Cookie consent declined');
        });
    }

    /* ============================================
       Testimonial Filter (for testimonials page)
       ============================================ */
    function initTestimonialFilters() {
        const filterButtons = document.querySelectorAll('[data-filter]');
        const testimonials = document.querySelectorAll('[data-category]');

        if (filterButtons.length === 0) return;

        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filterValue = this.getAttribute('data-filter');

                // Update active state
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                // Filter testimonials
                testimonials.forEach(testimonial => {
                    const categories = testimonial.getAttribute('data-category').split(' ');

                    if (filterValue === 'all' || categories.includes(filterValue)) {
                        testimonial.style.display = '';
                        testimonial.setAttribute('aria-hidden', 'false');
                    } else {
                        testimonial.style.display = 'none';
                        testimonial.setAttribute('aria-hidden', 'true');
                    }
                });
            });
        });
    }

    /* ============================================
       Initialize All Functions
       ============================================ */
    function init() {
        initMobileNav();
        initLazyLoading();
        initSmoothScroll();
        initFormEnhancements();
        initCookieConsent();
        initTestimonialFilters();

        // Only initialize performance monitoring in development
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            initPerformanceMonitoring();
        }

        console.log('RE.WIRE website initialized');
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
