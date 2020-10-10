import React, { Component } from 'react';
import styled from 'styled-components';

export default class WelcomeComponent extends Component {

  render(){

    const WelcomeCard = styled.div`
      background-color: #fff;
      padding: 25px 25px 15px 25px;
      margin-top: 90px;
      // margin-bottom: 40px;
      border-radius: 0.4rem;
      h4, h6{
        text-align: center;
      }
    `;

    return(
      <WelcomeCard>
        <h4>Welcome to GoT database.</h4>
        <h6>Please, select categoty to see info.</h6>
      </WelcomeCard>
    )
  }
}