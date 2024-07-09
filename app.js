document.addEventListener('DOMContentLoaded', function() {
    const searchEditText = document.getElementById('searchEditText');
    const searchButton = document.getElementById('searchButton');
    const clearButton = document.getElementById('clearButton');
    const resultTextView = document.getElementById('resultTextView');

    const encyclopediaData = {
        "komisje śledcze": "Opis komisji śledczych...",
        "konstytucja": "Podstawowy akt prawny regulujący ustrojstwo państwa...",
        "prawo cywilne": "Gałąź prawa regulująca stosunki prawne między osobami...",
        "kara śmierci": "Najwyższy wymiar kary, polegający na pozbawieniu życia skazańca...",
        // Dodaj więcej definicji encyklopedycznych tutaj
    };

    // Funkcja do filtrowania haseł na podstawie wprowadzonego tekstu
    function suggestTerms(searchTerm) {
        searchTerm = searchTerm.toLowerCase();
        const suggestions = Object.keys(encyclopediaData).filter(term =>
            term.toLowerCase().startsWith(searchTerm)
        );
        return suggestions;
    }

    // Obsługa kliknięcia przycisku Szukaj
    searchButton.addEventListener('click', function() {
        const searchQuery = searchEditText.value.toLowerCase();
        const result = encyclopediaData[searchQuery] || `Brak wyników dla: ${searchQuery}`;
        resultTextView.innerHTML = result;
    });

    // Obsługa wprowadzania tekstu w polu wyszukiwania
    searchEditText.addEventListener('input', function() {
        const searchTerm = this.value.trim();
        if (searchTerm.length > 0) {
            const suggestions = suggestTerms(searchTerm);
            // Wyświetlenie sugestii jako podpowiedzi
            resultTextView.innerHTML = suggestions.join(', ');
        } else {
            resultTextView.innerHTML = '';
        }
    });

    // Obsługa kliknięcia przycisku Wyczyść
    clearButton.addEventListener('click', function() {
        searchEditText.value = '';
        resultTextView.innerHTML = '';
    });
});
