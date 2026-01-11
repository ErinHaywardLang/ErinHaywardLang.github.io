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
    
    // Start animation, bubbles, and light rays
    createLightRays();
    animate();
    startBubbles();
}

// Fish constructor
class Fish {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speedX = (Math.random() * 1.2 + 0.3) * (Math.random() > 0.5 ? 1 : -1); // 0.3-1.5 speed (slower)
        this.speedY = (Math.random() * 1.2 + 0.3) * (Math.random() > 0.5 ? 1 : -1); // 0.3-1.5 speed (slower)
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

// Bubble creation
function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    
    // Random position along the bottom
    const x = Math.random() * tankWidth;
    bubble.style.left = x + 'px';
    
    // Random size (6-12px)
    const size = Math.random() * 6 + 6;
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';
    
    // Random duration (3-6 seconds to rise)
    const duration = Math.random() * 3 + 3;
    bubble.style.animationDuration = duration + 's';
    
    tank.appendChild(bubble);
    
    // Remove bubble after animation
    setTimeout(() => {
        bubble.remove();
    }, duration * 1000);
}

// Start bubble generation
let bubbleInterval;
function startBubbles() {
    bubbleInterval = setInterval(() => {
        createBubble();
    }, 800); // New bubble every 800ms
}

// Light ray creation
function createLightRays() {
    // Create 3-5 light rays at random positions
    const numRays = Math.floor(Math.random() * 3) + 3;
    
    for (let i = 0; i < numRays; i++) {
        const ray = document.createElement('div');
        ray.className = 'light-ray';
        
        // Random horizontal position
        const x = Math.random() * tankWidth;
        ray.style.left = x + 'px';
        
        // Slight random rotation
        const rotation = (Math.random() * 10 - 5);
        ray.style.transform = `rotate(${rotation}deg)`;
        
        // Random animation delay for stagger effect
        ray.style.animationDelay = (Math.random() * 2) + 's';
        
        // Vary the animation duration slightly
        ray.style.animationDuration = (Math.random() * 2 + 3) + 's';
        
        tank.appendChild(ray);
    }
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
