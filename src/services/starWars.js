export const getLukeSkywalker = function () {
  return fetch('https://swapi.co/api/people/1')
  .then(res => res.json())
}