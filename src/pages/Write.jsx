import React from 'react';
import {
    BodyContainer,
    Container
} from '../components/StyledComponents/StyledComponents.jsx';
import Navigation from '../components/Navigation/Navigation.jsx';
import WritePost from '../components/Write/WritePost.jsx';
import Footer from '../components/Footer/Footer.jsx';
import styled from 'styled-components';

const WritePageContainer = styled(Container)`
    padding-top: 100px;
    min-height: 100vh;
    background: linear-gradient(
        135deg,
#db1017, 
#008bb2    );
`;

const Write = () => {
    return (
        <>
            <Navigation page="write" />
            <BodyContainer>
                <WritePageContainer>
                    <WritePost />
                </WritePageContainer>
            </BodyContainer>
            <Footer />
        </>
    );
}

export default Write; 