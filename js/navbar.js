// Load navbar component
async function loadNavbar() {
    try {
        const response = await fetch('components/navbar.html');
        const navbarHTML = await response.text();
        const placeholder = document.getElementById('navbar-placeholder');
        if (placeholder) {
            placeholder.innerHTML = navbarHTML;
            // Notify that navbar is loaded
            document.dispatchEvent(new Event('navbarLoaded'));
        }
    } catch (error) {
        console.error('Failed to load navbar:', error);
    }
}

loadNavbar();
