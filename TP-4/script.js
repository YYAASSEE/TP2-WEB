
let N = parseInt(prompt("Taille du tableau ?"));
let A = new Array(N);
let nbElemRempli = 0;


function initialiserTab1() {
    for (let i = 0; i < N; i++) {
        A[i] = 0;
    }
    nbElemRempli = N;
    alert("Tableau initialisé !");
}


function afficherTab2() {
    for (let i = 0; i < N; i++) {
        console.log("Case " + i + " contient : " + A[i]);
    }
}