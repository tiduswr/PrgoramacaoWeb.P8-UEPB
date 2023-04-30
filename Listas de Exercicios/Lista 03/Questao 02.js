/*
    Foi necessário retirar o tipo para funcionar fora do Javascript puro
*/
const any = {
    autor: "Demetrio Mestre",
    endereco: {
        rua: "Rua Qualquer",
        suite: "JS",
        cidade: "Campina Grande",
        CEP: "581415-145",
        geo: {
            lat: "13.51",
            lng: "52.54"
        }
    }
}

let {autor, endereco : {cidade, geo : {lat, lng}}} = any

console.log(`${autor} - ${cidade} (${lat}, ${lng}).`);