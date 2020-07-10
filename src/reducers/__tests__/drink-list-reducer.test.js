import drinkListReducer from '../drink-list-reducer'

describe('drinkListReducer', () =>{
  test('should return default state if there is no action passed into reducer', () => {
    expect(drinkListReducer([], {type: null})).toEqual([]);
  });

  test ('should return an array with one drink added to it', ()=> {
    const drink = {name: "Hop Master", brand: "beer land", alcoholContent: 5, price: 2, drinksLeft: 124, timeStamp: new Date(), id: 1}
    expect(drinkListReducer([], {type: 'ADD_DRINK', drink })).toEqual([drink])
  });
})