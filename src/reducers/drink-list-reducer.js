export default (state = [], action) => {
  const { drink, id } = action;
  switch (action.type) {
    case 'ADD_DRINK':
      return [...state, drink];
    case 'DECREMENT_DRINKSLEFT':
      const currentState = [...state]
      const drinkToEditIndex = [...state].findIndex(drink => drink.id === id)
      currentState[drinkToEditIndex].drinksLeft --
      return currentState
    default:
      return state;
  }
};