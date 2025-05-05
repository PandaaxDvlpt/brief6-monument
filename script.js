const images = document.querySelectorAll('.monument-image');
const content = document.querySelector('#content');
const monumentContent = document.querySelector('.monument-container');
const navlinks = document.querySelectorAll('.nav-link');
function afficherPopup(element) {
    if (element.id === 'tour-eiffel') {
        content.innerHTML = `
            <h3>Tour Eiffel</h3>
            <h4>Paris, France</h4>
            <p>La tour Eiffel est un monument de la ville de Paris, en France. Elle est située à l'extrémité nord-ouest du parc du Champ-de-Mars, dans le 7ᵉ arrondissement.</p>
            <iframe class="carte" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9914410253436!2d2.2919063767779204!3d48.85837360070728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1746451663916!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        `;
    } else if (element.id === 'notre-dame') {
        content.innerHTML = `
            <h3>Notre-Dame</h3>
            <h4>Paris, France</h4>
            <p>La cathédrale Notre-Dame de Paris est une église catholique située à Paris, en France. Elle est l'une des plus célèbres cathédrales du pays et du monde.</p>
            <iframe class="carte" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5250.613084843325!2d2.3475100484216176!3d48.852364694929534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671e39dd448af%3A0xe95d8ec82cfaf643!2sNotre%20Dame%2C%20Paris!5e0!3m2!1sfr!2sfr!4v1746451766287!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        `;
    } else if (element.id === 'arc-de-triomphe') {
        content.innerHTML = `
            <h3>Arc de Triomphe</h3>
            <h4>Paris, France</h4>
            <p>L'Arc de Triomphe de l'Étoile est un monument situé à Paris, en France. Il est situé à l'extrémité nord-ouest du parc du Champ-de-Mars, dans le 8ᵉ arrondissement.</p>
            <iframe class="carte" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.182614682922!2d2.292452576778637!3d48.873795199621874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fec70fb1d8f%3A0xd9b5676e112e643d!2sArc%20de%20Triomphe!5e0!3m2!1sfr!2sfr!4v1746451745265!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        `;
    } else if (element.id === 'versailles') {
        content.innerHTML = `
            <h3>Versailles</h3>
            <h4>Versailles, France</h4>
            <p>Versailles est une ville située dans le département de l'Yvelines, en région Île-de-France, en France. Elle est connue pour son palais de Versailles, qui fut le siège de la royauté française pendant plus de 100 ans.</p>
            <iframe class="carte" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5255.592381774006!2d2.1154844919158196!3d48.80486833054321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67d94d7b14c75%3A0x538fcc15f59ce8f!2sCh%C3%A2teau%20de%20Versailles!5e0!3m2!1sfr!2sfr!4v1746451699863!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    } else if (element.id === 'mont-saint-michel') {  
        content.innerHTML = `   
            <h3>Mont Saint-Michel</h3>
            <h4>Mont Saint-Michel, France</h4>
            <p>Mont Saint-Michel est un site touristique situé dans le département de la Manche, en région Normandie, en France. Il est connu pour son abbaye, son phare et son église.</p>
            <iframe class="carte" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2643.7336092953665!2d-1.4025749235561737!3d48.49999997128582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sfr!2sfr!4v1746451593793!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

