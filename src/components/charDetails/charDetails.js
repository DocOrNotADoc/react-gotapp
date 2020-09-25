import React, {Component} from 'react';
// import './charDetails.css';
import styled from 'styled-components';
import GotService from '../../services/gotService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';


export default class CharDetails extends Component {

    gotService = new GotService();

    state = {
        char: null,
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    onCharDetailsLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    updateChar(){

        const {charId} = this.props;

        if (!charId){
            return;
        }

        this.setState({
            loading: true
        })

        this.gotService.getCharacter(charId)
            .then(this.onCharDetailsLoaded)
            .catch(() => this.onError())
            // this.foo.bar = 0; // test error
    }

    onError(){
        this.setState({
            char: null,
            error: true
        })
    }

    render() {

        const SelectError = styled.span`
            color: #fff;
            text-align: center;
            font-size: 26px;
        `;
        const CharDetails = styled.div`
            background-color: #fff;
            padding: 25px 25px 15px 25px;
            margin-bottom: 40px;
            border-radius: 0.25rem;
            h4 {
                margin-bottom: 20px;
                text-align: center;
            }
            .term {
                font-weight: bold;
            }
        `;
        const CharDetailsList = styled.ul`
            display: flex;
            flex-direction: column;
        `;
        const CharDetailsItem = styled.li`
            display: flex;
            justify-content: space-between;
            padding: 0.75rem 1.25rem;
            background-color: #fff;
            border-top: 1px solid rgba(0, 0, 0, 0.125);
            &:first-child {
                border-top-width: 0;
            }
        `;


        if (!this.state.char && this.state.error) {
            return <ErrorMessage/>
        } else if (!this.state.char) {
            return <SelectError>Please select a character</SelectError>
        }

        const {name, gender, born, died, culture} = this.state.char;

        if (this.state.loading) {
            return (
                <CharDetails>
                    <Spinner/>
                </CharDetails>
            )
        }

        return (
            <CharDetails>
                <h4>{name}</h4>
                <CharDetailsList>
                    <CharDetailsItem>
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </CharDetailsItem>
                    <CharDetailsItem>
                        <span className="term">Born</span>
                        <span>{born}</span>
                    </CharDetailsItem>
                    <CharDetailsItem>
                        <span className="term">Died</span>
                        <span>{died}</span>
                    </CharDetailsItem>
                    <CharDetailsItem>
                        <span className="term">Culture</span>
                        <span>{culture}</span>
                    </CharDetailsItem>
                </CharDetailsList>
            </CharDetails>
        );
    }
}