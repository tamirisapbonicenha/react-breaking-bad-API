import { FETCH_CHARACTERS } from '../actions/actionTypes';

const initialState = {
  characters: [],
  searching: false,
}

export const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return {
        ...state,
        characters: action.characters,
        searching: true,
      }
    default:
      return state;
  }
}
