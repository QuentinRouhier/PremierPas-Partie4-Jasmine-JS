/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    texte = texte.length; //Donner le nombre  caractères dans la chaine
    return texte;
}
var remplaceECar = function (texte) {
    texte = texte.replace('e',' ');//Remplacer le premier e de la chaine par un espace
    return texte;
}
var concatString = function (texte1, texte2) {
    return texte1.concat(texte2);//Concatener les deux chaines de caractères
}
var afficherCar5 = function (texte) {
  texte = texte.charAt(4);//Afficher le cinquième caractère de la chaine
    return texte;
}
var afficher9Car = function (texte) {
  texte = texte.substr(0,9);//Afficher les 9 premiers caractères
    return texte;
}
var majusculeString = function (texte) {
   texte = texte.toUpperCase();//Mettre en majuscule la chaine
    return texte;
}
var minusculeString = function (texte) {
  texte = texte.toLowerCase();//Mettre en minuscule la chaine
    return texte;
}
var SupprEspaceString = function (texte) {
  texte = texte.trim();//Supprimer les espaces avant et après la chaine
    return texte;
}
var IsString = function (texte) {
/* texte = true #laTruandise
Afficher true si le parametre d'entrée de la fonction est de type string*/
    return typeof texte == 'string';
}
var AfficherExtensionString = function (texte) {
  /*Afficher l'extension du fichier des que
  tu trouve la valeur du split tu stop la chaine de caractere et divise
  en deux partit dans un tableau*/
    return texte.split('.').pop();
}
var NombreEspaceString = function (texte) {
  //Compter le nombre d'espace dans la chaine un espace de moins que de mots
    return texte.split(" ").length - 1;
}
var InverseString = function (texte) {
    return texte.split("").reverse().join("");//Inverser une chaine de caractères
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return  Math.pow(x, y);//Calculer la puissance d'un nombre par rapport à un autre (x à la puissance y)
}
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre);//Afficher la valeur absolue d'un nombre
}
var valeurAbsolueArray = function (array) {
    return array.map(Math.abs);//Afficher les valeurs absolues de plusieurs nombres
}
var sufaceCercle = function (rayon) {

    return Math.round(Math.PI * rayon * rayon);//Calculer la surface d'un cercle en fonction de son rayon. L'arondir à l'entier le plus proche
}
var hypothenuse = function (ab, ac) {
  // ou return Math.hypot(ab, ac) <- c'st mieu de faire ca
    return Math.sqrt(ab *ab + ac * ac);//Calculer l'hypthènuse d'un triangle rectangle
}
var calculIMC = function (poids, taille) {
    return parseFloat((poids/(taille*taille)).toFixed(2));//Calculer l'IMC (Poids / (taille x taille).Ne garder que deux chiffres après la virgule.x
}
