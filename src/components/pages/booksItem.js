import React, { Component } from 'react';
import GotService from '../../services/gotService';
import ItemDetails, {Field} from '../itemDetails/itemDetails';
import styled from 'styled-components';

export default class BooksItem extends Component {

  gotService = new GotService();
    
  render() {

    const CardPage = styled.div`
      margin-top:130px;
    `;

    return (
      <CardPage className='row'>
        <div className='col-md-6 offset-3'>
          <ItemDetails
            itemId={this.props.bookId}
            getData={this.gotService.getBook}>
              <Field field='numberOfPages' label='Number Of Pages'/>
              <Field field='publiser' label='Publiser'/>
              <Field field='released' label='Released'/>
          </ItemDetails>
        </div>
      </CardPage>
    )
  }
}