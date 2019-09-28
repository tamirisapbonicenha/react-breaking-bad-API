import { FETCH_CHARACTERS } from './actionTypes';

export const fetchCharacters = (payload) => {
  return {
    type: FETCH_CHARACTERS,
    characters: payload,
  }
}