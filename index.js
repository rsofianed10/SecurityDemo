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
