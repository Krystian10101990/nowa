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

    searchButton.addEventListener('click', function() {
        const searchQuery = searchEditText.value.toLowerCase();
        const result = encyclopediaData[searchQuery] || `Brak wyników dla: ${searchQuery}`;
        resultTextView.innerHTML = result;
    });

    clearButton.addEventListener('click', function() {
        resultTextView.innerHTML = '';
    });
});
