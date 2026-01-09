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
