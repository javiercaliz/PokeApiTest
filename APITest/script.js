//Constantes
const searchButton = document.getElementById("searchButton");
const PName = document.getElementById("name");
const PDescription = document.getElementById("description");
const PImage = document.getElementById("image");


//Funciones
const searchPokemon = async () => {
	const pokemonName = document.getElementById("search").value;
	const requestURL = (`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`); 
    const request = new Request(requestURL);
    const response = await fetch(request);
    const data = await response.json(); 
    cardFill(data);
}

function cardFill(data) {
    PImage.src = data.sprites.front_default;
    PName.textContent = data.name.toUpperCase();
    PDescription.innerHTML = `<b>Altura:</b> ${data.height}<br>
    <b>Movimiento Principal:</b> ${data.moves[0].move.name}<br>
    <b>Tipo:</b> ${data.types[0].type.name}<br>`;
}


//Listeners
searchButton.addEventListener("click", searchPokemon);