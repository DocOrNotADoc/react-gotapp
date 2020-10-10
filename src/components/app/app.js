import React, { Component } from 'react';
import styled from 'styled-components';
import ErrorMessage from '../errorMessage/errorMessage';
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import {CharacterPage, HousesPage, BooksPage, BooksItem, MainPage} from '../pages';
import {BrowserRouter as Router, Route} from 'react-router-dom';


export default class App extends Component {

    // state = {
    //     showRandomChar: true,
    //     error: false
    // }

    // componentDidCatch() {
    //     console.log('error');
    //     this.setState({
    //         error: true
    //     })
    // }

    // toggleRandomChar = () => {
    //     this.setState((state) => {
    //         return {
    //             showRandomChar: !state.showRandomChar
    //         }  
    //     });
    // }

    render () {

        // if (this.state.error) {
        //     return <ErrorMessage/>
        // }

        // const char = this.state.showRandomChar ? <RandomChar/> : null;

        // const BtnToggleRandom = styled.button`
        //     width: 150px;
        //     height: 45px;
        //     background-color: #1d3f72;
        //     color: #fff;
        //     border: none;
        //     border-radius: 0.25rem;
        //     margin: -10px auto 35px 25px;
        // `;

        return (
            <Router>
                <div className='app'>

                    <div className='container'>
                        <Header />
                    </div>

                    <div className='container'>
                        {/* <div className='row'>
                            <div className='col-lg-5 offset-lg-0'>
                                {char}
                            </div>
                        </div> */}
                        {/* <BtnToggleRandom
                            onClick={this.toggleRandomChar}
                                >Toggle random</BtnToggleRandom> */}
                        <Route path='/' exact component={MainPage}/>
                        <Route path='/characters' component={CharacterPage}/>
                        <Route path='/houses' component={HousesPage}/>
                        <Route path='/books' exact component={BooksPage}/>
                        <Route path='/books/:id' render={
                            ({match}) => {
                                const {id} = match.params;

                                return  <BooksItem bookId={id}/>
                            }
                        }/>

                    </div>
                </div>
            </Router>
        );
    }
};