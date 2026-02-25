// Déclaration de base imposée
let N = parseInt(prompt("Combien de case pour le tableau ?"));
let A = new Array(N);
let nbElemRempli = 0;

// EXERCICE 1
function initialiserTab1() {
    for (let i = 0; i < N; i++) {
        A[i] = 0;
    }
    nbElemRempli = N;
}

// EXERCICE 2
function initialiserTab2(valeur) {
    for (let i = 0; i < N; i++) {
        A[i] = valeur;
    }
    nbElemRempli = N;
}

// EXERCICE 3
function remplirTab1(min, max) {
    for (let i = 0; i < N; i++) {
        A[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    nbElemRempli = N;
}

// EXERCICE 4
function remplirTab2(nbCases, min, max) {
    let limite = nbElemRempli + nbCases;
    if (limite > N) {
        limite = N; 
    }
    for (let i = nbElemRempli; i < limite; i++) {
        A[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    nbElemRempli = limite;
}

// EXERCICE 5
function afficherTab1() {
    let affichage = "";
    for (let i = 0; i < nbElemRempli; i++) {
        affichage += A[i] + " ";
    }
    console.log(affichage);
}

// EXERCICE 6
function afficherTab2() {
    let affichage = "";
    for (let i = 0; i < N; i++) {
        affichage += A[i] + " ";
    }
    console.log(affichage);
}

// EXERCICE 7
function afficherTab3(deb, fin) {
    let affichage = "";
    for (let i = deb; i <= fin && i < N; i++) {
        affichage += A[i] + " ";
    }
    console.log(affichage);
}

// EXERCICE 8
function remplirElement(valeur) {
    if (nbElemRempli >= N) {
        return false;
    }
    A[nbElemRempli] = valeur;
    nbElemRempli++;
    return nbElemRempli;
}

// EXERCICE 9
function saisirTab(nb) {
    let limite = nbElemRempli + nb;
    if (limite > N) {
        limite = N;
    }
    for (let i = nbElemRempli; i < limite; i++) {
        A[i] = prompt(`Saisir la valeur pour la case d'indice ${i} :`);
    }
    nbElemRempli = limite;
    return nbElemRempli;
}