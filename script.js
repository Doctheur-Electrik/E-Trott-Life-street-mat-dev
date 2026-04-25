// GESTION BOUTIQUE (Couleur, Taille, Modèle)
function changeColor(type) {
    const color = document.getElementById('color-' + type).value;
    const img = document.getElementById('img-' + type);
    const step2 = document.getElementById('step2-' + type);
    const btn = document.getElementById('btn-' + type);

    if (color) {
        img.src = 'image/produit/' + type + '/' + type + '-' + color + '-1.jpeg';
        step2.style.display = 'block';
        btn.style.display = 'none';
    }
}

function updateStep(type, nextStep) {
    const size = document.getElementById('size-' + type).value;
    const nextDiv = document.getElementById('step' + nextStep + '-' + type);
    if (size) nextDiv.style.display = 'block';
}

function finalize(type, modelNum) {
    const color = document.getElementById('color-' + type).value;
    const size = document.getElementById('size-' + type).value;
    const btn = document.getElementById('btn-' + type);
    const img = document.getElementById('img-' + type);
    
    img.src = 'image/produit/' + type + '/' + type + '-' + color + '-' + modelNum + '.jpeg';
    btn.style.display = 'block';
    
    btn.setAttribute('data-item-custom1-name', "Couleur");
    btn.setAttribute('data-item-custom1-value', color);
    btn.setAttribute('data-item-custom2-name', "Taille");
    btn.setAttribute('data-item-custom2-value', size);
    btn.setAttribute('data-item-custom3-name', "Modèle");
    btn.setAttribute('data-item-custom3-value', "Modèle " + modelNum);
    
    document.querySelectorAll('#step3-' + type + ' button').forEach((b, i) => {
        b.classList.toggle('model-active', (i + 1) === modelNum);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // GESTION FAQ
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item) otherItem.classList.remove('active');
            });
            item.classList.toggle('active');
        });
    });

    // GESTION BANDEAU COOKIES
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesBtn = document.getElementById('accept-cookies');
    
    if (cookieBanner && acceptCookiesBtn) {
        // Si l'utilisateur n'a pas encore accepté, on affiche le bandeau
        if (!localStorage.getItem('cookiesAccepted')) {
            cookieBanner.style.display = 'flex';
        }
        
        // Au clic sur accepter, on enregistre dans le navigateur et on cache
        acceptCookiesBtn.addEventListener('click', () => {
            localStorage.setItem('cookiesAccepted', 'true');
            cookieBanner.style.display = 'none';
        });
    }
});