// var apiURL = "https://api.thedogapi.com/v1"
var apiKey = "&api_key=live_vqm057yKxYgjVnFyPLRJ1YAljtY8n1Qc6c4oUAF9Uv8UVnUTC4qKi1noDSljZ2No"

const select = document.querySelector('.breed-choice');
const dogImgEl = document.querySelector('.dog-img');
const dogInfoEl = document.querySelector('.dog-info');

const getAllDogBreeds = async () => {
    const response = await fetch('https://api.thedogapi.com/v1/breeds')
    const breeds = await response.json()
    return breeds
}

const getDogBreedId = async (breedId) => {
    const response = await fetch(
        'https://api.thedogapi.com/v1/images/search?include_breed=1&breed_id=' +
        breedId
    );
    const [dogData] = await response.json();
    return dogData
}

const createDogData = (dogData) => {
  document.body.lastChild.remove()
  dogImgEl.setAttribute('src', dogData.url);
  const dogInfo = `${dogData.breeds[''].name} is ${dogData.breeds[''].temperament} and was used for ${dogData.breeds[''].bred_for}`;
  const dogInfoEl = document.createElement('p');
  dogInfoEl.textContent = dogInfo;
  document.body.appendChild(dogInfoEl);
}

const getUserBreeds = (breeds) => {
  breeds.forEach((breed) => {
    const option = document.createElement('option');
    option.text = breed.name;
    option.value = breed.id;
    select.appendChild(option);
  });
};

select.addEventListener('change', async (event) => {
  console.log(event.target.value);
  const breedId = event.target.value;
  const dogData = await getDogBreedId(breedId);
  createDogData(dogData);
});

const init = async () => {
  const breeds = await getAllDogBreeds();
  getUserBreeds(breeds);
};

init();
