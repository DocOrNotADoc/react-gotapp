import React, { Component } from 'react';
// import GotService from '../../services/gotService';
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import styled from 'styled-components';
import ErrorMessage from '../errorMessage/errorMessage';
import CharacterPage from '../characterPage/characterPage';
// import CharCardPattern from '../CharCardPattern/CharCardPattern';


export default class App extends Component {

    // переделать. Список имён (сделать уже) справа, выбранный персонаж слева. Куда случайного?

    state = {
        showRandomChar: true,
        error: false,
        selectedChar: 130
    }

    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }  
        });
    }

    render () {

        if (this.state.error) {
            return <ErrorMessage/>
        }

        const char = this.state.showRandomChar ? <RandomChar/> : null;

        const BtnToggleRandom = styled.button`
            width: 150px;
            height: 45px;
            background-color: #1d3f72;
            color: #fff;
            border: none;
            border-radius: 0.25rem;
            margin: -10px auto 35px 25px;
        `;

        return (
            <> 
                <div className='container'>
                    <Header />
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-5 offset-lg-0'>
                            {/* сделать min-width 299px */}
                            {char}
                        </div>
                    </div>
                    <BtnToggleRandom
                    onClick={this.toggleRandomChar}>Toggle random</BtnToggleRandom>
                    <CharacterPage/>
                    {/* <CharCardPattern onCharSelected={this.onCharSelected}/> */}
                </div>
            </>
        );
    }
};