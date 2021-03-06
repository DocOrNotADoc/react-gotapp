import React, {Component} from 'react';
import styled from 'styled-components';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';
import PropTypes from 'prop-types';

export default class ItemList extends Component {

    state = {
        itemList: null,
        error: false
    }
    static defaultProps = {
        onItemSelected: () => {}
    }
    static PropTypes = {
        onItemSelected: PropTypes.func
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

        const items = renderItems(itemList);

        return (
            <NamesList>
                {items}
            </NamesList>
        );
    }
}