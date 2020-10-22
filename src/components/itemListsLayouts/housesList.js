import React, {Component} from 'react';
import styled from 'styled-components';

export default class HousesList extends Component {
  
  render() {

    const HouzezLizt = styled.ul`
        background-color: #f5f5ef;
        padding: 7px 25px;
        margin-bottom: 40px;
        border-radius: 0.4rem;
        cursor: pointer;
        border: 1px solid rgba(0, 0, 0, 0.125);
    `;
    const NameOfHouze = styled.li`
        display: block;
        padding: 0.75rem 1.25rem;
        background-color: #f5f5ef;
        border-top: 1px solid rgba(0, 0, 0, 0.125);
        &:first-child {
            border-top-width: 0;
        }
    `;

    const renderItems = (arr) => {
        return arr.map((item) => {
            const {id} = item;
            const label = this.props.renderItem(item);
            return (
                <NameOfHouze
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                        {label}
                </NameOfHouze>
            )
        })
    }

    const { data } = this.props;

    const items = renderItems(data);

    return (
        <HouzezLizt>
            {items}
        </HouzezLizt>
    );
  }
}