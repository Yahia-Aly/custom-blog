import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Data from '../../Data';

const Logo = () => {
    const initials = Data.home.name.split(' ').map(word => word[0]).join('');

    return (
        <NavLogo to="/">
            <DesktopLogo>
                {Data.home.name}
            </DesktopLogo>
            <MobileLogo>
                {initials}
            </MobileLogo>
        </NavLogo> 
    );
};

const NavLogo = styled(Link)`
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 1.5rem;
`;

const DesktopLogo = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
`;

const MobileLogo = styled.div`
    display: none;
    @media (max-width: 768px) {
        display: block;
    }
`;

export default Logo;
