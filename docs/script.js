document.addEventListener('DOMContentLoaded', () => {
    // --- CONFIGURATION --- //
    // Instructions: Edit the content below to change your links.
    // - `text`: The text displayed on the button.
    // - `url`: The website link the button will open.

    const links = {
        games: [
            { text: 'Internet Archive Flash', url: 'https://archive.org/details/softwarelibrary_flash_games' },
            { text: 'C64 Games', url: 'https://archive.org/details/softwarelibrary_c64' },
            { text: 'Console Emulator', url: 'https://archive.org/details/consolelivingroom' },
            { text: 'Oregon Trail', url: 'https://www.visitoregon.com/the-oregon-trail-game-online/' },
            { text: 'GitHub Unblocked Games List', url: 'https://gist.github.com/eddy-22/2cdfadfa539cdaccfd0a9e31bf98e6d6#unblocked-sites' },
            { text: '', url: '#' },
            { text: 'JavyQuavy Games', url: 'https://sites.google.com/view/javyquavy-un-blocked-games/home' },
            { text: 'RubyCave', url: 'http://Rubycave.com.ar' },
            { text: 'Kelki (Drawing Tool)', url: 'https://kleki.com' },
            { text: 'MORE COMING SOON', url: '#' },
            
           
        ],
        movies: [
            { text: 'Movie/TV Site A', url: 'https://sites.google.com/view/empireunblockin/movies/page-10' },
            { text: 'Movie/TV Site B', url: 'https://sites.google.com/view/scholarvision/movies' },
        ],
        suggestions: [
            { text: 'Google Form', url: 'https://docs.google.com/forms/u/0/' }, // <-- IMPORTANT: Replace with your actual Google Form link
        ],
        ai: [
            { text: 'MS Copilot', url: 'https://copilot.microsoft.com' },
            { text: 'MORE COMING SOON', url: '#' },
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
