/**
 * Navbar Component
 * 
 * Handles navbar behavior including:
 * - Scroll state
 * - Mobile menu toggle
 * - Smooth scrolling
 * - Active link highlighting
 */

/**
 * Initialize navbar functionality
 */
export function initNavbar() {
    const navbar = document.getElementById('main-navbar');
    const hamburger = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('main-menu');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    if (!navbar) return;
    
    // Scroll state handler
    handleNavbarScroll(navbar);
    
    // Mobile menu toggle
    if (hamburger && navMenu) {
        initHamburgerMenu(hamburger, navMenu);
    }
    
    // Smooth scrolling for navigation links
    if (navLinks.length > 0) {
        initSmoothScrolling(navLinks, navbar);
    }
    
    // Optional: Initialize dropdowns if they exist
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    if (dropdowns.length > 0) {
        initNavDropdowns(dropdowns);
    }
}

/**
 * Handle navbar appearance on scroll
 * @param {HTMLElement} navbar - The navbar element
 */
function handleNavbarScroll(navbar) {
    const scrollThreshold = 50; // Pixels to scroll before changing navbar style
    
    // Initial check (page might be loaded already scrolled)
    if (window.scrollY > scrollThreshold) {
        navbar.classList.add('scrolled');
    }
    
    // Listen for scroll events
    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { passive: true }); // Use passive listener for better performance
}

/**
 * Initialize hamburger menu functionality
 * @param {HTMLElement} hamburger - The hamburger button element
 * @param {HTMLElement} navMenu - The navigation menu element
 */
function initHamburgerMenu(hamburger, navMenu) {
    hamburger.addEventListener('click', () => {
        const isActive = hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', isActive ? 'true' : 'false');
        document.body.classList.toggle('menu-open', isActive); // Prevent body scrolling when menu is open
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (
            navMenu.classList.contains('active') && 
            !navMenu.contains(event.target) && 
            !hamburger.contains(event.target)
        ) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('menu-open');
        }
    });
    
    // Close menu when escape key is pressed
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('menu-open');
        }
    });
    
    // Close menu when navigation link is clicked
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('menu-open');
            }
        });
    });
}

/**
 * Initialize smooth scrolling for navigation links
 * @param {NodeList} navLinks - The navigation links
 * @param {HTMLElement} navbar - The navbar element
 */
function initSmoothScrolling(navLinks, navbar) {
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Prevent default anchor behavior
            event.preventDefault();
            
            // Get the target section
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Calculate offset (accounting for navbar height)
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;
                
                // Smooth scroll to target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without triggering scroll
                history.pushState(null, '', `#${targetId}`);
                
                // Update active link (optional if using scrollspy)
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
}

/**
 * Initialize dropdown menus for navbar (optional)
 * @param {NodeList} dropdowns - The dropdown menu containers
 */
function initNavDropdowns(dropdowns) {
    // For mobile: toggle dropdown menu on click
    const isMobile = window.innerWidth < 992;
    
    if (isMobile) {
        dropdowns.forEach(dropdown => {
            const dropdownToggle = dropdown.querySelector('a');
            
            if (dropdownToggle) {
                dropdownToggle.addEventListener('click', (event) => {
                    event.preventDefault();
                    dropdown.classList.toggle('active');
                    
                    // Close other dropdowns
                    dropdowns.forEach(otherDropdown => {
                        if (otherDropdown !== dropdown && otherDropdown.classList.contains('active')) {
                            otherDropdown.classList.remove('active');
                        }
                    });
                });
            }
        });
    } else {
        // For desktop: add accessibility features for keyboard users
        dropdowns.forEach(dropdown => {
            const dropdownToggle = dropdown.querySelector('a');
            const dropdownMenu = dropdown.querySelector('.nav-dropdown-menu');
            
            if (dropdownToggle && dropdownMenu) {
                // Add aria attributes
                dropdownToggle.setAttribute('aria-expanded', 'false');
                dropdownToggle.setAttribute('aria-haspopup', 'true');
                
                // Toggle on click
                dropdownToggle.addEventListener('click', (event) => {
                    event.preventDefault();
                    const expanded = dropdownToggle.getAttribute('aria-expanded') === 'true';
                    dropdownToggle.setAttribute('aria-expanded', !expanded);
                    
                    // Focus first item in dropdown when opened
                    if (!expanded) {
                        const firstItem = dropdownMenu.querySelector('a');
                        if (firstItem) {
                            setTimeout(() => {
                                firstItem.focus();
                            }, 10);
                        }
                    }
                });
                
                // Close dropdown when Escape is pressed
                dropdown.addEventListener('keydown', (event) => {
                    if (event.key === 'Escape' && dropdownToggle.getAttribute('aria-expanded') === 'true') {
                        dropdownToggle.setAttribute('aria-expanded', 'false');
                        dropdownToggle.focus();
                    }
                });
                
                // Close dropdown when clicking outside
                document.addEventListener('click', (event) => {
                    if (!dropdown.contains(event.target) && dropdownToggle.getAttribute('aria-expanded') === 'true') {
                        dropdownToggle.setAttribute('aria-expanded', 'false');
                    }
                });
            }
        });
    }
    
    // Update dropdown behavior when window is resized
    window.addEventListener('resize', () => {
        const isNowMobile = window.innerWidth < 992;
        
        if (isNowMobile !== isMobile) {
            // Reload page to reinitialize dropdown behavior
            // This is a simple approach; a more complex solution would remove/add event listeners
            window.location.reload();
        }
    });
}

/**
 * Check if element is in viewport
 * @param {HTMLElement} element - The element to check
 * @returns {boolean} - Whether the element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Export navbar module
export default {
    initNavbar,
    handleNavbarScroll,
    initHamburgerMenu,
    initSmoothScrolling,
    initNavDropdowns
};