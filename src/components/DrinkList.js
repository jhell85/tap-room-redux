import React from "react";
import Drink from "./Drink";
import PropTypes from "prop-types";


function DrinkList(props) {
  const sortedList = props.drinkList.sort((a,b)=>a.timeStamp.getTime()-b.timeStamp.getTime());
  return (
    <div class="row justify-content-md-center">
      <React.Fragment>
        {sortedList.map((drink) => 
        <div class=" pt-3 col-md-3">
          <Drink 
          drinkPouredClicked = {props.drinkPouredClicked}
          name = {drink.name}
          brand = {drink.brand}
          alcoholContent = {drink.alcoholContent}
          price = {drink.price}
          drinksLeft = {drink.drinksLeft}
          id = {drink.id} />
        </div>
        )}
      </React.Fragment>
    </div>
  )
}
DrinkList.propTypes ={
  drinkList: PropTypes.array,
  drinkPouredClicked: PropTypes.func

}
export default DrinkList;