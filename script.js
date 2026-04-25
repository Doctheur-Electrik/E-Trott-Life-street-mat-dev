// GESTION DU CHOIX DE COULEUR
function changeColor(type) {
    const color = document.getElementById('color-' + type).value;
    const img = document.getElementById('img-' + type);
    const step2 = document.getElementById('step2-' + type);
    const btn = document.getElementById('btn-' + type);

    if (color) {
        // Change l'image pour le modèle 1 de la couleur choisie
        img.src = 'image/produit/' + type + '/' + type + '-' + color + '-1.jpeg';
        // Affiche l'étape suivante (Taille)
        step2.style.display = 'block';
        // Cache le bouton panier tant que tout n'est pas fini
        btn.style.display = 'none';
    }
}

// GESTION DU CHOIX DE TAILLE
function updateStep(type, nextStep) {
    const size = document.getElementById('size-' + type).value;
    const nextDiv = document.getElementById('step' + nextStep + '-' + type);

    if (size) {
        nextDiv.style.display = 'block';
    }
}

// FINALISATION ET AFFICHAGE DU BOUTON PANIER
function finalize(type, modelNum) {
    const color = document.getElementById('color-' + type).value;
    const size = document.getElementById('size-' + type).value;
    const btn = document.getElementById('btn-' + type);
    const img = document.getElementById('img-' + type);
    
    // Met à jour l'image finale
    img.src = 'image/produit/' + type + '/' + type + '-' + color + '-' + modelNum + '.jpeg';
    
    // Affiche le bouton d'achat Snipcart
    btn.style.display = 'block';
    
    // Configure les options pour Snipcart
    btn.setAttribute('data-item-custom1-name', "Couleur");
    btn.setAttribute('data-item-custom1-value', color);
    btn.setAttribute('data-item-custom2-name', "Taille");
    btn.setAttribute('data-item-custom2-value', size);
    btn.setAttribute('data-item-custom3-name', "Modèle");
    btn.setAttribute('data-item-custom3-value', "Modèle " + modelNum);
    
    // Gère l'apparence des boutons de modèles
    document.querySelectorAll('#step3-' + type + ' button').forEach((b, i) => {
        b.classList.toggle('model-active', (i + 1) === modelNum);
    });
}

// GESTION DE LA FAQ (ACCORDÉON)
document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            // Ferme les autres items ouverts (optionnel)
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item) otherItem.classList.remove('active');
            });
            // Ouvre/Ferme l'item cliqué
            item.classList.toggle('active');
        });
    });
});