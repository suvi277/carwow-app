import React from 'react';
import styled from 'styled-components';

const PriceStyle = styled.div`
	font-size: 12px;
	color: #015668;
	padding: 15px 0;

	span {
		font-size: 24px;
		font-weight: bold;
	}
`;

const PriceInfo = ({ price, label }) => {
	return (
		<PriceStyle>
			{label} <span>£{price}</span>
		</PriceStyle>
	);
};

export default PriceInfo;
