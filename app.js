document.addEventListener('DOMContentLoaded', function() {
    const searchEditText = document.getElementById('searchEditText');
    const searchButton = document.getElementById('searchButton');
    const clearButton = document.getElementById('clearButton');
    const resultTextView = document.getElementById('resultTextView');

    const encyclopediaData = {
      "komisje śledcze": 
        "obywatelstwo": "rodzaj więzi łączącej jednostkę z państwem, z której wynikają wzajemne prawa i obowiązki. Dziecko nabywa obywatelstwo w drodze urodzenia na postawie prawa krwi – dziecko nabywa obywatelstwo po rodzicach albo prawa ziemi – dziecko nabywa obywatelstwo kraju, na terytorium którego się urodziło. W Polsce nabycie obywatelstwa następuje na podstawie prawa krwi, dziecko nabywa obywatelstwo polskie, jeżeli przynajmniej jeden z rodziców ma polskie obywatelstwo. Innymi sposobami nabycia obywatelstwa polskiego są: naturalizacja - nadanie obywatelstwa przez Prezydenta RP, uznanie za obywatela, nabycie obywatelstwa w drodze repatriacji. Obywatelstwa polskiego nie można pozbawić, osoba może się obywatelstwa zrzec, na co prezydent musi wyrazić zgodę. (JJ)",
        "immunitet":  "rodzaj przywileju chroniącego pewne grupy zawodowe i osoby zajmujące określone stanowiska państwowe przed pociągnięciem do odpowiedzialności. Jego celem jest zapewnienie swobody działania osoby objętej immunitetem, a także ochrona niezależności organu. Możemy wyróżnić immunitet materialny, wyłączający możliwość pociągnięcia do odpowiedzialności sądowej posłów i senatorów za działania związane z wykonywaniem mandatu. immunitet formalny, uzależniający pociągnięcie do odpowiedzialności karnej od uzyskania zgody określonych organów. Rodzajem immunitetu formalnego jest przywilej nietykalności zakazujący zatrzymania bez zgody właściwego organu. Immunitetem formalnym objęci są posłowie, senatorowie, sędziowie, prokuratorzy, a także osoby zajmujące określone stanowiska państwowe: Prezes NIK, Prezes NBP, Rzecznik Praw Obywatelskich. (JJ)",
        "wolontariat" : "rodzaj pracy wykonywanej dobrowolnie i bezpłatnie. Najczęściej praca ta wykonywana jest na rzecz podmiotów zajmujących się opieką medyczną, opieką nad dziećmi i młodzieżą, ośrodków pomocy społecznej oraz organizacji pozarządowych. Zgodnie z ustawą o działalności pożytku publicznego i wolontariacie wolontariuszem jest osoba, która ochotniczo i bez wynagrodzenia wykonuje świadczenia na zasadach określonych w ustawie. (JJ)"
        
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