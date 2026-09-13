// Load contact section HTML into pages
async function loadContact() {
    const contactPlaceholder = document.getElementById('contact-placeholder');
    if (!contactPlaceholder) return;

    try {
        const response = await fetch('/components/contact.html');
        const html = await response.text();
        contactPlaceholder.innerHTML = html;
    } catch (error) {
        console.error('Error loading contact section:', error);
    }
}

loadContact();