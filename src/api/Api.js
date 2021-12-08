const BASE_URL = "https://pokeapi.co/api/v2/";

export const getData = (endpoint) =>
  fetch(`${BASE_URL}${endpoint}`).then((res) => res.json());
