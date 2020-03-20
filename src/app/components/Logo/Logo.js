import React from 'react';
import logo from 'app/assets/images/logo.png';
import { Link } from 'react-router-dom';

const Logo = () => {
	return (
		<Link to="/" className="navbar-brand">
			<img src={logo} alt="logo" width="150" />
		</Link>
	);
};
export default Logo;
