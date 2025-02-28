document.addEventListener('DOMContentLoaded', () => {
    // Get user data from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('user');

    // Sample user data (replace with actual data from backend)
    const userData = {
        name: username,
        email: `${username}@anurag.edu.in`,
        branch: 'Computer Science Engineering',
        joinedClubs: ['Coding Club', 'Photography Club', 'Music Club']
    };

    // Sample clubs data
    const clubsData = [
        { name: 'Coding Club', members: 120, description: 'Programming and development' },
        { name: 'Photography Club', members: 85, description: 'Capture moments' },
        { name: 'Music Club', members: 95, description: 'For music enthusiasts' }
    ];

    // Sample events data
    const eventsData = [
        { name: 'Hackathon 2024', date: '2024-03-15', club: 'Coding Club' },
        { name: 'Photo Exhibition', date: '2024-03-20', club: 'Photography Club' },
        { name: 'Music Night', date: '2024-03-25', club: 'Music Club' }
    ];

    // Populate user profile
    function populateProfile() {
        document.getElementById('user-name').textContent = userData.name;
        document.getElementById('email').textContent = userData.email;
        document.getElementById('branch').textContent = userData.branch;

        const clubsList = document.getElementById('joined-clubs-list');
        clubsList.innerHTML = userData.joinedClubs
            .map(club => `<li>${club}</li>`)
            .join('');
    }

    // Populate clubs grid
    function populateClubs() {
        const clubsGrid = document.getElementById('clubs-grid');
        clubsGrid.innerHTML = clubsData
            .map(club => `
                <div class="club-card">
                    <h3>${club.name}</h3>
                    <p>${club.description}</p>
                    <p>Members: ${club.members}</p>
                    <button onclick="joinClub('${club.name}')" class="join-button">
                        ${userData.joinedClubs.includes(club.name) ? 'Joined' : 'Join Club'}
                    </button>
                </div>
            `)
            .join('');
    }

    // Populate events grid
    function populateEvents() {
        const eventsGrid = document.getElementById('events-grid');
        eventsGrid.innerHTML = eventsData
            .map(event => `
                <div class="event-card">
                    <h3>${event.name}</h3>
                    <p>Date: ${new Date(event.date).toLocaleDateString()}</p>
                    <p>Organized by: ${event.club}</p>
                    <button class="register-button">Register</button>
                </div>
            `)
            .join('');
    }

    // Show/hide sections
    window.showSection = function(sectionId) {
        document.querySelectorAll('.section').forEach(section => {
            section.classList.add('hidden');
        });
        document.getElementById(sectionId).classList.remove('hidden');

        // Update active button
        document.querySelectorAll('.nav-button').forEach(button => {
            button.classList.remove('active');
        });
        document.querySelector(`button[onclick="showSection('${sectionId}')"]`).classList.add('active');
    }

    // Join club function
    window.joinClub = function(clubName) {
        if (!userData.joinedClubs.includes(clubName)) {
            userData.joinedClubs.push(clubName);
            populateProfile();
            populateClubs();
        }
    }

    // Initialize the page
    populateProfile();
    populateClubs();
    populateEvents();
});


function moveToClubs(){
    window.location.href = 'clubs.html';
}
function moveToEvents(){
    window.location.href = 'workshop.html';
}
function moveToProfile(){
    window.location.href = 'profile.html';
}