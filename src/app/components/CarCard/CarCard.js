import React from 'react';
import { Link } from 'react-router-dom';
import './CarCard.scss';
import CarImage from '../CarImage/CarImage';
import Button from '../Button/Button';
import PriceInfo from '../PriceInfo/PriceInfo';

const CarCard = (props) => (
	<li className="card shadow-lg">
		<CarImage altText={props.make} imgSrc={props.img_url} />
		<div className="card-info">
			<h5 className="card-label mb-0">{props.make}</h5>
			<span className="font-italic text-muted small">{props.model}</span>
			<PriceInfo price={props.rrp} label={`RRP from`} />
			<Link to={`/model/${props.id}`} title={props.model}>
				<Button type="button" label="See Details" classStyle="w-100 small" />
			</Link>
		</div>
	</li>
);

export default CarCard;
