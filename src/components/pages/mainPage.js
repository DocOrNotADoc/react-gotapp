import React, { Component } from 'react';
// import styled from 'styled-components';
import RandomChar from '../randomChar/randomChar';
import WelcomeComponent from '../welcome/welcome';
import ErrorMessage from '../errorMessage/errorMessage';

export default class MainPage extends Component{
  
  state = {
    showRandomChar: true,
    error: false
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

  render(){

    if (this.state.error) {
      return <ErrorMessage/>
    }

    const char = this.state.showRandomChar ? <RandomChar interval={3000}/> : null;

    // const BtnToggleRandom = styled.button`
    //   width: 150px;
    //   height: 45px;
    //   background-color: #1d3f72;
    //   color: #fff;
    //   border: none;
    //   border-radius: 0.25rem;
    //   margin: -10px auto 35px 25px;
    // `;
    

    return(
      <>
        <div className='row'>
          <div className='col-lg-5 offset-lg-0'>
            {char}
          </div>
          <div className='col-lg-5 offset-lg-1'>
            <WelcomeComponent/>
          </div>
        </div>
        {/* <BtnToggleRandom
          onClick={this.toggleRandomChar}
            >Toggle random</BtnToggleRandom> */}
      </>
    )
  }
}