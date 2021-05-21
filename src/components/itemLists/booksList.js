import React, {Component} from 'react';
import styled from 'styled-components';
import gotService from '../../services/gotService';
import withData from '../dataPlugsLayout/dataPlugsLayout';

class BooksList extends Component {

  render() {

    const BookzLizt = styled.ul`
      display: flex;
      margin-top: 90px;
      cursor: pointer;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    `;
    const NameOfBook = styled.li`
      padding: 12px 20px;
      // width: 200px;
      background-color: #f5f5ef;
      border: 1px solid rgba(0, 0, 0, 0.125);
      border-radius: 0.4rem;
      margin: 7px;
      list-style-type: none;
      text-aligin: center;
    `;

    const renderItems = (arr) => {
      return arr.map((item) => {
        const {id} = item;
        const label = this.props.renderItem(item);
        return (
          <NameOfBook
            key={id}
            onClick={() => this.props.onItemSelected(id)}>
              {label}
          </NameOfBook>
        )
      })
    }

    const { data } = this.props;

    const items = renderItems(data);

    return (
      <BookzLizt>
        {items}
      </BookzLizt>
    );
  }
}

const {getAllBooks} = new gotService();
export default withData(BooksList, getAllBooks);