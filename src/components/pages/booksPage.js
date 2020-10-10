import React, { Component } from 'react';
import ItemList from '../itemList/itemList';
// import ItemDetails, {Field} from '../itemDetails/itemDetails';
import ErrorMessage from '../errorMessage/errorMessage';
import GotService from '../../services/gotService';
// import RowBlock from '../rowBlock/rowBlock';
import {withRouter} from 'react-router-dom';


export class BooksPage extends Component {

  gotService = new GotService();

  state = {
    // selectedBook: null,
    error: false
  }

  // onItemSelected = (id) => {
  //   this.setState({
  //     selectedBook: id
  //   })
  // }

  componentDidCatch() {
      this.setState({
          error: true
      })
  }

  render() {

    if (this.state.error) {
      return <ErrorMessage/>
    }

    // const itemList = (
    //   <ItemList
    //     onItemSelected={this.onItemSelected}
    //     getData={this.gotService.getAllBooks}
    //     renderItem={({name}) => `${name}`}/>
    // )

    // const bookDetails = (
    //   <ItemDetails
    //     itemId={this.state.selectedBook}
    //     getData={this.gotService.getBook}>
    //       <Field field='numberOfPages' label='Number Of Pages'/>
    //       <Field field='publiser' label='Publiser'/>
    //       <Field field='released' label='Released'/>
    //   </ItemDetails>
    // )

    return (
      // <RowBlock left={itemList} right={bookDetails}/>
      <ItemList
        // onItemSelected={this.onItemSelected}
        onItemSelected={(itemId) => {
          // this.props.history.push(`/books/${itemId}`) // - корректно при указании асолютного пути (в header без слеша при указании как бы файла, а не папки)
          this.props.history.push(itemId) // для указания относительного пути. Важно не забыть слеш в ссыке на более высокий уровень,- как бы, на папку.
        }}
        getData={this.gotService.getAllBooks}
        renderItem={({name}) => `${name}`}/>
    )
  }
}

export default withRouter(BooksPage);