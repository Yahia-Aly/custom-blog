import React from 'react';
import Data from '../../Data.js';
import {
    Container,
    HeroContainer,
    BodyContainer
} from '../StyledComponents/StyledComponents';
import Button from '../Utility/Button';
import styled from 'styled-components';

const HeroDescription = styled.p`
    font-size: 2rem;
    line-height: 1.6;
    opacity: 0.9;

    @media (max-width: ${props => props.theme.queries.mobile}) {
        font-size: 1.1rem;
    }
`;

const HomeHero = () => {
    return(
        <HeroContainer
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 2, delay: 1 }}
            exit={{ opacity: 0 }}
        >
            <BodyContainer>
                <Container width={80} leftAlign bottom={2}>
                    <h1>{Data.home.title}</h1>
                </Container>

                <Container leftAlign bottom={0} width={75}>
                    <HeroDescription>{Data.home.description}</HeroDescription>
                </Container>

            </BodyContainer>
        </HeroContainer>
    )
}

export default HomeHero;
