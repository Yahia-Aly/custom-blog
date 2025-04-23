import React from 'react';
import styled from 'styled-components';
import { Container } from '../components/StyledComponents/StyledComponents';
import CoffeeOfTheDay from '../components/Coffee/CoffeeOfTheDay';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';

const CoffeePageContainer = styled(Container)`
    padding-top: 100px;
    min-height: 100vh;
    background-color: #772d00;
    background-image: linear-gradient(
        to bottom,
        #6f4d36,
        #634632,
        #583d2b,
        #4f3727, 
        #402d20
    );
`;

const Coffee = () => {
    return (
        <>
            <Navigation page="coffee" />
            <CoffeePageContainer>
                <CoffeeOfTheDay />
            </CoffeePageContainer>
            <Footer />
        </>
    );
};

export default Coffee;
