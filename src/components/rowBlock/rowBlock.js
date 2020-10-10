import React from 'react';
import styled from 'styled-components';


const RowBlock = ({left, right}) => {

  const Right = styled.div`
    margin-top: 90px;
  `;

  return (
    <div className='row'>
      <div className='col-md-4 offset-1'>
        {/* go to native 3,5 col in flex */}
        {left}
      </div>
      <Right className='col-md-5 offset-1'>
        {right}
      </Right>
    </div>
  )
}

export default RowBlock;
