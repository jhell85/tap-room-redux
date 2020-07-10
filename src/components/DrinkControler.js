import React from 'react'
import NewDrinkForm from "./NewDrinkForm"
import DrinkList from "./DrinkList"

class DrinkControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterDrinkList: []
    }
  }
  
  handleClick = () => {
    this.setState((prevState) => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
    }))
  };
  handleAddingNewDrinkToList = (newDrink) => {
    const newMasterDrinkList = this.state.masterDrinkList.concat(newDrink);
    this.setState({
      masterDrinkList: newMasterDrinkList,
      formVisibleOnPage: false  
    });
  }

  handleDrinkPour = (id) => {
    const selectedDrink = this.state.masterDrinkList.filter((drink) => drink.id === id)[0];
    if (selectedDrink.drinksLeft === 0) {
      alert("sorry we're out of this drink")
    } else {
      selectedDrink.drinksLeft --;
    }
    const upadatedDrinkList = this.state.masterDrinkList.filter(drink => drink.id !== id).concat(selectedDrink)
    this.setState({
      masterDrinkList: upadatedDrinkList
    })
    console.log(id)

    
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.formVisibleOnPage){
      currentlyVisibleState = <NewDrinkForm onNewDrinkCreation={this.handleAddingNewDrinkToList} />
      buttonText = "Return to Drink List"
    } else {
      currentlyVisibleState = (<DrinkList drinkList={this.state.masterDrinkList} drinkPouredClicked={this.handleDrinkPour} />)
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
export default DrinkControl