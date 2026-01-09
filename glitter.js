// Glitter cursor effect - throttled to control density
let lastSparkle = 0;

// Secret console messages for curious developers
console.log('%c✨ Hello fellow developer! ✨', 'font-size: 20px; color: #FFD700; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);');
console.log('%cWelcome to my sparkly corner of the internet! 💖', 'font-size: 14px; color: #FF69B4;');
console.log('%cI see you\'re inspecting the code... I like your style! 😎', 'font-size: 12px; color: #87CEEB;');
console.log('%cFun fact: This site has ' + '%c' + (30 * 60 * 5) + '%c sparkles per minute if you move your mouse constantly! ⭐', 'color: #98FB98;', 'color: #FFD700; font-weight: bold;', 'color: #98FB98;');
console.log('%cEnjoy the glitter! 🌟', 'font-size: 16px; color: #DDA0DD; font-style: italic;');

// Dark mode functionality
function initDarkMode() {
    // Check localStorage for saved preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'enabled') {
        document.body.classList.add('dark-mode');
        updateDarkModeButton(true);
    }
}

function toggleDarkMode() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
    updateDarkModeButton(isDark);
}

function updateDarkModeButton(isDark) {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.textContent = isDark ? '🏙️' : '🌃';
    }
}

// Initialize dark mode on page load
initDarkMode();

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

// Seasonal effects system
let seasonalEffectsActive = false;
let seasonalInterval = null;
let manualSeason = null; // Override automatic season detection

function getCurrentSeason() {
    // If manual season is set, use that
    if (manualSeason) return manualSeason;
    
    const month = new Date().getMonth() + 1; // 1-12
    if (month >= 12 || month <= 2) return 'winter'; // Dec, Jan, Feb
    if (month >= 3 && month <= 5) return 'spring';  // Mar, Apr, May
    if (month >= 6 && month <= 8) return 'summer';  // Jun, Jul, Aug
    return 'fall'; // Sep, Oct, Nov
}

function getSeasonEmoji(season) {
    const emojis = {
        winter: '❄️',
        spring: '🌸',
        summer: '☀️',
        fall: '🍂'
    };
    return emojis[season];
}

function getGlobeEmoji(season) {
    const globes = {
        winter: '🌍', // Europe-Africa
        spring: '🌎', // Americas
        summer: '🌏', // Asia-Australia
        fall: '🌎'   // Americas
    };
    return globes[season];
}

function createSeasonalElement() {
    const season = getCurrentSeason();
    const element = document.createElement('div');
    element.className = `seasonal-element seasonal-${season}`;
    
    // Random horizontal position
    element.style.left = Math.random() * 100 + 'vw';
    
    // Set content based on season
    const seasonContent = {
        winter: ['❄️', '🌨️'],
        spring: ['🌸', '🌼', '🌺', '🌷'],
        summer: ['☀️', '⭐', '✨'],
        fall: ['🍂', '🍁', '🍃']
    };
    
    const options = seasonContent[season];
    element.textContent = options[Math.floor(Math.random() * options.length)];
    
    // Random size and animation duration
    const size = Math.random() * 15 + 20; // 20-35px
    element.style.fontSize = size + 'px';
    
    const duration = Math.random() * 5 + 8; // 8-13 seconds
    element.style.animationDuration = duration + 's';
    
    // Random delay for stagger effect
    element.style.animationDelay = Math.random() * 2 + 's';
    
    document.body.appendChild(element);
    
    // Remove after animation
    setTimeout(() => {
        element.remove();
    }, (duration + 2) * 1000);
}

function startSeasonalEffects() {
    if (seasonalEffectsActive) return;
    seasonalEffectsActive = true;
    
    // Create elements at intervals
    seasonalInterval = setInterval(() => {
        createSeasonalElement();
    }, 800); // New element every 800ms
    
    // Create a few immediately
    for (let i = 0; i < 3; i++) {
        setTimeout(() => createSeasonalElement(), i * 200);
    }
}

function stopSeasonalEffects() {
    seasonalEffectsActive = false;
    if (seasonalInterval) {
        clearInterval(seasonalInterval);
        seasonalInterval = null;
    }
    // Remove existing elements
    document.querySelectorAll('.seasonal-element').forEach(el => el.remove());
}

// Set up toggle button
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('seasonToggle');
    
    if (toggleBtn) {
        // Set button emoji based on current season
        const season = getCurrentSeason();
        toggleBtn.textContent = getSeasonEmoji(season);
        
        toggleBtn.addEventListener('click', function() {
            if (seasonalEffectsActive) {
                stopSeasonalEffects();
                this.classList.remove('active');
            } else {
                startSeasonalEffects();
                this.classList.add('active');
            }
        });
    }
    
    // Secret season changer in footer
    const seasonSecret = document.querySelector('.season-secret');
    if (seasonSecret) {
        seasonSecret.addEventListener('click', function() {
            cycleSeason();
        });
    }
    
    // Dark mode toggle
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            toggleDarkMode();
        });
    }
});

function cycleSeason() {
    const seasons = ['winter', 'spring', 'summer', 'fall'];
    const currentSeason = getCurrentSeason();
    const currentIndex = seasons.indexOf(currentSeason);
    const nextIndex = (currentIndex + 1) % seasons.length;
    manualSeason = seasons[nextIndex];
    
    // Update button emoji
    const toggleBtn = document.getElementById('seasonToggle');
    if (toggleBtn) {
        toggleBtn.textContent = getSeasonEmoji(manualSeason);
    }
    
    // Update secret button emoji to show current season's globe
    const seasonSecret = document.querySelector('.season-secret');
    if (seasonSecret) {
        // Trigger spin animation
        seasonSecret.classList.add('spinning');
        
        // Update globe emoji after animation starts
        setTimeout(() => {
            seasonSecret.textContent = getGlobeEmoji(manualSeason);
        }, 300); // Halfway through spin
        
        // Remove animation class after it completes
        setTimeout(() => {
            seasonSecret.classList.remove('spinning');
        }, 600);
    }
    
    // If effects are active, restart them with new season
    if (seasonalEffectsActive) {
        stopSeasonalEffects();
        startSeasonalEffects();
        const toggleBtn = document.getElementById('seasonToggle');
        if (toggleBtn) toggleBtn.classList.add('active');
    }
    
    // Show a little console message
    console.log('%cSeason changed to: ' + manualSeason + ' ' + getSeasonEmoji(manualSeason), 'font-size: 14px; color: #98FB98;');
}
