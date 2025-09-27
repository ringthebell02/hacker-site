document.addEventListener('DOMContentLoaded', () => {
    // --- CONFIGURATION --- //
    // Instructions: Edit the content below to change your links.
    // - `text`: The text displayed on the button.
    // - `url`: The website link the button will open.

    const links = {
        games: [
            { text: 'Game 1', url: '#' },
            { text: 'Game 2', url: '#' },
            { text: 'Game 3', url: '#' },
            { text: 'Game 4', url: '#' },
            { text: 'Game 5', url: '#' },
            { text: 'Game 6', url: '#' },
            { text: 'Game 7', url: '#' },
            { text: 'Game 8', url: '#' },
            { text: 'Game 9', url: '#' },
            { text: 'Game 10', url: '#' },
            { text: 'Game 11', url: '#' },
            { text: 'Game 12', url: '#' },
            { text: 'Game 13', url: '#' },
            { text: 'Game 14', url: '#' },
            { text: 'Game 15', url: '#' },
            { text: 'Game 16', url: '#' },
            { text: 'Game 17', url: '#' },
            { text: 'Game 18', url: '#' },
            { text: 'Game 19', url: '#' },
            { text: 'Game 20', url: '#' },
        ],
        movies: [
            { text: 'Movie/TV Site 1', url: '#' },
            { text: 'Movie/TV Site 2', url: '#' },
        ],
        suggestions: [
            { text: 'Google Form', url: 'https://docs.google.com/forms/u/0/' }, // <-- IMPORTANT: Replace with your actual Google Form link
        ]
    };

    // --- SCRIPT LOGIC --- //
    // (No need to edit below this line)

    const tabs = document.querySelectorAll('.nav-tab');
    const contentSections = document.querySelectorAll('.content-section');

    // Function to generate buttons
    const generateButtons = (containerId, buttonData) => {
        const container = document.getElementById(containerId);
        if (!container) return;

        buttonData.forEach(data => {
            const button = document.createElement('a');
            button.href = data.url;
            button.textContent = data.text;
            button.className = 'link-button';
            button.target = '_blank'; // Open links in a new tab
            button.rel = 'noopener noreferrer';
            container.appendChild(button);
        });
    };

    // Tab switching logic
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('data-tab');

            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Update active content section
            contentSections.forEach(section => {
                if (section.id === targetId) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
        });
    });

    // Initial button generation
    generateButtons('games-grid', links.games);
    generateButtons('movies-grid', links.movies);
    generateButtons('suggestions-grid', links.suggestions);
});
