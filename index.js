// Main script loader - dynamically loads all JavaScript modules
(function() {
    const scripts = ['/js/navbar.js', '/js/footer.js', '/js/glitter.js'];
    
    scripts.forEach(function(src) {
        const script = document.createElement('script');
        script.src = src;
        script.defer = true;
        document.head.appendChild(script);
    });
})();
