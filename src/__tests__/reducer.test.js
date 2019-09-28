import { charactersReducer } from '../reducers/charactersReducer';
import * as types from '../actions/actionTypes'

const characters = [{
  "char_id": 1,
  "name": "Walter White",
  "birthday": "09-07-1958",
  "occupation": [
    "High School Chemistry Teacher",
    "Meth King Pin"
  ],
  "img": "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
  "status": "Presumed dead",
  "nickname": "Heisenberg",
  "appearance": [
    1,
    2,
    3,
    4,
    5
  ],
  "portrayed": "Bryan Cranston",
},
{
  "char_id": 2,
  "name": "Jesse Pinkman",
  "birthday": "09-24-1984",
  "occupation": [
    "Meth Dealer"
  ],
  "img": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Jesse_Pinkman2.jpg/220px-Jesse_Pinkman2.jpg",
  "status": "Alive",
  "nickname": "Cap n' Cook",
  "appearance": [
    1,
    2,
    3,
    4,
    5
  ],
  "portrayed": "Aaron Paul"
}];

describe('character reducer', () => {
  it('should return the initialState', () => {
    expect(charactersReducer(undefined, {})).toEqual(
      {
        characters: [],
        searching: false,
      }
    )
  })

    it('should handle FETCH_CHARACTERS', () => {
      expect(
        charactersReducer([], {
          type: types.FETCH_CHARACTERS,
          characters: characters,
        })
      ).toEqual(
        {
          characters: characters,
          searching: true,
        }
      )
    })
})