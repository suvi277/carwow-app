import React from 'react';
import Logo from 'app/components/Logo/Logo';
import './Header.scss';

const Header = ({ routes }) => {
	return (
		<header className="top-header">
			<div className="container">
				<Logo />
			</div>
		</header>
	);
};
export default Header;
