// Playlist filtering functionality with multi-check dropdown
document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.getElementById('genreDropdown');
    const dropdownMenu = document.getElementById('genreDropdownMenu');
    const playlistItems = document.querySelectorAll('.playlist-item');
    const playlistGrid = document.querySelector('.playlist-grid');
    const dropdownText = document.querySelector('.dropdown-text');
    const seeMoreBtn = document.getElementById('seeMoreBtn');

    // See More button - show playlists in blocks of 8
    let visibleCount = 8;
    const blockSize = 8;
    const totalPlaylists = playlistItems.length;

    function updateVisiblePlaylists() {
        playlistItems.forEach((item, index) => {
            // Show if not filtered out and within visible count
            if (!item.classList.contains('hidden') && index < visibleCount) {
                item.classList.add('visible');
            } else {
                item.classList.remove('visible');
            }
        });

        // Hide button if all playlists are visible
        if (visibleCount >= totalPlaylists) {
            seeMoreBtn.style.display = 'none';
        } else {
            seeMoreBtn.style.display = 'block';
            seeMoreBtn.textContent = `See More (${visibleCount} of ${totalPlaylists})`;
        }
    }

    // Initial setup - show first 8
    updateVisiblePlaylists();

    seeMoreBtn.addEventListener('click', function() {
        visibleCount += blockSize;
        updateVisiblePlaylists();
    });

    // Extract unique genres from all playlists
    const genreSet = new Set();
    playlistItems.forEach(item => {
        const genres = item.getAttribute('data-genre').split(';').map(g => g.trim()).filter(g => g);
        genres.forEach(genre => genreSet.add(genre));
    });
    const uniqueGenres = Array.from(genreSet).sort();

    // Dynamically create checkboxes
    const genreCheckboxContainer = dropdownMenu.querySelector('.dropdown-divider').parentElement;
    const divider = dropdownMenu.querySelector('.dropdown-divider');
    const clearBtn = dropdownMenu.querySelector('.clear-filters-btn');

    // Create checkboxes for each unique genre
    uniqueGenres.forEach(genre => {
        const label = document.createElement('label');
        label.className = 'genre-checkbox-label';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = genre;
        checkbox.className = 'genre-checkbox';
        
        const span = document.createElement('span');
        span.textContent = genre.charAt(0).toUpperCase() + genre.slice(1);
        
        label.appendChild(checkbox);
        label.appendChild(span);
        
        // Insert before divider
        divider.parentElement.insertBefore(label, divider);
    });

    // Get all checkboxes (now that they're created)
    const checkboxes = document.querySelectorAll('.genre-checkbox');

    // Toggle dropdown
    dropdownToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdownMenu.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!dropdownMenu.contains(e.target) && e.target !== dropdownToggle) {
            dropdownMenu.classList.remove('show');
        }
    });

    // Prevent dropdown from closing when clicking inside
    dropdownMenu.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // Filter function
    function filterPlaylists() {
        const selectedGenres = Array.from(checkboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);

        // Update dropdown text
        if (selectedGenres.length === 0) {
            dropdownText.textContent = 'Filter by Genre';
        } else if (selectedGenres.length === 1) {
            dropdownText.textContent = selectedGenres[0].charAt(0).toUpperCase() + selectedGenres[0].slice(1);
        } else {
            dropdownText.textContent = `${selectedGenres.length} genres selected`;
        }

        // Filter playlists
        let nonHiddenCount = 0;
        playlistItems.forEach(item => {
            const itemGenres = item.getAttribute('data-genre').split(';').map(g => g.trim()).filter(g => g);
            
            if (selectedGenres.length === 0) {
                // Show all if nothing selected
                item.classList.remove('hidden');
                nonHiddenCount++;
            } else {
                // Show if playlist has any of the selected genres
                const hasSelectedGenre = selectedGenres.some(genre => itemGenres.includes(genre));
                if (hasSelectedGenre) {
                    item.classList.remove('hidden');
                    nonHiddenCount++;
                } else {
                    item.classList.add('hidden');
                }
            }
        });

        // When filtering, show all matching results; when no filter, reset to block view
        if (selectedGenres.length === 0) {
            visibleCount = blockSize; // Reset to first block when filter is cleared
            seeMoreBtn.style.display = 'block'; // Show button when no filter
        } else {
            visibleCount = totalPlaylists; // Show all filtered results
            seeMoreBtn.style.display = 'none'; // Hide button when filtering
        }

        // Update visible playlists based on blocks
        updateVisiblePlaylists();
    }

    // Add change listeners to checkboxes
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterPlaylists);
    });

    // Clear all filters
    clearBtn.addEventListener('click', function() {
        checkboxes.forEach(cb => cb.checked = false);
        filterPlaylists();
    });
});
