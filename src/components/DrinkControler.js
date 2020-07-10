import {} from '../actions'

import DrinkList from "./DrinkList"
import NewDrinkForm from "./NewDrinkForm"
import React from 'react'
import {connect} from "react-redux"

class DrinkControl extends React.Component {
 
  
  handleClick = () => {
    this.props.dispatch({ type: "TOGGLE_CREATE" })
  };

  handleAddingNewDrinkToList = (newDrink) => {
    this.props.dispatch({ type: "ADD_DRINK", drink: newDrink })
    this.props.dispatch({ type: "TOGGLE_CREATE" })
  };

  handleDrinkPour = (id) => {
    // const selectedDrink = this.state.masterDrinkList.filter((drink) => drink.id === id)[0];
    // if (selectedDrink.drinksLeft === 0) {
    //   alert("sorry we're out of this drink")
    // } else {
    //   selectedDrink.drinksLeft --;
    // }
    // const upadatedDrinkList = this.state.masterDrinkList.filter(drink => drink.id !== id).concat(selectedDrink)
    // this.setState({
    //   masterDrinkList: upadatedDrinkList
    // })
    // console.log(id)
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