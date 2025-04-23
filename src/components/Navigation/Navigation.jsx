import React, { useState, useEffect } from 'react';
import Logo from '../Logo/Logo';
import {
	NavContainer,
	Nav,
	SubNavMenu,
	SubNavMenuList,
	SubNavMenuListItem,
	SubNavMenuLink
} from './Style';

const Navigation = ({ page }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
	const [userRole, setUserRole] = useState(localStorage.getItem('userRole'));

	useEffect(() => {
		const handleStorageChange = () => {
			setUserRole(localStorage.getItem('userRole'));
		};

		window.addEventListener('storage', handleStorageChange);
		return () => {
			window.removeEventListener('storage', handleStorageChange);
		};
	}, []);

	return (
		<NavContainer>
			<Nav>
				<Logo />
				<SubNavMenu isOpen={isSubMenuOpen}>
					<SubNavMenuList>
						<SubNavMenuListItem>
							<SubNavMenuLink
								to="/"
								className={page === "home" ? "active" : ""}
							>
								Home
							</SubNavMenuLink>
						</SubNavMenuListItem>
						<SubNavMenuListItem>
							<SubNavMenuLink
								to="/coffee"
								className={page === "coffee" ? "active" : ""}
							>
								Coffee
							</SubNavMenuLink>
						</SubNavMenuListItem>
						<SubNavMenuListItem>
							<SubNavMenuLink
								to="/plant"
								className={page === "plant" ? "active" : ""}
							>
								Plant
							</SubNavMenuLink>
						</SubNavMenuListItem>
						{userRole === 'admin' && (
							<SubNavMenuListItem>
								<SubNavMenuLink
									to="/write"
									className={page === "write" ? "active" : ""}
								>
									Write
								</SubNavMenuLink>
							</SubNavMenuListItem>
						)}
						{!userRole && (
							<SubNavMenuListItem>
								<SubNavMenuLink
									to="/login"
									className={page === "login" ? "active" : ""}
								>
									Login
								</SubNavMenuLink>
							</SubNavMenuListItem>
						)}
					</SubNavMenuList>
				</SubNavMenu>
			</Nav>
		</NavContainer>
	);
}

export default Navigation;
