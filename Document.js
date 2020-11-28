function Sum(A,B) {
    return (A+B);
}

const ColorsToIndex = tableau => {
    res = ""
    for (index in tableau) {
        res+= `La couleur à l'index ${index} est ${tableau[index]} \n`;
    }
    return (res);
}

let tabCouleur = ["Bleu","Jaune","Vert","Jaune","Violet","Bleulone"]

for(index in tabCouleur) {
    switch(tabCouleur[index]) {
        case "Bleu":
            console.log(`La couleur à l'index ${index} est: Bleu`);
            break;
        case "Rouge":
            console.log(`La couleur à l'index ${index} est: Rouge`);
            break;
        case "Vert":
            console.log(`La couleur à l'index ${index} est: Vert`);
            break;
        case "Jaune":
            console.log(`La couleur à l'index ${index} est: Jaune`);
            break;
        default:
            console.log(`La couleur ${tabCouleur[index]} n'etait pas attendue`);
    }
}

console.log(ColorsToIndex(["Bleu","Jaune","Vert","Jaune","Violet","Bleulone"]));