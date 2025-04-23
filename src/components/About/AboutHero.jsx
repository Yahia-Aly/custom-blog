import React from 'react';
import {
    Container,
    HeroContainer
} from '../StyledComponents/StyledComponents';
import Data from '../../Data.js';

const AboutHero = () => {
    return(
        <HeroContainer
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 2, delay: 1 }}
            exit={{ opacity: 0 }}
        >
            <div>
                <Container bottom={3}>
                    <h1>{Data.about.title}</h1>
                </Container>
            </div>
        </HeroContainer>
    )
}

export default AboutHero;
