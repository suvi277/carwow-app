import React from 'react';

const CarImage = ({ imgSrc, altText }) => {
	return (
		<div className="car-img p-2">
			<img className="img-fluid" src={imgSrc} alt={altText} />
		</div>
	);
};

export default CarImage;
