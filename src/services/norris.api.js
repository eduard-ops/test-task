const BAZE_URL = 'https://api.chucknorris.io';

async function mainFetchApi(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchCategories() {
  return mainFetchApi(`${BAZE_URL}/jokes/categories`);
}

export function fetchCategoriesByName(name) {
  return mainFetchApi(`${BAZE_URL}/jokes/random?category=${name}`);
}

export function fetchRandomJoke() {
  return mainFetchApi(`${BAZE_URL}/jokes/random`);
}
