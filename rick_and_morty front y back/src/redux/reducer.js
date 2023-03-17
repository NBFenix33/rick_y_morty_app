import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
  allMyFavorites: [],
  myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      const addFavorites = [...state.allMyFavorites, action.payload];
      return {
        ...state,
        allMyFavorites: [...addFavorites],
        myFavorites: [...addFavorites],
      };
    case REMOVE_FAV:
      const deleteFavorites = state.allMyFavorites.filter(
        (e) => e.id !== action.payload
      );
      return {
        ...state,
        allMyFavorites: [...deleteFavorites],
        myFavorites: [...deleteFavorites],
      };
    case FILTER:
      return {
        ...state,
        myFavorites: state.allMyFavorites.filter(
          (e) => e.gender === action.payload
        ),
      };
    case ORDER:
      let orderFavorites;
      if (action.payload === "Ascendente") {
        orderFavorites = state.myFavorites.sort((a, b) =>
          a.id > b.id ? 1 : -1
        );
      } else {
        orderFavorites = state.myFavorites.sort((a, b) =>
          a.id < b.id ? 1 : -1
        );
      }
      return {
        ...state,
        myFavorites: [...orderFavorites],
      };
    case "RESET":
      return {
        ...state,
        myFavorites: state.allMyFavorites,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
