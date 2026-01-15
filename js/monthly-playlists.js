// Monthly playlists accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const yearHeaders = document.querySelectorAll('.year-header');

    yearHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const yearSection = this.parentElement;
            const yearContent = yearSection.querySelector('.year-content');
            
            // Toggle the expanded class
            yearSection.classList.toggle('expanded');
            
            // If expanding, set max-height to content height
            if (yearSection.classList.contains('expanded')) {
                yearContent.style.maxHeight = yearContent.scrollHeight + 'px';
            } else {
                yearContent.style.maxHeight = '0px';
            }
        });
    });
});

