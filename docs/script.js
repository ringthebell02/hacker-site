document.addEventListener('DOMContentLoaded', () => {
    // --- CONFIGURATION --- //
    // Instructions: Edit the content below to change your links.
    // - `text`: The text displayed on the button.
    // - `url`: The website link the button will open.

    const links = {
        games: [
            { text: 'Internet Archive Flash Games', url: 'https://archive.org/details/softwarelibrary_flash_games' },
            { text: 'Internet Archive Console Emulator', url: 'https://archive.org/details/consolelivingroom' },
            { text: 'RubyCave', url: 'http://Rubycave.com.ar' },
            { text: 'Oregon Trail', url: 'https://www.visitoregon.com/the-oregon-trail-game-online/' },
            { text: 'Snap', url: 'https://snap.berkeley.edu/' },
            { text: 'Unblocked Games Site 1', url: 'https://sites.google.com/view/javyquavy-un-blocked-games/home' },
        ],
        movies: [
            { text: 'Movie Site A', url: 'https://sites.google.com/view/empireunblockin/movies/' },
            { text: 'Movie Site B', url: 'https://sites.google.com/view/scholarvision/movies' },
        ],
        suggestions: [
            { text: 'Suggestions Form', url: 'https://docs.google.com/forms/d/e/1FAIpQLSdi2lo9oSEV6_Ngh_4cCRjwn4PFJ9XhBrKxk0T3fwFsRO7TFw/viewform?usp=header' },
        ],
        ai: [
            { text: 'MS Copilot', url: 'https://copilot.microsoft.com' },
        ],
        docs: [
            { text: 'Google Doc', url: 'https://docs.google.com/document/d/10AvkAcGyNWAI2-DoFeldyRJQoPX2W9eaf2dQlnvA4ds/edit?usp=sharing' },
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
    generateButtons('ai-grid', links.ai);
    generateButtons('docs-grid', links.docs);
});
