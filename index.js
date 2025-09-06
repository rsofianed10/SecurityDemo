

trouverUtilisateur("alice'; DROP TABLE users;--");

const fs = require('fs');
function lireFichier(nomFichier) {

    const chemin = "./data/" + nomFichier;
    return fs.readFileSync(chemin, "utf-8");
}

const { exec } = require('child_process');
function supprimerFichier(fichier) {
   
    const cmd = "rm " + fichier;
    console.log("Commande exécutée :", cmd);

}

supprimerFichier("test.txt; echo HACK"); 
