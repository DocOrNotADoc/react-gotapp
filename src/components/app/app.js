import React, { Component } from 'react';
import Header from '../header/header';
import {CharacterPage, HousesPage, BooksListPage, BooksItem, MainPage} from '../pages';
import {BrowserRouter as Router, Route} from 'react-router-dom';


export default class App extends Component {

    render () {

        return (
            <Router>
                <div className='app'>

                    <div className='container'>
                        <Header />
                    </div>

                    <div className='container'>
                        <Route path='/' exact component={MainPage}/>
                        <Route path='/characters' component={CharacterPage}/>
                        <Route path='/houses' component={HousesPage}/>
                        <Route path='/books' exact component={BooksListPage}/>
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