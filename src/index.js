import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_e9pCKmfCwK8PjBFndgUobF57xT1prqJWJGgMbl9HQomMP1Re320rQZmPghZUgxWs";
import Notiflix from 'notiflix';
import SlimSelect from 'slim-select'

new SlimSelect({
  select: 'cat-info'
})

const infoCat = document.querySelector(".cat-info");
const breedSelect = document.querySelector(".breed-select");
const loader = document.querySelector(".loader");
const error = document.querySelector(".error");


    
function fetchBreeds() {
    const response = axios.get(
        "https://api.thecatapi.com/v1/breeds"
      );
      return response.data;
}
console.log(fetchBreeds());