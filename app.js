// Słownik prawniczy - przykładowe definicje
const encyclopediaData = {
    "komisje śledcze": "Opis komisji śledczych...",
    "konstytucja": "Podstawowy akt prawny regulujący ustrojstwo i działalność organów władzy państwowej...",
    "sąd najwyższy": "Najwyższy organ sądownictwa powszechnego w Polsce..."
    // Dodaj więcej definicji encyklopedycznych tutaj
};

// Funkcja obsługująca wyszukiwanie i wyświetlanie definicji
document.addEventListener('DOMContentLoaded', function() {
    const searchEditText = document.getElementById('searchEditText');
    const searchButton = document.getElementById('searchButton');
    const clearButton = document.getElementById('clearButton');
    const resultTextView = document.getElementById('resultTextView');
    const suggestionsContainer = document.getElementById('suggestionsContainer');

    // Funkcja wyświetlająca sugestie wyszukiwania
    function displaySuggestions() {
        suggestionsContainer.innerHTML = '';
        const searchQuery = searchEditText.value.toLowerCase();
        const suggestions = Object.keys(encyclopediaData).filter(key =>
            key.toLowerCase().startsWith(searchQuery)
        );
        suggestions.forEach(suggestion => {
            const suggestionLink = document.createElement('a');
            suggestionLink.href = '#';
            suggestionLink.textContent = suggestion;
            suggestionLink.classList.add('suggestionLink');
            suggestionLink.addEventListener('click', function(event) {
                event.preventDefault();
                searchEditText.value = suggestion;
                searchButton.click();
            });
            suggestionsContainer.appendChild(suggestionLink);
        });
    }

    // Nasłuchiwanie na zmiany w polu wyszukiwania
    searchEditText.addEventListener('input', displaySuggestions);

    // Obsługa przycisku szukaj
    searchButton.addEventListener('click', function() {
        const searchQuery = searchEditText.value.toLowerCase();
        const result = encyclopediaData[searchQuery] || `Brak wyników dla: ${searchQuery}`;
        resultTextView.innerHTML = result;
    });

    // Obsługa przycisku wyczyść
    clearButton.addEventListener('click', function() {
        searchEditText.value = '';
        resultTextView.innerHTML = '';
        suggestionsContainer.innerHTML = '';
    });
});

// Dodanie obsługi instalacji PWA
window.addEventListener('load', () => {
    let deferredPrompt;
    const installButton = document.getElementById('installButton');
    
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        installButton.style.display = 'block'; // Pokazuje przycisk instalacji
    });
    
    installButton.addEventListener('click', () => {
        installButton.style.display = 'none';
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('Użytkownik zaakceptował instalację PWA');
            } else {
                console.log('Użytkownik anulował instalację PWA');
            }
            deferredPrompt = null;
        });
    });
});
