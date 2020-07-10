export default (state = [], action) => {
  const { drink, id } = action;
  switch (action.type) {
    case 'ADD_DRINK':
      return [...state, drink];
    default:
      return state;
  }
};