import React from 'react';

const h1Style = {
	paddingTop: '30px',
	paddingBottom: '20px'
};

const PageTitle = ({ title }) => {
	return <h1 style={h1Style}>{title}</h1>;
};

export default PageTitle;
