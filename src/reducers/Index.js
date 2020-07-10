import { combineReducers } from 'redux';
import drinkListReducer from './drink-list-reducer';
import formReducer from './form-reducer';

const rootReducer = combineReducers({
  drinkList: drinkListReducer,
  formVisibleOnPage: formReducer

});

export default rootReducer