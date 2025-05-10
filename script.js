const images = document.querySelectorAll('.monument-image');
const content = document.querySelector('#content');
const monumentContent = document.querySelector('.monument-container');
const navlinks = document.querySelectorAll('.nav-link');

let monumentsData = null;

// Charger les données JSON
fetch('monuments.json')
    .then(response => response.json())
    .then(data => {
        monumentsData = data.monuments;
    })
    .catch(error => console.error('Erreur lors du chargement des données:', error));

function afficherPopup(element) {
    if (!monumentsData) return;
    
    const monument = monumentsData.find(m => m.id === element.id);
    if (monument) {
        content.innerHTML = `
            <h3>${monument.nom}</h3>
            <h4>${monument.ville}, ${monument.pays}</h4>
            <p>${monument.description}</p>
            <iframe class="carte" src="${monument.carte}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        `;
    }
}

images.forEach(image => {
    image.addEventListener('click', (e) => {
        afficherPopup(e.target);
    });
});

navlinks.forEach(link => {
    link.addEventListener('click', (e) => {
        afficherPopup(e.target);
    });
});

const monumentImages = document.querySelectorAll('.monument-image');
let imageActive = null;


for(let i = 0; i < monumentImages.length; i++) {
    monumentImages[i].style.filter = 'blur(2px)';
    monumentImages[i].addEventListener('click', () => {
        if (imageActive) {
            imageActive.style.filter = 'blur(2px)';
        }
        monumentImages[i].style.filter = 'blur(0px)';
        imageActive = monumentImages[i];
    });
}


