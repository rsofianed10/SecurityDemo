
function evaluerChaine(chaine) {
    try {
        const resultat = eval(chaine);
        console.log("Résultat évaluation:", resultat);
        return resultat;
    } catch (error) {
        console.error("Erreur lors de l'évaluation:", error);
        return null;
    }
}

evaluerChaine("10 + 2");
evaluerChaine("10 + 2");
evaluerChaine("10 + 2");


function afficherCommentaire(commentaire) {
    document.body.innerHTML = "Commentaire : " + commentaire;
}
function afficherCommentaire(commentaire) {
    const p = document.createElement('p');
    p.textContent = "Commentaire : " + commentaire; 
    document.body.appendChild(p);
}

function afficherCommentaire(commentaire) {

    document.getElementById("output").innerHTML = "Commentaire : " + commentaire;
}


afficherCommentaire('<img src="x" onerror="alert(\'XSS Test\')">');

function trouverUtilisateur(username) {

    const query = "SELECT * FROM users WHERE name = '" + username + "'";
    console.log("Requête SQL générée :", query);
}


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

supprimerFichier("test.txt; echo HACK"); /
