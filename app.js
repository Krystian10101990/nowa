document.addEventListener('DOMContentLoaded', function() {
    const searchEditText = document.getElementById('searchEditText');
    const searchButton = document.getElementById('searchButton');
    const clearButton = document.getElementById('clearButton');
    const resultTextView = document.getElementById('resultTextView');
    const suggestionsContainer = document.getElementById('suggestionsContainer');
    const installButton = document.getElementById('installButton');
    let deferredPrompt;

    const encyclopediaData = {
        "komisje śledcze": "Rodzaj komisji sejmowych, o nadzwyczajnym charakterze...",
        "konstytucja": "Podstawowy akt prawny regulujący ustrój państwa...",
        "prawo cywilne": "Gałąź prawa regulująca stosunki prawne między osobami...",
        "kara śmierci": "Najwyższy wymiar kary, polegający na pozbawieniu życia skazańca...",
        // Dodaj więcej definicji encyklopedycznych tutaj
    };

    function showSuggestions(searchTerm) {
        searchTerm = searchTerm.toLowerCase();
        const suggestions = Object.keys(encyclopediaData).filter(term =>
            term.toLowerCase().startsWith(searchTerm)
        );
        
        const links = suggestions.map(term => {
            return `<a href="#" class="suggestionLink">${term}</a>`;
        });

        suggestionsContainer.innerHTML = links.join('');
    }

    searchButton.addEventListener('click', function() {
        const searchQuery = searchEditText.value.toLowerCase();
        const result = encyclopediaData[searchQuery] || `Brak wyników dla: ${searchQuery}`;
        resultTextView.innerHTML = result;
        suggestionsContainer.innerHTML = '';
    });

    searchEditText.addEventListener('input', function() {
        const searchTerm = this.value.trim();
        if (searchTerm.length > 0) {
            showSuggestions(searchTerm);
        } else {
            suggestionsContainer.innerHTML = '';
        }
    });

    clearButton.addEventListener('click', function() {
        searchEditText.value = '';
        resultTextView.innerHTML = '';
        suggestionsContainer.innerHTML = '';
    });

    suggestionsContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('suggestionLink')) {
            const selectedTerm = event.target.innerText;
            searchEditText.value = selectedTerm;
            showSuggestions('');
        }
    });

    // Obsługa zdarzenia beforeinstallprompt
    window.addEventListener('beforeinstallprompt', (e) => {
        console.log('beforeinstallprompt event triggered');
        e.preventDefault();
        deferredPrompt = e;
        installButton.style.display = 'block';

        installButton.addEventListener('click', () => {
            installButton.style.display = 'none';
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('Użytkownik zaakceptował instalację PWA');
                } else {
                    console.log('Użytkownik odrzucił instalację PWA');
                }
                deferredPrompt = null;
            });
        });
    });

    // Sprawdzenie, czy aplikacja jest zainstalowana
    window.addEventListener('appinstalled', (evt) => {
        console.log('Aplikacja została zainstalowana.');
    });

    // Rejestracja service workera
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('Service worker zarejestrowany:', registration);
            })
            .catch((error) => {
                console.error('Rejestracja service workera nie powiodła się:', error);
            });
    }
});
