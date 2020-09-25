import React from 'react';
import img from './error.jpg';
import styled from 'styled-components';

const ErrorMessageBlock = styled.div`
  background-color: #fff;
  margin-bottom: 40px;
  padding: 20px 20px 10px 20px;
  border-radius: 0.25rem;
  img {
    max-width: 100%;
    margin-bottom: 10px;
  }
  span {
    font-weight: 700;
  }
`;

const ErrorMessage = () => {
  return (
    <ErrorMessageBlock>
      <img src={img} alt ="error"></img>
      <span>Something goes wrong</span>
    </ErrorMessageBlock>
  )
}

export default ErrorMessage;