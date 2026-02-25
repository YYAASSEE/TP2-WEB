let N = parseInt(prompt("Combien de cases pour le tableau ?"));
let A = new Array(N);
let nbElemRempli = 0; 

function initialiserTab1() {
    for (let i = 0; i < N; i++) {
        A[i] = 0;
    }
    nbElemRempli = N;
}

function initialiserTab2(valeur) {
    for (let i = 0; i < N; i++) {
        A[i] = valeur;
    }
    nbElemRempli = N;
}

function remplirTab1(min, max) {
    for (let i = 0; i < N; i++) {
        A[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    nbElemRempli = N;
}

function remplirTab2(nbCasesARemplir, min, max) {
    let casesRemplies = 0;
    for (let i = nbElemRempli; i < N && casesRemplies < nbCasesARemplir; i++) {
        A[i] = Math.floor(Math.random() * (max - min + 1)) + min;
        nbElemRempli++;
        casesRemplies++;
    }
}

function afficherTab1() {
    let affichage = "";
    for (let i = 0; i < nbElemRempli; i++) {
        affichage += A[i] + " ";
    }
    console.log("Cases remplies : " + affichage);
}

function afficherTab2() {
    let affichage = "";
    for (let i = 0; i < N; i++) {
        affichage += A[i] + " ";
    }
    console.log("Toutes les cases : " + affichage);
}

function afficherTab3(deb, fin) {
    let affichage = "";
    for (let i = deb; i <= fin && i < N; i++) {
        affichage += A[i] + " ";
    }
    console.log(`Cases de ${deb} à ${fin} : ` + affichage);
}

function remplirElement(valeur) {
    if (nbElemRempli >= N) {
        return false;
    }
    A[nbElemRempli] = valeur;
    nbElemRempli++;
    return nbElemRempli;
}

function saisirTab(nb) {
    let casesSaisies = 0;
    while (casesSaisies < nb && nbElemRempli < N) {
        let valeurSaisie = prompt(`Veuillez saisir la valeur pour la case d'indice ${nbElemRempli} :`);
        A[nbElemRempli] = valeurSaisie;
        nbElemRempli++;
        casesSaisies++;
    }
    return nbElemRempli;
}