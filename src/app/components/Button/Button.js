import React from 'react';
import './Button.scss';

const Button = ({ type, label, classStyle }) => {
	return (
		<button type={type} className={classStyle}>
			{label}
		</button>
	);
};

export default Button;
