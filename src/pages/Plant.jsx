import React from 'react';
import styled from 'styled-components';
import { Container } from '../components/StyledComponents/StyledComponents';
import PlantOfTheDay from '../components/Plant/PlantOfTheDay';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import Data from '../Data';

const PlantPageContainer = styled(Container)`
    padding-top: 100px;
    min-height: 100vh;
    background-color: #ffffff;
    background-image: linear-gradient(
        to bottom,
        #d3f9bd,
        #a2c88c,
        #72985c,
        #41672b,
        #113700,
        #000600
    );
`;

const CenteredContainer = styled(Container)`
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
`;

const Plant = () => {
    return (
        <>
            <Navigation page="plant" />
            <PlantPageContainer>
                <CenteredContainer>
                    <h1>{Data.plant.title}</h1>
                    <PlantOfTheDay />
                </CenteredContainer>
            </PlantPageContainer>
            <Footer />
        </>
    );
};

export default Plant; 