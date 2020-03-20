import React from 'react';
import './CarInfo.scss';
import Button from '../Button/Button';
import PriceInfo from '../PriceInfo/PriceInfo';

const CarInfo = ({ make, model, summary, rrp }) => {
	return (
		<div className="card-detail-holder">
			<h2>{make}</h2>
			<span className="car-tagline">{model}</span>
			<p className="car-summary">{summary}</p>
			<PriceInfo price={rrp} label={`From`} />
			<Button type="button" label="Get Offers" />
		</div>
	);
};

export default CarInfo;
