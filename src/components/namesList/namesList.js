import React, {Component} from 'react';
// import './itemList.css';
import styled from 'styled-components';

export default class ItemList extends Component {

    render() {

        const NamesList = styled.ul`
            background-color: #fff;
            padding: 7px 25px;
            margin-bottom: 40px;
            border-radius: 0.25rem;
            cursor: pointer;
        `;

        const NameOfChar = styled.li`
            display: block;
            padding: 0.75rem 1.25rem;
            background-color: #fff;
            border-top: 1px solid rgba(0, 0, 0, 0.125);
            &:first-child {
                border-top-width: 0;
            }
        `;

        return (
            <NamesList>
                <NameOfChar>
                    John Snow
                </NameOfChar>
                <NameOfChar>
                    Brandon Stark
                </NameOfChar>
                <NameOfChar>
                    Geremy
                </NameOfChar>
            </NamesList>
        );
    }
}