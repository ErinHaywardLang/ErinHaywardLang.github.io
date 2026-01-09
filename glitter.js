// Glitter cursor effect
document.addEventListener('mousemove', function(e) {
    // Create sparkle element
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    
    // Random size between 3-8px
    const size = Math.random() * 5 + 3;
    sparkle.style.width = size + 'px';
    sparkle.style.height = size + 'px';
    
    // Position at cursor
    sparkle.style.left = e.pageX + 'px';
    sparkle.style.top = e.pageY + 'px';
    
    // Random colors - mix of sparkly colors
    const colors = ['#FFD700', '#FFC0CB', '#87CEEB', '#98FB98', '#DDA0DD', '#F0E68C'];
    sparkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    document.body.appendChild(sparkle);
    
    // Remove after animation completes
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
});

// Throttle the effect - only create sparkle every few pixels moved
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
    
    const size = Math.random() * 5 + 3;
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
