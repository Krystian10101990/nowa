document.addEventListener('DOMContentLoaded', function() {
    const searchEditText = document.getElementById('searchEditText');
    const searchButton = document.getElementById('searchButton');
    const clearButton = document.getElementById('clearButton');
    const resultTextView = document.getElementById('resultTextView');
    const suggestionsContainer = document.getElementById('suggestionsContainer'); // Nowy element dla podpowiedzi

    const encyclopediaData = {
        "komisje śledcze": "Opis komisji śledczych...",
        "konstytucja": "Podstawowy akt prawny regulujący ustrojstwo państwa...",
        "prawo cywilne": "Gałąź prawa regulująca stosunki prawne między osobami...",
        "kara śmierci": "Najwyższy wymiar kary, polegający na pozbawieniu życia skazańca...",
        // Dodaj więcej definicji encyklopedycznych tutaj
    };

    // Funkcja do generowania podpowiedzi w postaci hiperłączy
    function showSuggestions(searchTerm) {
        searchTerm = searchTerm.toLowerCase();
        const suggestions = Object.keys(encyclopediaData).filter(term =>
            term.toLowerCase().startsWith(searchTerm)
        );
        
        // Wygenerowanie hiperłączy dla sugestii
        const links = suggestions.map(term => {
            return `<a href="#" class="suggestionLink">${term}</a>`;
        });

        // Wyświetlenie sugestii w kontenerze nad przyciskami
        suggestionsContainer.innerHTML = links.join(', ');
    }

    // Obsługa kliknięcia przycisku Szukaj
    searchButton.addEventListener('click', function() {
        const searchQuery = searchEditText.value.toLowerCase();
        const result = encyclopediaData[searchQuery] || `Brak wyników dla: ${searchQuery}`;
        resultTextView.innerHTML = result;
        suggestionsContainer.innerHTML = ''; // Ukrycie podpowiedzi po kliknięciu Szukaj
    });

    // Obsługa wprowadzania tekstu w polu wyszukiwania
    searchEditText.addEventListener('input', function() {
        const searchTerm = this.value.trim();
        if (searchTerm.length > 0) {
            showSuggestions(searchTerm);
        } else {
            suggestionsContainer.innerHTML = '';
        }
    });

    // Obsługa kliknięcia przycisku Wyczyść
    clearButton.addEventListener('click', function() {
        searchEditText.value = '';
        resultTextView.innerHTML = '';
        suggestionsContainer.innerHTML = ''; // Ukrycie podpowiedzi po kliknięciu Wyczyść
    });

    // Obsługa kliknięcia na hiperłączach (podpowiedziach)
    suggestionsContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('suggestionLink')) {
            const selectedTerm = event.target.innerText;
            searchEditText.value = selectedTerm; // Wstawienie wybranego terminu do pola wyszukiwania
            showSuggestions(''); // Wyczyszczenie podpowiedzi
        }
    });
});
