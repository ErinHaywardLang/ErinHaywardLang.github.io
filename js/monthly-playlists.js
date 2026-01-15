// Monthly playlists accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const yearHeaders = document.querySelectorAll('.year-header');

    yearHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const yearSection = this.parentElement;
            
            // Toggle the expanded class
            yearSection.classList.toggle('expanded');
        });
    });
});
