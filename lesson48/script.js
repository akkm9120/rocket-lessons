const main = async () => {
  // first fetch charizard
  const charizard = await fetchCharizard();

  // select the container div
  const imageContainer = document.querySelector('.charizard');
  // create a new img
  img = document.createElement('img');
  // add the charizard img url to the img src
  img.src = charizard.sprites.back_default;
  img.alt = 'This is a charizard';

  // append the img to the container
  imageContainer.append(img);
};

const fetchCharizard = async () => {
  // fetch charizard
  const charizard = await fetch('https://pokeapi.co/api/v2/pokemon/charizard')
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  // return the charizard
  return charizard;
};

const button = document.querySelector('button');
button.addEventListener('click', main);
