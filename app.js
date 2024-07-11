document.addEventListener('DOMContentLoaded', function() {
    const searchEditText = document.getElementById('searchEditText');
    const searchButton = document.getElementById('searchButton');
    const clearButton = document.getElementById('clearButton');
    const resultTextView = document.getElementById('resultTextView');
    const suggestionsList = document.getElementById('suggestionsList'); // Dodajemy referencję do listy sugestii

    const encyclopediaData = {
        "komisje śledcze": "Opis komisji śledczych...",
        // Dodaj więcej definicji encyklopedycznych tutaj
    };

    searchButton.addEventListener('click', function() {
        const searchQuery = searchEditText.value.toLowerCase();
        const result = encyclopediaData[searchQuery] || `Brak wyników dla: ${searchQuery}`;
        resultTextView.innerHTML = result;
        suggestionsList.innerHTML = ''; // Czyszczenie listy sugestii po kliknięciu przycisku Szukaj
    });

    clearButton.addEventListener('click', function() {
        resultTextView.innerHTML = '';
        suggestionsList.innerHTML = ''; // Czyszczenie listy sugestii po kliknięciu przycisku Wyczyść
    });

    // Obsługa kliknięcia na sugestię
    suggestionsList.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') { // Sprawdzamy czy kliknięty element jest hiperłączem
            const suggestion = event.target.textContent.toLowerCase(); // Pobieramy tekst sugestii
            const result = encyclopediaData[suggestion] || `Brak wyników dla: ${suggestion}`;
            resultTextView.innerHTML = result;
            suggestionsList.innerHTML = ''; // Czyszczenie listy sugestii po kliknięciu na sugestię
        }
    });

    // Funkcja do generowania sugestii
    function generateSuggestions(query) {
        const suggestions = Object.keys(encyclopediaData).filter(key => key.includes(query.toLowerCase()));
        suggestionsList.innerHTML = ''; // Czyszczenie poprzednich sugestii
        suggestions.forEach(suggestion => {
            const link = document.createElement('a');
            link.href = '#'; // Link, który nie przenosi do innej strony
            link.textContent = suggestion;
            const listItem = document.createElement('li');
            listItem.appendChild(link);
            suggestionsList.appendChild(listItem);
        });
    }

    // Słuchacz zmiany wartości w polu wyszukiwania
    searchEditText.addEventListener('input', function() {
        const query = searchEditText.value.trim();
        if (query.length > 0) {
            generateSuggestions(query);
        } else {
            suggestionsList.innerHTML = ''; // Czyszczenie sugestii, jeśli pole wyszukiwania jest puste
        }
    });
});
