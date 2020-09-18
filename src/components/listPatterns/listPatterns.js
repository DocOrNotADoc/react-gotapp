import React, {Component} from 'react';
import styled from 'styled-components';


export default class ListPatterns extends Component {

    render() {

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

        return (
            <CharBlock>
                <CharStatesList>
                    <CharState/>
                </CharStatesList>
            </CharBlock>
        );
    }
}

// выходит аналог того PostList, в котором я не разобрался. Надо сначала разобраться.