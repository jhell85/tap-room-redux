import * as a from "../actions"

import DrinkList from "./DrinkList"
import NewDrinkForm from "./NewDrinkForm"
import React from 'react'
import {connect} from "react-redux"

class DrinkControl extends React.Component {
 
  
  handleClick = () => {
   this.props.dispatch(a.toggleCreate())
  };

  handleAddingNewDrinkToList = (newDrink) => {
    this.props.dispatch({ type: "ADD_DRINK", drink: newDrink })
    this.props.dispatch({ type: "TOGGLE_CREATE" })
  };

  handleDrinkPour = (id) => {
    this.props.dispatch({ type: "DECREMENT_DRINKSLEFT", id: id }) 
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.props.formVisibleOnPage){
      currentlyVisibleState = <NewDrinkForm onNewDrinkCreation={this.handleAddingNewDrinkToList} />
      buttonText = "Return to Drink List"
    } else {
      currentlyVisibleState = (<DrinkList drinkList={this.props.drinkList} drinkPouredClicked={this.handleDrinkPour} />)
      buttonText = "Add a Drink"
    }
    return (
      <React.Fragment>
        <button class= "btn btn-success button-style" onClick={this.handleClick}>{buttonText}</button>
        {currentlyVisibleState}
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    drinkList: state.drinkList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}
DrinkControl = connect(mapStateToProps)(DrinkControl)
export default DrinkControl