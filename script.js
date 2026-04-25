/* ============================================================
   E-TROTT-LIFE STREET - JS MASTER - VERSION FINALE COMPLÈTE
   ============================================================ */

// Attendre que la page soit chargée
document.addEventListener('DOMContentLoaded', () => {

    // --- LOGIQUE COOKIES ---
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesBtn = document.getElementById('accept-cookies');
    
    // Vérifier si déjà accepté
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieBanner.style.display = 'flex';
    }
    
    if (acceptCookiesBtn) {
        acceptCookiesBtn.addEventListener('click', () => {
            localStorage.setItem('cookiesAccepted', 'true');
            cookieBanner.style.display = 'none';
        });
    }

});

// --- LOGIQUE BOUTIQUE (SELECTION PAR ETAPES) ---

function changeColor(type) {
    const color = document.getElementById('color-' + type).value;
    const img = document.getElementById('img-' + type);
    const step2 = document.getElementById('step2-' + type);
    const btn = document.getElementById('btn-' + type);

    if (color !== "") {
        // Change l'image principale vers le modèle 1 de la couleur
        img.src = 'image/produit/' + type + '/' + type + '-' + color + '-1.jpeg';
        // Affiche l'étape 2 (Taille)
        step2.style.display = 'block';
        // Cache le bouton panier
        btn.style.display = 'none';
    }
}

function updateStep(type, nextStepId) {
    const size = document.getElementById('size-' + type).value;
    const nextDiv = document.getElementById('step' + nextStepId + '-' + type);

    if (size !== "") {
        nextDiv.style.display = 'block';
    }
}

function finalize(type, modelNum) {
    const color = document.getElementById('color-' + type).value;
    const size = document.getElementById('size-' + type).value;
    const btn = document.getElementById('btn-' + type);
    const img = document.getElementById('img-' + type);
    
    // Mettre à jour l'image finale
    img.src = 'image/produit/' + type + '/' + type + '-' + color + '-' + modelNum + '.jpeg';
    
    // Afficher le bouton d'achat Snipcart
    btn.style.display = 'block';
    
    // Configure les options pour Snipcart
    btn.setAttribute('data-item-custom1-name', "Couleur");
    btn.setAttribute('data-item-custom1-value', color);
    btn.setAttribute('data-item-custom2-name', "Taille");
    btn.setAttribute('data-item-custom2-value', size);
    btn.setAttribute('data-item-custom3-name', "Modèle");
    btn.setAttribute('data-item-custom3-value', "Modèle " + modelNum);
    
    // Gère l'apparence des boutons de modèles
    const allModelButtons = document.querySelectorAll('#step3-' + type + ' button');
    allModelButtons.forEach((b, index) => {
        if ((index + 1) === modelNum) {
            b.classList.add('model-active');
        } else {
            b.classList.remove('model-active');
        }
    });
}