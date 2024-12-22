document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('searchButton');
    const codexButton = document.getElementById('codexButton');
    const favoritesButton = document.getElementById('favoritesButton');
    const btnGroup = document.querySelector('.btn-group');
    const searchText = document.querySelector('.search-text');
    const searchInput = document.querySelector('.search-input');
    let isExpanded = false;

    searchButton.addEventListener('click', function(event) {
        if (!isExpanded) {
            searchButton.classList.add('expanded');
            codexButton.classList.add('shifted');
            favoritesButton.classList.add('shifted');
            btnGroup.classList.add('expanded');
            searchText.classList.add('hidden');
            searchInput.classList.add('visible');
            isExpanded = true;
        }
    });

    searchButton.addEventListener('mousedown', function(event) {
        if (isExpanded && event.target.tagName !== 'INPUT') {
            searchButton.classList.remove('expanded');
            codexButton.classList.remove('shifted');
            favoritesButton.classList.remove('shifted');
            btnGroup.classList.remove('expanded');
            searchText.classList.remove('hidden');
            searchInput.classList.remove('visible');
            isExpanded = false;
        }
    });

    codexButton.addEventListener('click', function() {
        window.location.href = '/codex';
    });

    const homeButton = document.getElementById('homeButton');
    if (homeButton) {
        homeButton.addEventListener('click', function() {
            window.location.href = '/';
        });
    }

    const readCodexButton = document.getElementById('readCodexButton');
    if (readCodexButton) {
        readCodexButton.addEventListener('click', function() {
            // Добавьте здесь логику для прочтения Трудового кодекса РФ
            alert('Функция прочтения Трудового кодекса РФ будет реализована позже.');
        });
    }
});
