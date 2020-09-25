import React, {Component} from 'react';
// import './itemList.css';
import styled from 'styled-components';
import GotService from '../../services/gotService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';

export default class ItemList extends Component {

    gotService = new GotService();

    state = {
        charList: null,
        error: false
    }

    componentDidMount() {
        this.gotService.getAllCharacters()
            .then((charList) => {
                this.setState({
                    charList,
                    error: false
                });
            })
            .catch(() => {this.onError()});
    }

    componentDidCatch(){
        this.setState({
            charList: null,
            error: true
        })
    }
    onError(){
        this.setState({
            charList: null,
            error: true
        })
    }

    render() {

        const {charList, error} = this.state;

        if (error) {
            return <ErrorMessage/>
        }
        if (!charList) {
            return <Spinner/>
        }

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

        const renderItems = (arr) => {
            return arr.map((item, i) => {
                return (
                    <NameOfChar
                        key={i}
                        onClick={() => this.props.onCharSelected(i)}>
                        {item.name}
                    </NameOfChar>
                )
            })
        }

        const items = renderItems(charList);

        return (
            <NamesList>
                {items}
                {/* {renderItems(charList)} */}
            </NamesList>
        );
    }
}