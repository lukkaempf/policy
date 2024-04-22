window.onload = function() {
    fragenAnzeigen();
};

function frageSpeichern() {
    const input = document.getElementById('frageInput');
    const frage = input.value;
    input.value = ''; // Feld leeren

    if (frage.trim() !== "") {
        const fragen = JSON.parse(localStorage.getItem('fragen') || '[]');
        fragen.push(frage);
        localStorage.setItem('fragen', JSON.stringify(fragen));
        fragenAnzeigen();
    }
}

function fragenAnzeigen() {
    const fragen = JSON.parse(localStorage.getItem('fragen') || '[]');
    const fragenListe = document.getElementById('fragenListe');
    fragenListe.innerHTML = ''; // Liste leeren

    fragen.forEach(function(frage) {
        const li = document.createElement('li');
        li.textContent = frage;
        fragenListe.appendChild(li);
    });
}
