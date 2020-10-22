import React, {Component} from 'react';
import styled from 'styled-components';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';


export default class ItemList extends Component {

  state = {
    itemList: null,
    error: false
  }

  componentDidMount() {

  const {getData} = this.props;

    getData()
    .then((itemList) => {
      this.setState({
        itemList,
        error: false
      });
    })
    .catch(() => {this.onError()});
  }
  componentDidCatch(){
    this.setState({
      itemList: null,
      error: true
    })
  }
  onError(){
    this.setState({
      itemList: null,
      error: true
    })
  }

  render() {

    const {itemList, error} = this.state;

    if (error) {
      return <ErrorMessage/>
    }
    if (!itemList) {
      return <Spinner/>
    }

    const NamesList = styled.ul`
      display: flex;
      margin-top: 90px;
      cursor: pointer;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    `;
    const NameOfChar = styled.li`
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
          <NameOfChar
            key={id}
            onClick={() => this.props.onItemSelected(id)}>
              {label}
          </NameOfChar>
        )
      })
    }

    const items = renderItems(itemList);

    return (
      <NamesList>
        {items}
      </NamesList>
    );
  }
}