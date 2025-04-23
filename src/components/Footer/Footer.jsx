import React from "react";
import {
    BodyContainer,
} from "../StyledComponents/StyledComponents";
import {
    FooterContainer,
    FooterLayout,
    FooterCopyright
} from '../Footer/StyledComponents';
import { Fade } from "react-awesome-reveal";
import Data from '../../Data.js';

const Footer = (props) => (
    <Fade direction="top" delay={250} triggerOnce>
        <FooterContainer>
            <BodyContainer>
                <FooterLayout>
                    <FooterCopyright>
                        <p>
                            © {`${(new Date().getFullYear())} ${Data.home.name}`} 
                        </p>
                    </FooterCopyright>
                </FooterLayout>
            </BodyContainer>
        </FooterContainer>
    </Fade>
);

export default Footer;