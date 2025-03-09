/*
/pokemons/1
/pokemons/2
/pokemons/3
/pokemons/4
/pokemons/5
/pokemons/bulbasaur
/pokemons/page/1
/pokemons/page/2
/pokemons/page/3
/pokemons/page/4
/pokemons/page/5
*/

const TOTAL_POKEMONS = 151;
const TOTAL_PAGES = 5;

(async () => {

  const fs = require('fs')

  // Pokémons por Ids
  const pokemonIds = Array.from({ length: TOTAL_POKEMONS }, (_, i) => i + 1)
  let fileContent = pokemonIds.map(
    id => `/pokemons/${id}`
  ).join('\n');

  // Páginas de Pokémons
  // for (let index = 1; index <= TOTAL_PAGES; index++) {
  //   fileContent += `\n/pokemons/page/${index}`
  // }
  const pokemonPages = Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1)
  fileContent += '\n' + pokemonPages.map(
    page => `/pokemons/page/${page}`
  ).join('\n');

  // Por nombres de Pokemons
  const pokemonNameList = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${TOTAL_POKEMONS}`)
    .then(res => res.json())

  fileContent += '\n';
  fileContent += pokemonNameList.results.map(
    ({name}) => `/pokemons/${name}`
  ).join('\n');

  fs.writeFileSync('routes.txt', fileContent);
  console.log('Routes.txt Generated')
})();
