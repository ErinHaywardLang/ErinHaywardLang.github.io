// Load navbar component
async function loadNavbar() {
    try {
        const response = await fetch('/components/navbar.html');
        const navbarHTML = await response.text();
        const placeholder = document.getElementById('navbar-placeholder');
        if (placeholder) {
            placeholder.innerHTML = navbarHTML;
            markActiveNavItem();
            // Notify that navbar is loaded
            document.dispatchEvent(new Event('navbarLoaded'));
        }
    } catch (error) {
        console.error('Failed to load navbar:', error);
    }
}

function markActiveNavItem() {
    const path = window.location.pathname;
    document.querySelectorAll('.nav-menu .nav-item').forEach(function(item) {
        const href = item.getAttribute('href');
        if (href === '/index.html') {
            if (path === '/' || path === '/index.html') {
                item.setAttribute('aria-current', 'page');
            }
        } else if (path.startsWith(href.replace(/\/$/, ''))) {
            item.setAttribute('aria-current', 'page');
        }
    });
}

loadNavbar();
