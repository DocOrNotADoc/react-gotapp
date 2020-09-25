import React, { Component } from 'react';
import ItemList from '../namesList/namesList';
import CharDetails from '../charDetails/charDetails';
import ErrorMessage from '../errorMessage/errorMessage';

export default class CharacterPage extends Component {

  state = {
    selectedChar: 130,
    error: false
  }

  componentDidCatch() {
      // console.log('error');
      this.setState({
          error: true
      })
  }

  onCharSelected = (id) => {
    this.setState({
        selectedChar: id
    })
  }

  render() {

    if (this.state.error) {
      return <ErrorMessage/>
    }

    return (
      <div className='row'>
        <div className='col-md-3 offset-1'>
          <ItemList onCharSelected={this.onCharSelected}/>
        </div>
        <div className='col-md-5 offset-1'>
          <CharDetails charId={this.state.selectedChar}/>
        </div>
      </div>
    )
  }
}