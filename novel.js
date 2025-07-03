document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle-button');
    const body = document.body;

    // Function to set the theme
    const setTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        }
    };

    // Check for saved theme preference on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        // If no theme is saved, default to light theme
        setTheme('light');
    }

    // Toggle theme on button click
    themeToggleButton.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    });

    // You can add more JavaScript for dynamic content loading,
    // handling clicks on 'SWITCH' buttons, etc., here.
    // For example, a simple alert for the SWITCH button:
    const switchButton = document.querySelector('.switch-button');
    if (switchButton) {
        switchButton.addEventListener('click', () => {
            alert('Switching content (This would load new data in a real app!)');
        });
    }

    // Example for main navigation active state (if not handled by backend routing)
    const mainNavLinks = document.querySelectorAll('.main-nav a');
    mainNavLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Prevent default link behavior if you're handling routing client-side
            // event.preventDefault();

            mainNavLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

   
    const chapterSelect = document.getElementById('chapter-select');

    // --- Dynamic Chapter Loading (Conceptual) ---
    // In a real application, you'd likely fetch this from a database or a JSON file
    // For now, we'll use a hardcoded example.
    const chapters = [
        { title: "Chapter 1 ", url: "chapter 1.html" },
        { title: "Chapter 2 ", url: "chapter 2.html" },
        { title: "Chapter 3 ", url: "chapter 3.html" },
        { title: "Chapter 4 ", url: "chapter 4.html" },
        { title: "Chapter 5 ", url: "chapter 5.html" },
        { title: "Chapter 6 ", url: "chapter 6.html" },
        { title: "Chapter 7 ", url: "chapter 7.html" },
        { title: "Chapter 8 ", url: "chapter 8.html" },
        { title: "Chapter 9 ", url: "chapter 9.html" },
        { title: "Chapter 10 ", url: "chapter 10.html" },
        { title: "Chapter 11 ", url: "chapter 11.html" },
        { title: "Chapter 12 ", url: "chapter 12.html" },
        { title: "Chapter 13 ", url: "chapter 13.html" },
        { title: "Chapter 14 ", url: "chapter 14.html" },
        { title: "Chapter 15 ", url: "chapter 15.html" },
        { title: "Chapter 16 ", url: "chapter 16.html" },
        { title: "Chapter 17 ", url: "chapter 17.html" },
        { title: "Chapter 18 ", url: "chapter 18.html" },
        { title: "Chapter 19 ", url: "chapter 19.html" },
        { title: "Chapter 20 ", url: "chapter 20.html" },
        { title: "Chapter 21 ", url: "chapter 21.html" },
        { title: "Chapter 22 ", url: "chapter 22.html" },
        { title: "Chapter 23 ", url: "chapter 23.html" },
        { title: "Chapter 24 ", url: "chapter 24.html" },
        { title: "Chapter 25 ", url: "chapter 25.html" },
        { title: "Chapter 26 ", url: "chapter 26.html" },
        { title: "Chapter 27 ", url: "chapter 27.html" },
        { title: "Chapter 28 ", url: "chapter 28.html" },
        { title: "Chapter 29 ", url: "chapter 29.html" },
        { title: "Chapter 30 ", url: "chapter 30.html" },
        { title: "Chapter 31 ", url: "chapter 31.html" },
        { title: "Chapter 32 ", url: "chapter 32.html" },
        { title: "Chapter 33 ", url: "chapter 33.html" },
        { title: "Chapter 34 ", url: "chapter 34.html" },
        { title: "Chapter 35 ", url: "chapter 35.html" },
        { title: "Chapter 36 ", url: "chapter 36.html" },
        { title: "Chapter 37 ", url: "chapter 37.html" },
        { title: "Chapter 38 ", url: "chapter 38.html" },
        { title: "Chapter 39 ", url: "chapter 39.html" },
        { title: "Chapter 40 ", url: "chapter 40.html" },
        { title: "Chapter 41 ", url: "chapter 41.html" },
        { title: "Chapter 42 ", url: "chapter 42.html" },
        { title: "Chapter 43 ", url: "chapter 43.html" },
        { title: "Chapter 44 ", url: "chapter 44.html" },
        { title: "Chapter 45 ", url: "chapter 45.html" },
        { title: "Chapter 46 ", url: "chapter 46.html" },
        { title: "Chapter 47 ", url: "chapter 47.html" },
       
             

        
        // Add all your chapters here
    ];

    // Populate the dropdown if it's not already pre-filled in HTML
    if (chapterSelect.options.length === 0) { // Check if options are already there
        chapters.forEach(chapter => {
            const option = document.createElement('option');
            option.value = chapter.url;
            option.textContent = chapter.title;
            chapterSelect.appendChild(option);
        });
    }

    // --- Dropdown Navigation Logic ---
    chapterSelect.addEventListener('change', function() {
        const selectedUrl = this.value;
        if (selectedUrl) {
            window.location.href = selectedUrl; // Navigate to the selected chapter's URL
        }
    });

    // Optional: If you want to highlight the current chapter in the dropdown
    // when a user lands on a specific chapter page, you'd need logic here
    // that checks window.location.pathname and sets chapterSelect.value accordingly.
});
