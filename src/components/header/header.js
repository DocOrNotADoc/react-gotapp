import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const HeaderBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
`;

const HeaderTitle = styled.h3`
    font-size: 24px;
    color: #fff;
    margin: 0;
`;

const HeaderLinks = styled.ul`
    display: flex;
    margin: 0;
    align-items: center;
    color: #fff;
    list-style-type: none;
    li {
        margin-right: 20px;
        font-size: 18px;
    }
`;

const Header = () => {
    return (
        <HeaderBlock>
            <HeaderTitle>
                <Link to='/'>
                Game of Thrones DB
                </Link>
            </HeaderTitle>
            <HeaderLinks>
                <li>
                    {/* <Link to='/characters'>Characters</Link> для абсолютного пути - как бы, указываем файл */}
                    <Link to='/characters/'>Characters</Link> {/* для относительного пути без ошибки - как бы, указываем папку  */}
                </li>
                <li>
                    {/* <Link to='/houses'>Houses</Link> для абсолютного пути - как бы, указываем файл  */}
                    <Link to='/houses/'>Houses</Link> {/* для относительного пути без ошибки - как бы, указываем папку  */}
                </li>
                <li>
                    {/* <Link to='/books'>Books</Link>   для абсолютного пути - как бы, указываем файл  */}
                    <Link to='/books/'>Books</Link> {/* для относительного пути без ошибки - как бы, указываем папку  */}
                </li>
            </HeaderLinks>
        </HeaderBlock>
    );
};

export default Header;