import { createStore } from "redux";

const charactersReducer = (
  state = { characters: null, selectedCharacter: null },
  action
) => {
  if (action.type === "SET_CHARACTERS") {
    return {
      ...state,
      characters: action.data,
    };
  }
  if (action.type === "SET_CHARACTER") {
    const character = state.characters.find(
      (character) => character.id === action.id
    );
    return {
      ...state,
      selectedCharacter: character,
    };
  }
  return state;
};

const store = createStore(charactersReducer);

export default store;
