// nouveau code du dévoloppeur teste faille de sécurité
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
// Exemple d'utilisation  
evaluerChaine("10 + 2");
evaluerChaine("10 + 2");
evaluerChaine("10 + 2");

// Exemple vulnérable (ne jamais faire ça)
function afficherCommentaire(commentaire) {
    document.body.innerHTML = "Commentaire : " + commentaire;
}
function afficherCommentaire(commentaire) {
    const p = document.createElement('p');
    p.textContent = "Commentaire : " + commentaire; // textContent échappe le HTML
    document.body.appendChild(p);
}

function afficherCommentaire(commentaire) {
    // ⚠️ vulnérabilité : innerHTML avec input utilisateur
    document.getElementById("output").innerHTML = "Commentaire : " + commentaire;
}

// Test
afficherCommentaire('<img src="x" onerror="alert(\'XSS Test\')">');

function trouverUtilisateur(username) {
    // ⚠️ vulnérabilité : concaténation de chaîne dans requête SQL
    const query = "SELECT * FROM users WHERE name = '" + username + "'";
    console.log("Requête SQL générée :", query);
}

// Test
trouverUtilisateur("alice'; DROP TABLE users;--");

const fs = require('fs');
function lireFichier(nomFichier) {
    // ⚠️ vulnérabilité : chemin non filtré
    const chemin = "./data/" + nomFichier;
    return fs.readFileSync(chemin, "utf-8");
}

// Test
// lireFichier("../../etc/passwd"); // danger simulé, ne pas exécuter sur un vrai système
const { exec } = require('child_process');
function supprimerFichier(fichier) {
    // ⚠️ vulnérabilité : commande shell construite à partir de l'input utilisateur
    const cmd = "rm " + fichier;
    console.log("Commande exécutée :", cmd);
    // exec(cmd); // Ne pas exécuter réellement
}

// Test
supprimerFichier("test.txt; echo HACK"); // injecte du code dans la commande
