import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_e9pCKmfCwK8PjBFndgUobF57xT1prqJWJGgMbl9HQomMP1Re320rQZmPghZUgxWs";


export async function fetchBreeds() {
  const response = await axios.get("https://api.thecatapi.com/v1/breeds");
  return response.data;
}

export function fetchCatByBreed(breedId) {
  return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
  .then(response => response.data)
  .catch(error => {
    Notiflix.Notify.failure(`Error fetching cat information for breed ${breedId}`, error)
  });
}


