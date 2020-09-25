import React, {Component} from 'react';
// import './randomChar.css';
import styled from 'styled-components';
import GotService from '../../services/gotService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';

export default class RandomChar extends Component {

    gotService = new GotService();

    state = {
        char: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateChair();
        this.timerId = setInterval(this.updateChair, 3000);
        // console.log('mounting');
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
        // console.log('unmounting');
    }

    // ????
    componentDidCatch() {
        // console.log('error');
        this.setState({
            error: true,
            loading: false
        })
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateChair = () => {
        // console.log('update');
        const id = Math.floor(Math.random()*140 + 25); //25-140
        // const id = 453843875; //error test
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    render() {

        // console.log('render');

        const {char, loading, error} = this.state;

        // const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? <View char={char}/> : null;

        const NotError = () => {
            return (
                <RandomCharBlock>
                    {/* {errorMessage} */}
                    {spinner}
                    {content}
                </RandomCharBlock>
            )
        }

        const itIsError = error ? <ErrorMessage/> : <NotError/>;

        const RandomCharBlock = styled.div`
                background-color: #fff;
                padding: 25px 25px 15px 25px;
                margin-bottom: 40px;
                border-radius: 0.25rem;
            h4{
                margin-bottom: 20px;
                text-align: center;
            }
            .term {
                font-weight: bold;
            }
            img {

            }
            loadingio-spinner-spinner-u5v2nvkavip {
                margin: 0 auto;
            }
        `;
        
        
        return (
            <>
            {itIsError}
            </>
        );
    }
}

const RandomCharStatesList = styled.ul`
    display: flex;
    flex-direction: column;
`;

const RandomCharState = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 1.25rem;
    background-color: #fff;
    border-top: 1px solid rgba(0, 0, 0, 0.125);
        &:first-child {
        border-top-width: 0;
    }
    span {
        font-weight: bold;
    }
    div {
        text-aligin: left;
    }
`;

const View = ({char}) => {

    const {name, gender, born, died, culture} = char;

    return (
        <>
            <h4>Random Character: {name}</h4>
                <RandomCharStatesList>
                    <RandomCharState>
                        <span>Gender </span>
                        <div>{gender}</div>
                    </RandomCharState>
                    <RandomCharState>
                        <span>Born </span>
                        <div>{born}</div>
                    </RandomCharState>
                    <RandomCharState>
                        <span>Died </span>
                        <div>{died}</div>
                    </RandomCharState>
                    <RandomCharState>
                        <span>Culture </span>
                        <div>{culture}</div>
                    </RandomCharState>
                </RandomCharStatesList>
        </>
    )
}