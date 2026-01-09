// Glitter cursor effect - throttled to control density
let lastSparkle = 0;
document.addEventListener('mousemove', function(e) {
    const now = Date.now();
    if (now - lastSparkle < 30) return; // Only sparkle every 30ms
    lastSparkle = now;
    
    createSparkle(e.pageX, e.pageY);
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    
    const size = Math.random() * 8 + 10;
    sparkle.style.width = size + 'px';
    sparkle.style.height = size + 'px';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    
    const colors = ['#FFD700', '#FFC0CB', '#87CEEB', '#98FB98', '#DDA0DD', '#F0E68C', '#FFFFFF'];
    sparkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

// Profile icon heart animation
document.addEventListener('DOMContentLoaded', function() {
    const profileIcon = document.querySelector('.profile-icon');
    
    if (profileIcon) {
        profileIcon.style.cursor = 'pointer';
        
        profileIcon.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const topY = rect.top + rect.height * 0.25; // Top quarter of the icon
            
            // Create 3-5 hearts for a nice effect
            const heartCount = Math.floor(Math.random() * 3) + 3;
            for (let i = 0; i < heartCount; i++) {
                setTimeout(() => {
                    createHeart(centerX, topY);
                }, i * 100);
            }
        });
    }
});

function createHeart(x, y) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = '💚';
    
    // Random horizontal offset
    const offsetX = (Math.random() - 0.5) * 60;
    heart.style.left = (x + offsetX) + 'px';
    heart.style.top = y + 'px';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 2000);
}
