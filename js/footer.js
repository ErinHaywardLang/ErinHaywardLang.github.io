// Load footer HTML into all pages
async function loadFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (!footerPlaceholder) return;
    
    try {
        const response = await fetch('components/footer.html');
        const html = await response.text();
        footerPlaceholder.innerHTML = html;
        
        // Dispatch event to notify footer is loaded
        document.dispatchEvent(new Event('footerLoaded'));
    } catch (error) {
        console.error('Error loading footer:', error);
    }
}

// Load footer when DOM is ready
loadFooter();
