import React, {Component} from 'react';
// import './charDetails.css';
import styled from 'styled-components';

export default class CharDetails extends Component {

    render() {

        const CharDetails = styled.div`
            background-color: #fff;
            padding: 25px 25px 15px 25px;
            margin-bottom: 40px;
            border-radius: 0.25rem;
            h4 {
                margin-bottom: 20px;
                text-align: center;
            }
            .term {
                font-weight: bold;
            }
        `;

        const CharDetailsList = styled.ul`
            display: flex;
            flex-direction: column;
        `;

        const CharDetailsItem = styled.li`
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
            <CharDetails>
                <h4>John Snow</h4>
                <CharDetailsList>
                    <CharDetailsItem>
                        <span className="term">Gender</span>
                        <span>male</span>
                    </CharDetailsItem>
                    <CharDetailsItem>
                        <span className="term">Born</span>
                        <span>1783</span>
                    </CharDetailsItem>
                    <CharDetailsItem>
                        <span className="term">Died</span>
                        <span>1820</span>
                    </CharDetailsItem>
                    <CharDetailsItem>
                        <span className="term">Culture</span>
                        <span>First</span>
                    </CharDetailsItem>
                </CharDetailsList>
            </CharDetails>
        );
    }
}