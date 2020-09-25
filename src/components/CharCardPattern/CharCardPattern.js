import React, {Component} from 'react';
import styled from 'styled-components';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';
import GotService from '../../services/gotService';



export default class CharCardPattern extends Component {

    state = {
        char: null,
        loading: true,
        error: false
    }

    gotService = new GotService();

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

    onError(){
        this.setState({
            char: null,
            error: true
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
    
    render() {

        const {char, loading, error} = this.state;

        const CharBlock = styled.div`
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
        `;

        const CharStatesList = styled.ul`
            display: flex;
            flex-direction: column;
        `;

        const CharState = styled.li`
            display: flex;
            justify-content: space-between;
            padding: 0.75rem 1.25rem;
            background-color: #fff;
            border-top: 1px solid rgba(0, 0, 0, 0.125);
                &:first-child {
                border-top-width: 0;
            }
        `;

        // let {name, gender, born, died, culture} = char;
        // if (!name) {
        //     name = 'no data :(';
        // }
        // if (!gender) {
        //     gender = 'no data :(';
        // }
        // if (!born) {
        //     born = 'no data :(';
        // }
        // if (!died) {
        //     died = 'no data :(';
        // }
        // if (!culture) {
        //     culture = 'no data :(';
        // }

        const View = ({char}) => {

            let {name, gender, born, died, culture} = char;
            if (!name) {
                name = 'no data :(';
            }
            if (!gender) {
                gender = 'no data :(';
            }
            if (!born) {
                born = 'no data :(';
            }
            if (!died) {
                died = 'no data :(';
            }
            if (!culture) {
                culture = 'no data :(';
            }
        
            return (
                <CharBlock>
                    <CharStatesList>
                        <CharState>
                            <span className="term">Gender </span>
                            <span>{gender}</span>
                        </CharState>
                        <CharState>
                            <span className="term">Born </span>
                            <span>{born}</span>
                        </CharState>
                        <CharState>
                            <span className="term">Died </span>
                            <span>{died}</span>
                        </CharState>
                        <CharState>
                            <span className="term">Culture </span>
                            <span>{culture}</span>
                        </CharState>
                    </CharStatesList>
                </CharBlock>
            )
        }

        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? <View char={char}/> : null;

        const NotError = () => {
            return (
                <CharBlock>
                    {/* {errorMessage} */}
                    {spinner}
                    {content}
                </CharBlock>
            )
        }

        const itIsError = error ? <ErrorMessage/> : <NotError/>;

        return (
            // <CharBlock>
            //     <CharStatesList>
            //         <CharState>
            //             <span className="term">Gender </span>
            //             <span>{gender}</span>
            //         </CharState>
            //         <CharState>
            //             <span className="term">Born </span>
            //             <span>{born}</span>
            //         </CharState>
            //         <CharState>
            //             <span className="term">Died </span>
            //             <span>{died}</span>
            //         </CharState>
            //         <CharState>
            //             <span className="term">Culture </span>
            //             <span>{culture}</span>
            //         </CharState>
            //     </CharStatesList>
            // </CharBlock>
            <>
                {itIsError}
            </>
        );
    }
}

// выходит аналог того PostList, в котором я не разобрался. Надо сначала разобраться.