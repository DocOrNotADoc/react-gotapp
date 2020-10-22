import React, {Component} from 'react';
import styled from 'styled-components';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';

const ItemDetailsElement = styled.li`
            display: flex;
            justify-content: space-between;
            padding: 0.75rem 1.25rem;
            background-color: #f5f5ef;
            border-top: 1px solid rgba(0, 0, 0, 0.125);
            &:first-child {
                border-top-width: 0;
            }
        `;
const Field = ({item, field, label}) => {
    return (
        <ItemDetailsElement>
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </ItemDetailsElement>
    )
}
export {Field};

export default class ItemDetails extends Component {

    state = {
        item: null,
        loading: false,
        error: false
    }

    onError(){
        this.setState({
            item: null,
            error: true
        })
    }
    onItemDetailsLoaded = (item) => {
        this.setState({
            item,
            loading: !true
        })
    }

    componentDidMount() {
        this.updateItem();
    }
    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem(){
        const {itemId, getData} = this.props;
        if (!itemId){
            return;
        }

        this.setState({
            loading: true
        })

        getData(itemId)
            .then(this.onItemDetailsLoaded)
            .catch(() => this.onError())
    }

    render() {

        const SelectError = styled.span`
            background-color: #f5f5ef;
            padding: 5px 15px;
            border-radius: 0.4rem;
            text-align: center;
            font-size: 26px;
            border: 1px solid rgba(0, 0, 0, 0.125);
        `;
        const ItemDetailsCard = styled.div`
            background-color: #f5f5ef;
            padding: 25px 25px 15px 25px;
            margin-bottom: 40px;
            border-radius: 0.4rem;
            border: 1px solid rgba(0, 0, 0, 0.125);
            h4 {
                margin-bottom: 20px;
                text-align: center;
            }
            .term {
                font-weight: bold;
            }
        `;
        const ItemDetailsList = styled.ul`
            display: flex;
            flex-direction: column;
        `;
        
        
        if (!this.state.item && this.state.error) {
            return <ErrorMessage/>
        } else if (!this.state.item && !this.state.loading) {
            return <SelectError>Please select anyhting in the list</SelectError>
        } else if (this.state.loading) {
            return (
                <ItemDetailsCard>
                    <Spinner/>
                </ItemDetailsCard>
            )
        } 

        const {item} = this.state
        const {name} = item;

        return (
            <ItemDetailsCard>
                <h4>{name}</h4>
                <ItemDetailsList>
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ItemDetailsList>
            </ItemDetailsCard>
        );
    }
}