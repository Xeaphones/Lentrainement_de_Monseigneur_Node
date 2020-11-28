let entreeStandard = process.stdin;
entreeStandard.setEncoding("utf-8")
console.log("Combien d'alumettes voulez vous enlever ?. \nDites \'exit\' pour quitter.");

let nbAlumette = 13
entreeStandard.on("data", function(data) {
    if (data === "exit\n" || data === "exit\r\n" ) {
        console.log("Termination du mini-jeu, fermuture du programme.");
        process.exit();
    }
    else if (data !== "\r\n" && data !== "\n") {
        if((data != "1\n" && data != "1\r\n") && (data != "2\n" && data != "2\r\n") && (data != "3\n" && data != "3\r\n")) {
            console.log("Vous n'avez pas choisi un nombre valide d'allumette à enlever. Tricheur.")
        }
        else{
            console.log(`Tu as choisi d'enlever ${data} allumette(s)`)
        }
    }
});