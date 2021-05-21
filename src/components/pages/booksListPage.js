import React, { Component } from 'react';
import {BooksList} from '../itemLists';
import ErrorMessage from '../errorMessage/errorMessage';
import GotService from '../../services/gotService';
import {withRouter} from 'react-router-dom';


class BooksListPage extends Component {

  gotService = new GotService();

  state = {
    error: false
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

    return (
      <BooksList
        onItemSelected={(itemId) => {
          this.props.history.push(itemId)
        }}
        getData={this.gotService.getAllBooks}
        renderItem={({name}) => `${name}`}/>
    )
  }
}

export default withRouter(BooksListPage);