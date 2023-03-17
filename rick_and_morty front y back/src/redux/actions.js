export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export function addFav(personaje) {
  return {
    type: ADD_FAV,
    payload: personaje,
  };
}

export function removeFav(id) {
  return {
    type: REMOVE_FAV,
    payload: id,
  };
}

export function filterCards(status) {
  return {
    type: FILTER,
    payload: status,
  };
}

export function orderCards(id) {
  return {
    type: ORDER,
    payload: id,
  };
}
