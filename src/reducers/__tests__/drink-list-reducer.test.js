import drinkListReducer from '../drink-list-reducer'

describe('drinkListReducer', () =>{
  test('should return default state if there is no action passed into reducer', () => {
    expect(drinkListReducer([], {type: null})).toEqual([]);
  })
})