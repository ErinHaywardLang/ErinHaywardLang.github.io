// Load footer HTML into all pages
async function loadFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (!footerPlaceholder) return;
    
    try {
        const response = await fetch('footer.html');
        const html = await response.text();
        footerPlaceholder.innerHTML = html;
    } catch (error) {
        console.error('Error loading footer:', error);
    }
}

// Load footer when DOM is ready
loadFooter();
