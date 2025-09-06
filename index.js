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