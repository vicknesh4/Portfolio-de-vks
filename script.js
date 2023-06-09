

    // Sélectionnez tous les liens de la barre de navigation
    const navLinks = document.querySelectorAll('.nav-link');

    // Parcourez chaque lien
    navLinks.forEach(link => {
        // Ajoutez un gestionnaire d'événement de clic à chaque lien
        link.addEventListener('click', (event) => {
            // Empêchez le comportement par défaut du lien
            event.preventDefault();

            // Obtenez l'ID de la section cible à partir de l'attribut href du lien
            const targetId = link.getAttribute('href');

            // Sélectionnez la section cible
            const targetSection = document.querySelector(targetId);

            // Faites défiler la fenêtre jusqu'à la section cible avec une animation fluide
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });




// Sélection du bouton
const button = document.querySelector('.presentation button');

// Ajout de l'événement de survol
button.addEventListener('mouseover', () => {
  button.style.transform = 'scale(1.1)';
  button.style.backgroundColor = 'white';
  button.style.color = 'black';
  button.style.transition = 'transform 0.3s, background-color 0.3s, color 0.3s';
});

// Ajout de l'événement lorsque le curseur quitte le bouton
button.addEventListener('mouseout', () => {
  button.style.transform = 'scale(1)';
  button.style.backgroundColor = '';
  button.style.color = '';
  button.style.transition = 'transform 0.3s, background-color 0.3s, color 0.3s';
});


// Sélectionnez tous les éléments avec la classe "compartiment"
const compartiments = document.querySelectorAll(".compartiment");

// Parcourir chaque compartiment
compartiments.forEach((compartiment) => {
  // Écoutez l'événement "mouseover" (survol de la souris)
  compartiment.addEventListener("mouseover", () => {
    // Ajoutez une classe CSS pour appliquer l'effet de zoom
    compartiment.classList.add("zoom-effect");
  });

  // Écoutez l'événement "mouseout" (quand la souris quitte le compartiment)
  compartiment.addEventListener("mouseout", () => {
    // Supprimez la classe CSS pour désactiver l'effet de zoom
    compartiment.classList.remove("zoom-effect");
  });
});




// Sélection du bouton

// Sélection de la section Profil
const profilSection = document.querySelector('.profil.section');

// Ajout de l'événement de clic sur le bouton
button.addEventListener('click', () => {
  profilSection.scrollIntoView({ behavior: 'smooth' });
});




window.addEventListener('load', function() {
    var loadingScreen = document.getElementById('loading-screen');

    setTimeout(function() {
        loadingScreen.classList.add('fade-out');

        setTimeout(function() {
            loadingScreen.style.display = 'none';
        }, 500); // Durée de la transition CSS en millisecondes
    }, 2000); // Modifier la valeur (en millisecondes) pour ajuster la durée d'affichage de l'écran de chargement

    loadingScreen.style.display = 'flex';
});





window.addEventListener('load', function() {
    var presentation = document.querySelector('.premiere_page .presentation');

    setTimeout(function() {
        presentation.classList.add('show');
    }, 1000); // Modifier la valeur (en millisecondes) pour ajuster le délai d'apparition du contenu
});









const imgprofil = document.querySelectorBy(".photo_de_profil");

  // Écoutez l'événement "mouseover" (survol de la souris)
  compartiment.addEventListener("mouseover", () => {
    // Ajoutez une classe CSS pour appliquer l'effet de zoom
    compartiment.classList.add("zoom-effect");
  });

  // Écoutez l'événement "mouseout" (quand la souris quitte le compartiment)
  compartiment.addEventListener("mouseout", () => {
    // Supprimez la classe CSS pour désactiver l'effet de zoom
    compartiment.classList.remove("zoom-effect");
  });
;
