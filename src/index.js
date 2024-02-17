import Notiflix from 'notiflix';
import { fetchBreeds, fetchCatByBreed } from "./cat-api";


const infoCat = document.querySelector(".cat-info");
const breedSelect = document.querySelector(".breed-select");
const loader = document.querySelector(".loader");
const errorWindow = document.querySelector(".error");

loader.style.display = 'none';
errorWindow.style.display = 'none';

function populateBreedsSelect(breeds) {
  breeds.forEach(breed => {
     const option = document.createElement("option");
     option.value = breed.id;
      option.textContent = breed.name;
      breedSelect.appendChild(option);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  fetchBreeds()
      .then(breeds => {
          populateBreedsSelect(breeds);
      })
      .catch(error => {
        Notiflix.Notify.failure("Faild to load cat breeds", error);
          loader.style.display = 'none';
          errorWindow.style.display = 'block';
      });
});

breedSelect.addEventListener('change', function(){
    const breedId = breedSelect.value;

    loader.style.display = 'block';
    infoCat.style.display = 'none';
    errorWindow.style.display = 'none';

    fetchCatByBreed(breedId)
    .then(catData => {
      console.log(catData);
      infoCat.innerHTML = 
     `
     <div class="container">
     <img src= ${catData[0].url} alt="Cat image"></img>
     <div class="animal-description">
       <h2> ${catData[0].breeds[0].name}</h2>
       <p class="description"> ${catData[0].breeds[0].description}</p>
       <p class="temperament"> <span>Temperament:</span> ${catData[0].breeds[0].temperament}</p>
     </div>
     </div>
      
     `

      infoCat.style.display = 'block';
      loader.style.display = 'none';
    })
    .catch(error => {
      Notiflix.Notify.failure("Faild to load cat info", error);
      loader.style.display = 'none';
      errorWindow.style.display = 'block';
    })
})