document.addEventListener('DOMContentLoaded', function() {
    // Get all filter buttons and notification cards
    const filterButtons = document.querySelectorAll('.filter-btn');
    const notificationCards = document.querySelectorAll('.notification-card');
    const markReadButtons = document.querySelectorAll('.mark-read-btn');

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Get filter type from data attribute
            const filterType = button.getAttribute('data-filter');

            // Show/hide notifications based on filter
            notificationCards.forEach(card => {
                if (filterType === 'all') {
                    card.style.display = 'flex';
                } else if (filterType === 'unread' && card.classList.contains('unread')) {
                    card.style.display = 'flex';
                } else if (filterType === 'read' && !card.classList.contains('unread')) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Mark as read functionality
    markReadButtons.forEach(button => {
        button.addEventListener('click', () => {
            const notificationCard = button.closest('.notification-card');
            if (notificationCard.classList.contains('unread')) {
                notificationCard.classList.remove('unread');
                button.style.display = 'none';
            }
        });
    });
});