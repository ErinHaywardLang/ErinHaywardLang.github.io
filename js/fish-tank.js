// Virtual Fish Tank Logic
const tank = document.getElementById('fish-tank');
const fishCountDisplay = document.getElementById('fishCount');
const addFishBtn = document.getElementById('addFishBtn');
const clearTankBtn = document.getElementById('clearTankBtn');

let fishes = [];
let tankWidth, tankHeight;
let animationId;

// Fish types with emojis
const fishTypes = ['🐠', '🐟', '🐡', '🦈', '🐙', '🦑', '🦐', '🦞'];

// Initialize tank dimensions
function initTank() {
    if (!tank) {
        console.error('Fish tank element not found');
        return;
    }
    
    const rect = tank.getBoundingClientRect();
    tankWidth = rect.width;
    tankHeight = rect.height;
    
    console.log('Tank initialized:', tankWidth, 'x', tankHeight);
    
    // Add some initial fish
    for (let i = 0; i < 5; i++) {
        addFish(Math.random() * tankWidth, Math.random() * tankHeight);
    }
    
    // Start animation
    animate();
}

// Fish constructor
class Fish {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speedX = (Math.random() * 2 + 0.5) * (Math.random() > 0.5 ? 1 : -1); // 0.5-2.5 speed
        this.speedY = (Math.random() * 2 + 0.5) * (Math.random() > 0.5 ? 1 : -1); // 0.5-2.5 speed
        this.direction = this.speedX > 0 ? 1 : -1;
        this.emoji = fishTypes[Math.floor(Math.random() * fishTypes.length)];
        this.size = Math.random() * 20 + 25; // 25-45px
        this.element = this.createElement();
    }
    
    createElement() {
        const fishEl = document.createElement('div');
        fishEl.className = 'fish';
        fishEl.textContent = this.emoji;
        fishEl.style.fontSize = this.size + 'px';
        fishEl.style.left = this.x + 'px';
        fishEl.style.top = this.y + 'px';
        
        // Flip fish based on direction
        if (this.direction === -1) {
            fishEl.style.transform = 'scaleX(-1)';
        }
        
        tank.appendChild(fishEl);
        return fishEl;
    }
    
    update() {
        // Move fish
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Bounce off walls (horizontal) and keep fish inside tank
        if (this.x <= 0) {
            this.x = 0;
            this.speedX = Math.abs(this.speedX); // Ensure positive direction
            this.direction = 1;
            this.element.style.transform = 'scaleX(1)';
        } else if (this.x >= tankWidth - this.size) {
            this.x = tankWidth - this.size;
            this.speedX = -Math.abs(this.speedX); // Ensure negative direction
            this.direction = -1;
            this.element.style.transform = 'scaleX(-1)';
        }
        
        // Bounce off top/bottom (vertical) and keep fish inside tank
        if (this.y <= 0) {
            this.y = 0;
            this.speedY = Math.abs(this.speedY);
        } else if (this.y >= tankHeight - this.size) {
            this.y = tankHeight - this.size;
            this.speedY = -Math.abs(this.speedY);
        }
        
        // Update position
        this.element.style.left = this.x + 'px';
        this.element.style.top = this.y + 'px';
    }
    
    remove() {
        this.element.remove();
    }
}

// Add a new fish at specific coordinates
function addFish(x, y) {
    const fish = new Fish(x, y);
    fishes.push(fish);
    updateFishCount();
}

// Animation loop
function animate() {
    fishes.forEach(fish => fish.update());
    animationId = requestAnimationFrame(animate);
}

// Update fish counter
function updateFishCount() {
    fishCountDisplay.textContent = `Fish: ${fishes.length}`;
}

// Clear all fish
function clearTank() {
    fishes.forEach(fish => fish.remove());
    fishes = [];
    updateFishCount();
}

// Event Listeners
if (tank) {
    tank.addEventListener('click', function(e) {
        const rect = tank.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        addFish(x, y);
    });
}

if (addFishBtn) {
    addFishBtn.addEventListener('click', function() {
        addFish(Math.random() * tankWidth, Math.random() * tankHeight);
    });
}

if (clearTankBtn) {
    clearTankBtn.addEventListener('click', clearTank);
}

// Handle window resize
window.addEventListener('resize', function() {
    const rect = tank.getBoundingClientRect();
    tankWidth = rect.width;
    tankHeight = rect.height;
});

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTank);
} else {
    initTank();
}
