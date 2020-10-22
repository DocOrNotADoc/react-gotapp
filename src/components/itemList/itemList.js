import React, {Component} from 'react';
import styled from 'styled-components';
import gotService from '../../services/gotService';
import withData from '../dataPlugsLayout/dataPlugsLayout';


class ItemList extends Component {

    render() {

        const NamesList = styled.ul`
            background-color: #f5f5ef;
            padding: 7px 25px;
            margin-bottom: 40px;
            border-radius: 0.4rem;
            cursor: pointer;
            border: 1px solid rgba(0, 0, 0, 0.125);
        `;
        const NameOfChar = styled.li`
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
                    <NameOfChar
                        key={id}
                        onClick={() => this.props.onItemSelected(id)}>
                            {label}
                    </NameOfChar>
                )
            })
        }

        const { data } = this.props;

        const items = renderItems(data);

        return (
            <NamesList>
                {items}
            </NamesList>
        );
    }
}

const {getAllCharacters} = new gotService();
export default withData(ItemList, getAllCharacters);