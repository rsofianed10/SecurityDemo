
const { exec } = require('child_process');
function supprimerFichier(fichier) {

    const cmd = "rm " + fichier;
    console.log("Commande exécutée :", cmd);

}
supprimerFichier("test.txt; echo HACK"); 
trouverUtilisateur("alice'; DROP TABLE users;--");