// Playlist filtering functionality with multi-check dropdown
document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.getElementById('genreDropdown');
    const dropdownMenu = document.getElementById('genreDropdownMenu');
    const checkboxes = document.querySelectorAll('.genre-checkbox');
    const clearBtn = document.querySelector('.clear-filters-btn');
    const playlistItems = document.querySelectorAll('.playlist-item');
    const dropdownText = document.querySelector('.dropdown-text');

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
        playlistItems.forEach(item => {
            const itemGenres = item.getAttribute('data-genre').split(' ');
            
            if (selectedGenres.length === 0) {
                // Show all if nothing selected
                item.classList.remove('hidden');
            } else {
                // Show if playlist has any of the selected genres
                const hasSelectedGenre = selectedGenres.some(genre => itemGenres.includes(genre));
                if (hasSelectedGenre) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            }
        });
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
