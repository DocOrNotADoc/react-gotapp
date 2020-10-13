import React, {Component} from 'react';
import styled from 'styled-components';
import GotService from '../../services/gotService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';
import PropTypes from 'prop-types';

export default class RandomChar extends Component {

    gotService = new GotService();

    state = {
        char: {},
        loading: true,
        error: false
    }
    static defaultProps = {
        interval: 3000
    }
    static propTypes = {
        interval: PropTypes.number
    }

    componentDidMount() {
        this.updateChair();
        this.timerId = setInterval(this.updateChair, this.props.interval);
    }
    componentWillUnmount() {
        clearInterval(this.timerId);
    }
    componentDidCatch() {
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
        const id = Math.floor(Math.random()*140 + 25); //25-140
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    render() {

        const {char, loading, error} = this.state;

        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? <View char={char}/> : null;

        const NotError = () => {
            return (
                <RandomCharBlock>
                    {content}
                    {spinner}
                </RandomCharBlock>
            )
        }

        const itIsError = error ? <ErrorMessage/> : <NotError/>;

        const RandomCharBlock = styled.div`
                background-color: #f5f5ef;
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
    background-color: #f5f5ef;
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

// RandomChar.defaultProps = {
//     interval: 3000
// }
// RandomChar.propTypes = {
//     // interval: (props, propName, componentName) => {
//     //     const value = props[propName];

//     //     if (typeof value === 'number' && !isNaN(value)) {
//     //         return null
//     //     }
//     //     return new TypeError(`${componentName}: ${propName} must be a number`)
//     // }
//     interval: PropTypes.number
// }

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