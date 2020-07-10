export default (state = [], action) => {
  const { drink, id } = action;
  switch (action.type) {
    case 'ADD_DRINK':
      const tempState = [...state]
      tempState.push(drink)
      return tempState
    default:
      return state;
  }
};