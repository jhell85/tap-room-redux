import React from "react";
import PropTypes from "prop-types";

function Drink(props){

 
  return(
    <React.Fragment>
      <h3>{props.name}</h3>
      <p>{props.brand}</p>
      <p>{props.alcoholContent}</p>
      <p>{props.price}</p>
      <p>{props.drinksLeft}</p>
      <button class="btn btn-warning" onClick= {() => props.drinkPouredClicked(props.id)}>take a drink</button>
    </React.Fragment>
  );
}

Drink.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  drinksLeft: PropTypes.number.isRequired,
  id: PropTypes.string,
  drinkPouredClicked: PropTypes.func
};
export default Drink;