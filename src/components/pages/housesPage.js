import React, { Component } from 'react';
import {HousesList} from '../itemLists';
import ItemDetails, {Field} from '../itemDetails/itemDetails';
import ErrorMessage from '../errorMessage/errorMessage';
import GotService from '../../services/gotService';
import RowBlock from '../rowBlock/rowBlock';


export default class HousesPage extends Component {

  gotService = new GotService();

  state = {
    selectedHouse: null,
    error: false
  }

  onItemSelected = (id) => {
    this.setState({
      selectedHouse: id
    })
  }

  componentDidCatch() {
      this.setState({
          error: true
      })
  }

  render() {

    if (this.state.error) {
      return <ErrorMessage/>
    }

    const itemList = (
      <HousesList
        onItemSelected={this.onItemSelected}
        getData={this.gotService.getAllHouses}
        renderItem={({name}) => `${name}`}/>
    )

    const houseDetails = (
      <ItemDetails
        itemId={this.state.selectedHouse}
        getData={this.gotService.getHouse}>
          <Field field='region' label='Region'/>
          <Field field='words' label='Words'/>
          <Field field='titles' label='Titles'/>
          {/* <Field field='overlord' label='Overlord'/> */}
          <Field field='ancestralWeapons' label='Ancestral Weapons'/>
      </ItemDetails>
    )

    return (
      <RowBlock left={itemList} right={houseDetails}/>
    )
  }
}