const BASE_URL = "https://practiceapi.devmountain.com/products";

export function index() {
  return fetch(BASE_URL)
  .then( response => response.json());
};

export function get(id) {
  return fetch(`${BASE_URL}/${id}`)
  .then( response => response.json());
}