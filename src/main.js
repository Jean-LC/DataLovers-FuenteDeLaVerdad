import { showData, orderAZ, orderZA, randomData } from './data.js';
import data from './data/ghibli/ghibli.js'

let onScreenData = [];
const textNav = document.getElementById("textNav");
const btnNav = document.getElementById("btnNav");
const btnMovies = document.getElementById("btnMovies");
const btnCharacters = document.getElementById("btnCharacters");
const btnVehicles = document.getElementById("btnVehicles");
const btnLocations = document.getElementById("btnLocations");
const btnShowAll = document.getElementById("btnShowAll");
const btnOrderAZ = document.getElementById("btnOrderAZ");
const btnOrderZA = document.getElementById("btnOrderZA");
const btnTrivia = document.getElementById("btnTrivia");

// SIDE NAV
btnNav.addEventListener("click", () => {
    textNav.addEventListener("click", () => { textNav.style.display = "none"})
    textNav.style.display = "block";
});


//FUNCIÓN PARA BORRAR EL CONTENIDO
const eraseAll = (sectionToErase) => {
    document.getElementById("trivia").style.display = "none";
    let allData = document.getElementsByClassName(sectionToErase);
    while (allData.length > 0) allData[0].remove();
}


//CLONER
let firstDiv = document.getElementById("cloneSection");
let cloner = (filmData) => {
    let secondDiv = firstDiv.cloneNode(true);
    secondDiv.id = filmData.id;
    secondDiv.children[1].src = filmData.img;
    secondDiv.children[0].innerText = filmData.name;
    secondDiv.addEventListener('click', function () { dataWindow(secondDiv.id); });
    document.getElementById('bigDivs').appendChild(secondDiv);
    secondDiv.style.display = 'block';
}



//MOSTRAR DIV CON MÁS INFORMACIÓN
const showData2 = document.getElementById("root");
showData2.addEventListener('click', () => showData2.style.display = 'none')
function dataWindow(filmID) {
    eraseAll("paragraph")

    showData2.style.display = "block"
    onScreenData.forEach(item => {
        if (filmID === item.id) {
            for (let i = 0; i < 7; i++) {
                let paragraph = document.createElement("p");
                paragraph.innerText = (Object.keys(item)[i] + ": " + Object.values(item)[i]);
                paragraph.className = "paragraph";
                document.getElementById("root").appendChild(paragraph);
            }
        }

    })
}


//BOTON PARA FILTRADO PELÍCULAS
btnMovies.addEventListener("click", () => {
    eraseAll("sectionToClone");

    data.films.forEach(cloner);
    onScreenData = data.films;
})

//BOTÓN PARA FILTRADO PERSONAJES
btnCharacters.addEventListener("click", () => {
    eraseAll("sectionToClone");

    showData(data.films, "people").forEach(cloner);
    onScreenData = showData(data.films, "people");
})

//BOTÓN PARA FILTRADO VEHÍCULOS
btnVehicles.addEventListener("click", () => {
    eraseAll("sectionToClone");

    showData(data.films, "vehicles").forEach(cloner);
    onScreenData = showData(data.films, "vehicles");
})

//BOTÓN PARA FILTRADO LOCACIONES
btnLocations.addEventListener("click", () => {
    eraseAll("sectionToClone");

    showData(data.films, "locations").forEach(cloner);
    onScreenData = showData(data.films, "locations");
})

//BOTÓN PARA MOSTRAR TODO
btnShowAll.addEventListener("click", () => {
    eraseAll("sectionToClone");

    data.films.forEach(cloner);
    showData(data.films, "people").forEach(cloner);
    showData(data.films, "vehicles").forEach(cloner);
    showData(data.films, "locations").forEach(cloner);
    onScreenData = data.films.concat(showData(data.films, "people"), showData(data.films, "vehicles"), showData(data.films, "locations"));
})

//MOSTRAR TODO AL INICIO DE LA PÁGINA
const initialData = () => {
    data.films.forEach(cloner);
    showData(data.films, "people").forEach(cloner);
    showData(data.films, "vehicles").forEach(cloner);
    showData(data.films, "locations").forEach(cloner);
    onScreenData = data.films.concat(showData(data.films, "people"), showData(data.films, "vehicles"), showData(data.films, "locations"));
}
initialData();

//BOTONES PARA ORDENAR A-Z
btnOrderAZ.addEventListener("click", () => {
    eraseAll("sectionToClone");

    onScreenData = orderAZ(onScreenData);
    onScreenData.forEach(cloner);

})

//BOTÓN PARA ORDENAR Z-A
btnOrderZA.addEventListener("click", () => {
    eraseAll("sectionToClone");

    onScreenData = orderZA(onScreenData);
    onScreenData.forEach(cloner);
})


//CLONER PARA TRIVIA
let triviaCloner = (filmData, requiredQuestion, requiredAnswer) => {
    let secondDiv = firstDiv.cloneNode(true);
    secondDiv.id = filmData.id;
    secondDiv.children[1].src = filmData.img;
    secondDiv.children[0].innerText = requiredQuestion;
    secondDiv.addEventListener('click', function () { secondDiv.children[0].innerText = filmData[requiredAnswer];});
    document.getElementById('bigDivs').appendChild(secondDiv);
    secondDiv.style.display = 'block';
}

//BOTÓN TRIVIA
btnTrivia.addEventListener("click", () => {
    eraseAll("sectionToClone");
    document.getElementById("trivia").style.display = "block";
    triviaCloner(randomData(data.films), "What's the rt score?", "rt_score");
    triviaCloner(randomData(showData(data.films, "people")), "What's the character's name?", "name");
    triviaCloner(randomData(showData(data.films, "vehicles")), "What's the vehicle class?", "vehicle_class");
    triviaCloner(randomData(showData(data.films, "locations")), "Where's this place?", "name");
} )
